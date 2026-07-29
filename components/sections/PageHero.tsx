import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

/**
 * Shared page-header used by inner pages (About, Services, Contact).
 */
export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-ocean-light/20 blur-3xl dark:bg-ocean-medium/15" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-ocean-deep/15 blur-3xl dark:bg-ocean-deep/20" />

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 right-0 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,32 C240,64 480,8 720,32 C960,56 1200,16 1440,40 L1440,80 L0,80 Z" />
      </svg>
      
      <SectionWrapper spacing="lg" className="relative pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-medium/20 bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep backdrop-blur-sm dark:border-ocean-light/25 dark:text-ocean-light">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ocean-medium" />
              {eyebrow}
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">{title}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
}
