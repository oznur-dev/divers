"use client";

import * as React from "react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, hydrated } = useTheme();

  const isDark = hydrated && theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground",
        "transition-all hover:scale-105 hover:border-ocean-medium hover:bg-ocean-light/10 hover:text-ocean-deep dark:hover:text-ocean-light",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-medium focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* Render an icon only after hydration to avoid SSR/CSR mismatch. */}
      <span className="sr-only">{label}</span>
      {hydrated ? isDark ? <SunIcon /> : <MoonIcon /> : null}
    </button>
  );
}
