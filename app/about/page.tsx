import type { Metadata } from "next";
import { AboutContentSection } from "@/components/sections/AboutContentSection";
import { PageHero } from "@/components/sections/PageHero";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { getAboutContent } from "@/lib/content-service";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Anemon Turizm, yıllardır dalış tutkunu gezginlere profesyonel rehberlik ve en kaliteli hizmeti sunarak, su altı dünyasının büyüsünü keşfetmenizi sağlıyor. TURSAB belgeli, PADI sertifikalı dalış operatörü.",
  keywords: ["dalış operatörü", "TURSAB belgeli", "PADI eğitmen", "profesyonel dalış"],
  openGraph: {
    title: "Hakkımızda · Anemon Turizm",
    description: "TURSAB belgeli, PADI sertifikalı profesyonel dalış operatörü. Güvenli ve unutulmaz dalış maceraları.",
  },
};

export default async function AboutPage() {
  const about = await getAboutContent();

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />
      <AboutContentSection data={about.content} />
      <ValuesSection data={about.values} />
    </>
  );
}
