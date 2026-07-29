import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import {
  getServices,
  getServicesPageContent,
} from "@/lib/content-service";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Kızıldeniz liveaboard turları, Maldivler dalışları, PADI eğitim programları, batık dalışları ve özel dalış paketleri. Dünya çapında profesyonel dalış hizmetleri.",
  keywords: [
    "Kızıldeniz turları",
    "Maldivler dalış",
    "PADI eğitimi",
    "liveaboard",
    "batık dalışları",
    "Brothers Adaları",
    "Daedalus",
    "dalış paketleri",
  ],
  openGraph: {
    title: "Hizmetlerimiz · Anemon Turizm",
    description: "Dünya çapında profesyonel dalış turları ve PADI eğitim programları.",
  },
};

export default async function ServicesPage() {
  const [page, services] = await Promise.all([
    getServicesPageContent(),
    getServices(),
  ]);

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
      />
      <ServicesGrid services={services} />
    </>
  );
}
