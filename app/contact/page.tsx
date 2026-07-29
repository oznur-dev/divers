import type { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";
import { PageHero } from "@/components/sections/PageHero";
import { getContactContent } from "@/lib/content-service";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Hayalinizdeki dalış turunu planlamak için bizimle iletişime geçin. Antalya ofisimizden bize ulaşabilir, WhatsApp, telefon veya e-posta ile bilgi alabilirsiniz.",
  keywords: ["dalış rezervasyonu", "tur bilgi", "Antalya", "iletişim", "WhatsApp"],
  openGraph: {
    title: "İletişim · Anemon Turizm",
    description: "Dalış turlarınız için bizimle iletişime geçin. Genellikle bir iş günü içinde yanıt veriyoruz.",
  },
};

export default async function ContactPage() {
  const contact = await getContactContent();

  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />
      <ContactFormSection data={contact.form} />
      <ContactInfoSection data={contact.info} />
    </>
  );
}
