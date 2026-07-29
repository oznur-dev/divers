import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import type { HomeContent } from "@/lib/types";

export interface HeroSectionProps {
  data: HomeContent["hero"];
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://image.elitema.com.tr/db_images/276/21/10/whale-shark-maldives.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-background dark:hidden" />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-background dark:block" />
      </div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-ocean-light/30 blur-3xl dark:bg-ocean-medium/20" />
      <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-ocean-deep/20 blur-3xl dark:bg-ocean-deep/25" />
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <svg className="absolute bottom-0 w-full text-ocean-medium" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <SectionWrapper spacing="lg" className="relative pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-ocean-medium/20 bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep backdrop-blur-md dark:border-ocean-light/25 dark:text-ocean-light">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ocean-medium" />
            {data.eyebrow}
          </span>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">{data.title}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {data.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={data.primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto">
              {data.primaryCta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </ButtonLink>
            <ButtonLink
              href={data.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {data.secondaryCta.label}
            </ButtonLink>
          </div>
        </FadeIn>

        {/* Trust badges */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-light/20 text-ocean-deep dark:text-ocean-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
              </span>
              <span className="font-medium">TURSAB Belgeli</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-light/20 text-ocean-deep dark:text-ocean-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </span>
              <span className="font-medium">PADI Sertifikalı</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-light/20 text-ocean-deep dark:text-ocean-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <span className="font-medium">DAN Europe Sigortalı</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-light/20 text-ocean-deep dark:text-ocean-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </span>
              <span className="font-medium">Dünya Çapında Hizmet</span>
            </div>
          </div>
        </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
}
