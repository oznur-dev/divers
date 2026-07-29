import { cn } from "@/lib/utils";
import type { Service } from "@/lib/types";
import * as LucideIcons from "lucide-react";

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-sm shadow-slate-900/[0.03]",
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
      
      <div className="relative p-6">
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
        
        {/* Bottom accent line */}
        <div className="mt-4 h-1 w-12 rounded-full btn-gradient-secondary transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}
