import { ValueCard } from "@/components/cards/ValueCard";
import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import type { AboutContent } from "@/lib/types";

export interface ValuesSectionProps {
  data: AboutContent["values"];
}

export function ValuesSection({ data }: ValuesSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-ocean-light/15 blur-3xl dark:bg-ocean-medium/10" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-ocean-deep/10 blur-3xl dark:bg-ocean-deep/15" />
      
      <SectionWrapper muted className="relative">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-medium/20 bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-deep dark:border-ocean-light/25 dark:text-ocean-light">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-medium" />
              {data.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {data.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {data.subtitle}
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((value) => (
            <StaggerItem key={value.id}>
              <ValueCard value={value} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>
    </div>
  );
}
