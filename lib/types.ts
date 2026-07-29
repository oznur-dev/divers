/**
 * Shared content types.
 *
 * These types describe the shape of the JSON content files in `/data`.
 * They are designed to map 1:1 to a future CMS / API response so the
 * `content-service` layer can be swapped from JSON to `fetch()` without
 * touching the UI.
 */

export type IconName =
  | "Compass"
  | "Droplets"
  | "Anchor"
  | "Mountain"
  | "Fish"
  | "GraduationCap"
  | "Award"
  | "Sparkles"
  | "Globe"
  | "Shield"
  | "TrendingUp";

/* ---------- Shared building blocks ---------- */

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: IconName;
  image?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: IconName;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon?: IconName;
}

export interface CTA {
  label: string;
  href: string;
}

/* ---------- Page-level content ---------- */

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  aboutPreview: {
    eyebrow: string;
    title: string;
    body: string;
    cta: CTA;
    features: Feature[];
  };
  contactCta: {
    title: string;
    subtitle: string;
    cta: CTA;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    images: {
      id: number;
      url: string;
      alt: string;
      title: string;
    }[];
  };
}

export interface AboutContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  content: {
    title: string;
    paragraphs: string[];
  };
  values: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Value[];
  };
}

export interface ServicesPageContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
}

export interface ContactInfoItem {
  id: number;
  label: string;
  value: string;
  href?: string;
}

export interface ContactContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  form: {
    title: string;
    subtitle: string;
    submitLabel: string;
    successMessage: string;
  };
  info: {
    title: string;
    items: ContactInfoItem[];
  };
}

/* ---------- Site-wide ---------- */

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  nav: NavLink[];
  footer: {
    description: string;
    columns: {
      title: string;
      links: NavLink[];
    }[];
    copyright: string;
  };
}
