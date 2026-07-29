/**
 * Content service — the single source of truth for page content.
 *
 * Today: reads typed JSON files from `/data`.
 * Tomorrow: swap each function body for a `fetch(...)` to your CMS/API.
 * UI components never import JSON directly, so the migration is transparent.
 */

import type {
  AboutContent,
  ContactContent,
  HomeContent,
  Service,
  ServicesPageContent,
  SiteContent,
} from "@/lib/types";

import aboutData from "@/data/about.json";
import contactData from "@/data/contact.json";
import homeData from "@/data/home.json";
import servicesData from "@/data/services.json";
import servicesPageData from "@/data/services-page.json";
import siteData from "@/data/site.json";

export async function getSiteContent(): Promise<SiteContent> {
  return siteData as SiteContent;
}

export async function getHomeContent(): Promise<HomeContent> {
  return homeData as HomeContent;
}

export async function getAboutContent(): Promise<AboutContent> {
  return aboutData as AboutContent;
}

export async function getServicesPageContent(): Promise<ServicesPageContent> {
  return servicesPageData as ServicesPageContent;
}

export async function getServices(): Promise<Service[]> {
  return servicesData as Service[];
}

export async function getContactContent(): Promise<ContactContent> {
  return contactData as ContactContent;
}
