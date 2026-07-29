import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import type { AboutContent } from "@/lib/types";

export interface AboutContentSectionProps {
  data: AboutContent["content"];
}

export function AboutContentSection({ data }: AboutContentSectionProps) {
  return (
    <SectionWrapper spacing="md">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text Content */}
        <div>
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {data.title}
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4">
            {data.paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
        
        {/* Image Grid */}
        <FadeIn delay={0.2}>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src="https://image.elitema.com.tr/db_images/276/39/5/manta.jpg"
                alt="Manta Ray Diving"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src="https://image.elitema.com.tr/db_images/276/39/7/black,_white_and_orange_nudibranch.jpg"
                  alt="Macro Diving"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src="https://image.elitema.com.tr/db_images/276/39/6/stuart_cove(c)-(17).jpg"
                  alt="Diving Adventure"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
