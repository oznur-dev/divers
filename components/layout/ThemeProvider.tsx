"use client";

import * as React from "react";

/* ---------- External theme store ---------- */

type Theme = "light" | "dark";
type ThemeSetting = Theme | "system";

const STORAGE_KEY = "anemon-theme";

interface ThemeState {
  setting: ThemeSetting;
  theme: Theme;
}

const initialState: ThemeState = { setting: "system", theme: "light" };
let state: ThemeState = initialState;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function resolveTheme(setting: ThemeSetting): Theme {
  if (setting === "light" || setting === "dark") return setting;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyDom(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function readFromEnvironment(): ThemeState {
  if (typeof window === "undefined") return initialState;
  const stored =
    (localStorage.getItem(STORAGE_KEY) as ThemeSetting | null) ?? "system";
  return { setting: stored, theme: resolveTheme(stored) };
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): ThemeState {
  return state;
}

function getServerSnapshot(): ThemeState {
  return initialState;
}

/**
 * Updates the in-memory store, persists the setting, and syncs the DOM.
 * Safe to call from event handlers — never from an effect body.
 */
function setSetting(next: ThemeSetting): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, next);
  }
  const theme = resolveTheme(next);
  state = { setting: next, theme };
  if (typeof window !== "undefined") {
    applyDom(theme);
  }
  emit();
}

/* ---------- One-time client init (outside React) ---------- */

let initialized = false;

function ensureInitialized(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  // Sync the store with the DOM (already set by the inline <head> script).
  state = readFromEnvironment();
  applyDom(state.theme);

  // React to OS-level theme changes while in "system" mode.
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", () => {
    if (state.setting !== "system") return;
    const theme: Theme = media.matches ? "dark" : "light";
    state = { ...state, theme };
    applyDom(theme);
    emit();
  });

  // React to changes made in another tab.
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    state = readFromEnvironment();
    applyDom(state.theme);
    emit();
  });
}

// Run init at module load on the client; no-op during SSR.
ensureInitialized();

/* ---------- React API ---------- */

interface ThemeContextValue {
  theme: Theme;
  setting: ThemeSetting;
  setTheme: (next: ThemeSetting) => void;
  toggleTheme: () => void;
  /** True once the client has hydrated. Use to avoid SSR/CSR markup mismatch. */
  hydrated: boolean;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setting } = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const hydrated = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      setting,
      hydrated,
      setTheme: setSetting,
      toggleTheme: () => setSetting(theme === "dark" ? "light" : "dark"),
    }),
    [theme, setting, hydrated],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

/* ---------- Pre-hydration script ---------- */

/**
 * Inline script that runs before React hydrates to set the initial theme.
 * Place inside `<head>` to avoid a flash of incorrect theme.
 */
export const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem('${STORAGE_KEY}');
    const setting = stored || 'system';
    const isDark = setting === 'dark' || (setting === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch (_) {}
})();`;
