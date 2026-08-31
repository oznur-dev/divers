"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { stripLocaleFromPathname } from "@/lib/i18n/utils";

export interface LocaleSwitcherProps {
  locale: Locale;
  label: string;
  className?: string;
}

export function LocaleSwitcher({ locale, label, className }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  React.useEffect(() => {
    if (!open) return;
    const onClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        title={label}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-1 rounded-full border border-border bg-surface px-3 text-xs font-semibold uppercase tracking-wide text-foreground",
          "transition-all hover:border-ocean-medium hover:bg-ocean-light/10 hover:text-ocean-deep dark:hover:text-ocean-light",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-medium focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        {locale}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-36 overflow-hidden rounded-xl border border-border/60 bg-surface py-1 shadow-xl shadow-ocean-medium/10"
        >
          {locales.map((option) => (
            <li key={option}>
              <Link
                href={`/${option}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                role="option"
                aria-selected={option === locale}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3.5 py-2 text-sm transition-colors",
                  option === locale
                    ? "bg-ocean-light/15 font-semibold text-ocean-deep dark:text-ocean-light"
                    : "text-muted-foreground hover:bg-ocean-light/10 hover:text-ocean-deep dark:hover:text-ocean-light",
                )}
              >
                {localeNames[option]}
                <span className="text-xs uppercase text-muted-foreground">{option}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
