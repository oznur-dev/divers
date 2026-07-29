import { cn } from "@/lib/utils";
import type { Value } from "@/lib/types";
import * as LucideIcons from "lucide-react";

export interface ValueCardProps {
  value: Value;
  className?: string;
}

export function ValueCard({ value, className }: ValueCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-ocean-medium/40 hover:shadow-xl hover:shadow-ocean-medium/15 dark:shadow-black/20 dark:hover:shadow-ocean-medium/25",
        className,
      )}
    >
      {/* Decorative blob */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ocean-light/10 blur-2xl transition-all duration-500 group-hover:bg-ocean-medium/30" />
      
      {value.icon && (() => {
        const IconComponent = LucideIcons[value.icon as keyof typeof LucideIcons] as any;
        return IconComponent ? (
          <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl icon-gradient-bg text-white shadow-lg shadow-ocean-medium/30 transition-all group-hover:scale-110 group-hover:rotate-6 dark:text-slate-950">
            <IconComponent size={22} strokeWidth={1.75} />
          </div>
        ) : null;
      })()}
      <h3 className="relative z-10 text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-ocean-deep dark:group-hover:text-ocean-light">
        {value.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
        {value.description}
      </p>
    </article>
  );
}
