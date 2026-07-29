import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionWrapper } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import type { Service } from "@/lib/types";

export interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <SectionWrapper spacing="md">
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <StaggerItem 
            key={service.id}
            className={index === services.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}
          >
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
