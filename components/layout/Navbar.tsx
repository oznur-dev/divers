"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { cn } from "@/lib/utils";
import type { NavLink, SiteContent } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/utils";

export interface NavbarProps {
  locale: Locale;
  brandName: string;
  links: NavLink[];
  ui: SiteContent["ui"];
}

/* Subscribe to window scroll via useSyncExternalStore (no setState-in-effect). */
function subscribeScroll(notify: () => void): () => void {
  window.addEventListener("scroll", notify, { passive: true });
  return () => window.removeEventListener("scroll", notify);
}
const getScrolledSnapshot = (): boolean => window.scrollY > 8;
const getScrolledServerSnapshot = (): boolean => false;

export function Navbar({ locale, brandName, links, ui }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const scrolled = React.useSyncExternalStore(
    subscribeScroll,
    getScrolledSnapshot,
    getScrolledServerSnapshot,
  );

  // Close the mobile menu when navigating; called from Link onClick handlers.
  const closeMenu = React.useCallback(() => setOpen(false), []);

  const localizedHome = localizeHref(locale, "/");
  const isActive = (href: string) => {
    const target = localizeHref(locale, href);
    return href === "/" ? pathname === localizedHome : pathname?.startsWith(target);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm shadow-ocean-medium/5 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md",
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Link
            href={localizedHome}
            onClick={closeMenu}
            aria-label={brandName}
            className="group flex items-center text-base font-semibold tracking-tight text-foreground"
          >
            <span className="relative flex h-12 items-center justify-center">
              <span className="absolute inset-0 -m-2 rounded-full bg-ocean-light/25 blur-md transition-all duration-300 group-hover:bg-ocean-medium/35 group-hover:blur-lg" />
              <img
                src="/logoD.png"
                alt={brandName}
                className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizeHref(locale, link.href)}
                  className={cn(
                    "relative inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200",
                    isActive(link.href)
                      ? "pill-gradient-soft text-ocean-deep shadow-sm dark:text-ocean-light"
                      : "text-muted-foreground hover:bg-ocean-light/10 hover:text-ocean-deep dark:hover:text-ocean-light",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LocaleSwitcher locale={locale} label={ui.localeSwitcherLabel} />
            <ThemeToggle />
            <ButtonLink
              href={localizeHref(locale, "/contact")}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {ui.contactCta}
            </ButtonLink>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface text-foreground transition-all md:hidden",
                "hover:border-ocean-medium/60 hover:bg-ocean-light/10 hover:text-ocean-deep dark:hover:text-ocean-light",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-medium",
              )}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-all md:hidden",
          open ? "block max-h-screen" : "hidden max-h-0",
        )}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizeHref(locale, link.href)}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    isActive(link.href)
                      ? "pill-gradient-soft text-ocean-deep dark:text-ocean-light"
                      : "text-muted-foreground hover:bg-ocean-light/10 hover:text-ocean-deep dark:hover:text-ocean-light",
                  )}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2">
              <ButtonLink
                href={localizeHref(locale, "/contact")}
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                {ui.contactCta}
              </ButtonLink>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
