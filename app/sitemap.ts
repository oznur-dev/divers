import { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n/config";

const baseUrl = "https://anemonturizm.com";

const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: locale === defaultLocale ? page.priority : page.priority * 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [
            altLocale,
            `${baseUrl}/${altLocale}${page.path}`,
          ]),
        ),
      },
    })),
  );
}
