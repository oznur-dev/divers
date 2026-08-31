import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

export interface GallerySectionProps {
  heading: {
    eyebrow: string;
    title: string;
    subtitle: string;
    photoCaption: string;
  };
  images: GalleryImage[];
}

export function GallerySection({ heading, images }: GallerySectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-light/5 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ocean-light/15 blur-3xl dark:bg-ocean-medium/10" />
      
      <SectionWrapper className="relative">
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

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <StaggerItem key={image.id}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-sm shadow-slate-900/[0.04] transition-all duration-500 hover:scale-[1.02] hover:border-ocean-medium/40 hover:shadow-2xl hover:shadow-ocean-medium/20 dark:shadow-black/20 dark:hover:shadow-ocean-medium/30">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-base font-bold drop-shadow-lg">{image.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs opacity-0 transition-all group-hover:opacity-100">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    {heading.photoCaption}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>
    </div>
  );
}
