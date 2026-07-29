"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-gradient-primary text-white shadow-lg shadow-ocean-medium/30 hover:shadow-xl hover:shadow-ocean-medium/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 dark:text-slate-950 dark:shadow-ocean-medium/40",
  secondary:
    "btn-gradient-secondary text-white shadow-md shadow-ocean-light/30 hover:shadow-lg hover:shadow-ocean-light/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 dark:text-slate-950",
  outline:
    "border border-ocean-medium/50 bg-surface/40 backdrop-blur-sm text-ocean-deep hover:bg-ocean-light/10 hover:border-ocean-deep hover:shadow-md hover:shadow-ocean-medium/20 hover:-translate-y-0.5 transition-all dark:border-ocean-light/40 dark:text-ocean-light dark:hover:bg-ocean-light/10 dark:hover:border-ocean-light",
  ghost:
    "bg-transparent text-ocean-deep hover:bg-ocean-light/10 transition-all dark:text-ocean-light dark:hover:bg-ocean-light/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

/**
 * Anchor styled like `Button`, rendered via `next/link` for prefetching.
 * Use for in-app navigation; use a plain `<a>` for external links.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-medium focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
