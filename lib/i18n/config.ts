/**
 * Supported locales for the site.
 *
 * Every routed page lives under `app/[lang]/...` and is prefixed with one
 * of these locale codes (e.g. `/en/about`, `/de/contact`).
 */
export const locales = ["en", "de", "ru", "tr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
  tr: "Türkçe",
};

export const localeToHtmlLang: Record<Locale, string> = {
  en: "en",
  de: "de",
  ru: "ru",
  tr: "tr",
};

export const localeToOgLocale: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  ru: "ru_RU",
  tr: "tr_TR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
