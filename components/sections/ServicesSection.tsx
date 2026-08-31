import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import type { HomeContent, Service, SiteContent } from "@/lib/types";

export interface ServicesSectionProps {
  heading: HomeContent["servicesSection"];
  services: Service[];
  whatsapp?: SiteContent["whatsapp"];
}

export function ServicesSection({ heading, services, whatsapp }: ServicesSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-light/5 via-transparent to-ocean-medium/5" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ocean-deep/10 blur-3xl dark:bg-ocean-deep/15" />
      
      <SectionWrapper id="services" muted className="relative">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-medium/20 bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-deep dark:border-ocean-light/25 dark:text-ocean-light">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-medium" />
              {heading.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {heading.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {heading.subtitle}
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem 
              key={service.id}
              className={index === services.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <ServiceCard service={service} whatsapp={whatsapp} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>
    </div>
  );
}
