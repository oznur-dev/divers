import { FeatureCard } from "@/components/cards/FeatureCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import type { HomeContent } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/utils";

export interface AboutPreviewSectionProps {
  data: HomeContent["aboutPreview"];
  locale: Locale;
}

export function AboutPreviewSection({ data, locale }: AboutPreviewSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-ocean-light/15 blur-3xl dark:bg-ocean-medium/10" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-ocean-deep/10 blur-3xl dark:bg-ocean-deep/15" />
      
      <SectionWrapper className="relative">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ocean-medium/20 bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-deep dark:border-ocean-light/25 dark:text-ocean-light">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-medium" />
                {data.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {data.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {data.body}
              </p>
              <div className="mt-7">
                <ButtonLink href={localizeHref(locale, data.cta.href)} variant="primary" size="md">
                  {data.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          <Stagger className="grid gap-4">
            {data.features.map((feature) => (
              <StaggerItem key={feature.id}>
                <FeatureCard feature={feature} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </SectionWrapper>
    </div>
  );
}
