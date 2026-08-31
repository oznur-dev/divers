import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";
import { PageHero } from "@/components/sections/PageHero";
import { getContactContent } from "@/lib/content-service";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const contact = await getContactContent(lang);

  return {
    title: contact.seo.title,
    description: contact.seo.description,
    keywords: contact.seo.keywords,
    openGraph: {
      title: contact.seo.ogTitle,
      description: contact.seo.ogDescription,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const contact = await getContactContent(locale);

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
