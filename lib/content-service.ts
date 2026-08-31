/**
 * Content service — the single source of truth for page content.
 *
 * Today: reads typed JSON files from `/data/<locale>`.
 * Tomorrow: swap each function body for a `fetch(...)` to your CMS/API.
 * UI components never import JSON directly, so the migration is transparent.
 */

import type { Locale } from "@/lib/i18n/config";
import type {
  AboutContent,
  ContactContent,
  HomeContent,
  Service,
  ServicesPageContent,
  SiteContent,
} from "@/lib/types";

import aboutDe from "@/data/de/about.json";
import contactDe from "@/data/de/contact.json";
import homeDe from "@/data/de/home.json";
import servicesDe from "@/data/de/services.json";
import servicesPageDe from "@/data/de/services-page.json";
import siteDe from "@/data/de/site.json";

import aboutEn from "@/data/en/about.json";
import contactEn from "@/data/en/contact.json";
import homeEn from "@/data/en/home.json";
import servicesEn from "@/data/en/services.json";
import servicesPageEn from "@/data/en/services-page.json";
import siteEn from "@/data/en/site.json";

import aboutRu from "@/data/ru/about.json";
import contactRu from "@/data/ru/contact.json";
import homeRu from "@/data/ru/home.json";
import servicesRu from "@/data/ru/services.json";
import servicesPageRu from "@/data/ru/services-page.json";
import siteRu from "@/data/ru/site.json";

import aboutTr from "@/data/tr/about.json";
import contactTr from "@/data/tr/contact.json";
import homeTr from "@/data/tr/home.json";
import servicesTr from "@/data/tr/services.json";
import servicesPageTr from "@/data/tr/services-page.json";
import siteTr from "@/data/tr/site.json";

const siteByLocale: Record<Locale, SiteContent> = {
  de: siteDe as SiteContent,
  en: siteEn as SiteContent,
  ru: siteRu as SiteContent,
  tr: siteTr as SiteContent,
};

const homeByLocale: Record<Locale, HomeContent> = {
  de: homeDe as HomeContent,
  en: homeEn as HomeContent,
  ru: homeRu as HomeContent,
  tr: homeTr as HomeContent,
};

const aboutByLocale: Record<Locale, AboutContent> = {
  de: aboutDe as AboutContent,
  en: aboutEn as AboutContent,
  ru: aboutRu as AboutContent,
  tr: aboutTr as AboutContent,
};

const servicesPageByLocale: Record<Locale, ServicesPageContent> = {
  de: servicesPageDe as ServicesPageContent,
  en: servicesPageEn as ServicesPageContent,
  ru: servicesPageRu as ServicesPageContent,
  tr: servicesPageTr as ServicesPageContent,
};

const servicesByLocale: Record<Locale, Service[]> = {
  de: servicesDe as Service[],
  en: servicesEn as Service[],
  ru: servicesRu as Service[],
  tr: servicesTr as Service[],
};

const contactByLocale: Record<Locale, ContactContent> = {
  de: contactDe as ContactContent,
  en: contactEn as ContactContent,
  ru: contactRu as ContactContent,
  tr: contactTr as ContactContent,
};

export async function getSiteContent(locale: Locale): Promise<SiteContent> {
  return siteByLocale[locale];
}

export async function getHomeContent(locale: Locale): Promise<HomeContent> {
  return homeByLocale[locale];
}

export async function getAboutContent(locale: Locale): Promise<AboutContent> {
  return aboutByLocale[locale];
}

export async function getServicesPageContent(
  locale: Locale,
): Promise<ServicesPageContent> {
  return servicesPageByLocale[locale];
}

export async function getServices(locale: Locale): Promise<Service[]> {
  return servicesByLocale[locale];
}

export async function getContactContent(
  locale: Locale,
): Promise<ContactContent> {
  return contactByLocale[locale];
}
