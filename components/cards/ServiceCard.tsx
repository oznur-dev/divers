import { cn } from "@/lib/utils";
import type { Service, SiteContent } from "@/lib/types";
import * as LucideIcons from "lucide-react";

export interface ServiceCardProps {
  service: Service;
  whatsapp?: SiteContent["whatsapp"];
  className?: string;
}

export function ServiceCard({ service, whatsapp, className }: ServiceCardProps) {
  const reserveHref = whatsapp
    ? `https://api.whatsapp.com/send?phone=${whatsapp.phone}&text=${encodeURIComponent(
        whatsapp.reserveMessageTemplate.replace("{service}", service.title),
      )}`
    : undefined;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-sm shadow-slate-900/[0.03]",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:border-ocean-medium/40 hover:shadow-2xl hover:shadow-ocean-medium/15",
        "dark:shadow-black/20 dark:hover:shadow-ocean-medium/25",
        className,
      )}
    >
      {/* Gradient border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean-light/0 via-ocean-medium/0 to-ocean-deep/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Service Image */}
      {service.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        </div>
      )}
      
      <div className="relative flex flex-1 flex-col p-6">
        {/* Decorative blob */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-ocean-light/10 blur-2xl transition-all group-hover:bg-ocean-medium/30" />

        {service.icon && (() => {
          const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as any;
          return IconComponent ? (
            <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl icon-gradient-bg text-white shadow-lg shadow-ocean-medium/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-ocean-medium/50 dark:text-slate-950">
              <IconComponent size={22} strokeWidth={1.75} />
            </div>
          ) : null;
        })()}
        <h3 className="relative z-10 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-ocean-deep dark:group-hover:text-ocean-light">
          {service.title}
        </h3>
        <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <div className="relative z-10 mt-auto">
          {whatsapp && reserveHref && (
            <a
              href={reserveHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-full btn-gradient-primary px-5 text-sm font-semibold text-white shadow-md shadow-ocean-medium/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ocean-medium/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              {whatsapp.reserveLabel}
            </a>
          )}

          {/* Bottom accent line */}
          <div className="mt-4 h-1 w-12 rounded-full btn-gradient-secondary transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </article>
  );
}
