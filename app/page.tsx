import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { getHomeContent, getServices } from "@/lib/content-service";

export default async function HomePage() {
  const [home, services] = await Promise.all([
    getHomeContent(),
    getServices(),
  ]);

  return (
    <>
      <HeroSection data={home.hero} />
      <ServicesSection
        heading={home.servicesSection}
        services={services}
      />
      <AboutPreviewSection data={home.aboutPreview} />
      {/* <GallerySection heading={home.gallery} images={home.gallery.images} /> */}
      <ContactCTASection data={home.contactCta} />
    </>
  );
}
