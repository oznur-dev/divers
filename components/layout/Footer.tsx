import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { SiteContent } from "@/lib/types";

export interface FooterProps {
  site: SiteContent;
}

export function Footer({ site }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/50 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/40">
      {/* Top accent wave */}
      <div className="absolute left-0 right-0 top-0 h-1 btn-gradient-secondary" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-ocean-light/20 blur-3xl dark:bg-ocean-medium/10" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-ocean-deep/15 blur-3xl dark:bg-ocean-deep/15" />

      {/* Top wave SVG */}
      <svg className="absolute left-0 right-0 top-0 w-full text-ocean-medium/10 dark:text-ocean-medium/20" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,32 C240,64 480,8 720,32 C960,56 1200,16 1440,40 L1440,0 L0,0 Z" />
      </svg>

      <Container>
        <div className="relative grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              aria-label={site.name}
              className="group inline-flex items-center text-base font-bold tracking-tight"
            >
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute inset-0 -m-2 rounded-full bg-ocean-light/35 blur-md transition-all group-hover:bg-ocean-medium/45" />
                <img
                  src="/logoD.png"
                  alt={site.name}
                  className="relative h-14 w-auto transition-transform group-hover:scale-105"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.footer.description}
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.instagram.com/anemonturizm/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface text-muted-foreground transition-all hover:scale-110 hover:border-ocean-medium/60 hover:bg-gradient-to-br hover:from-ocean-medium hover:to-ocean-deep hover:text-white hover:shadow-md hover:shadow-ocean-medium/30"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/anemonturizm"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface text-muted-foreground transition-all hover:scale-110 hover:border-ocean-medium/60 hover:bg-gradient-to-br hover:from-ocean-medium hover:to-ocean-deep hover:text-white hover:shadow-md hover:shadow-ocean-medium/30"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=905382684857"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface text-muted-foreground transition-all hover:scale-110 hover:border-emerald-500/60 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-white hover:shadow-md hover:shadow-emerald-500/30"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="relative inline-block text-sm font-bold text-foreground">
                {column.title}
                <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full btn-gradient-secondary" />
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-ocean-medium dark:hover:text-ocean-light"
                    >
                      <span className="h-1 w-1 rounded-full bg-ocean-medium/0 transition-all group-hover:w-3 group-hover:bg-ocean-medium" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border/60 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            {site.footer.copyright}
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            TURSAB Belge No: A8428
          </p>
        </div>
      </Container>
    </footer>
  );
}
