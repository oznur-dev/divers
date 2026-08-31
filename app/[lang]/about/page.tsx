import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutContentSection } from "@/components/sections/AboutContentSection";
import { PageHero } from "@/components/sections/PageHero";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { getAboutContent } from "@/lib/content-service";
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
  const about = await getAboutContent(lang);

  return {
    title: about.seo.title,
    description: about.seo.description,
    keywords: about.seo.keywords,
    openGraph: {
      title: about.seo.ogTitle,
      description: about.seo.ogDescription,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const about = await getAboutContent(locale);

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
