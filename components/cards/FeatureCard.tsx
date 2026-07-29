import { cn } from "@/lib/utils";
import type { Feature } from "@/lib/types";
import * as LucideIcons from "lucide-react";

export interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div className={cn("group relative flex gap-4 overflow-hidden rounded-xl border border-border/60 bg-surface p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-ocean-medium/40 hover:shadow-lg hover:shadow-ocean-medium/15 dark:shadow-black/20 dark:hover:shadow-ocean-medium/20", className)}>
      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ocean-light/0 via-transparent to-ocean-medium/0 opacity-0 transition-opacity group-hover:from-ocean-light/5 group-hover:to-ocean-medium/5 group-hover:opacity-100" />
      
      {feature.icon && (() => {
        const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as any;
        return IconComponent ? (
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-gradient-bg text-white shadow-md shadow-ocean-medium/30 transition-transform group-hover:scale-110 group-hover:rotate-6 dark:text-slate-950">
            <IconComponent size={20} strokeWidth={1.75} />
          </div>
        ) : null;
      })()}
      <div className="relative">
        <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-ocean-deep dark:group-hover:text-ocean-light">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
