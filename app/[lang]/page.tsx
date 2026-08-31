import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { getHomeContent, getServices, getSiteContent } from "@/lib/content-service";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const [home, services, site] = await Promise.all([
    getHomeContent(locale),
    getServices(locale),
    getSiteContent(locale),
  ]);

  return (
    <>
      <HeroSection data={home.hero} locale={locale} />
      <ServicesSection
        heading={home.servicesSection}
        services={services}
        whatsapp={site.whatsapp}
      />
      <AboutPreviewSection data={home.aboutPreview} locale={locale} />
      {/* <GallerySection heading={home.gallery} images={home.gallery.images} /> */}
      <ContactCTASection data={home.contactCta} locale={locale} />
    </>
  );
}
