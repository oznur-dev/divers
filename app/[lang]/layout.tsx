import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/layout/ThemeProvider";
import { getSiteContent } from "@/lib/content-service";
import {
  isLocale,
  locales,
  localeToHtmlLang,
  localeToOgLocale,
  type Locale,
} from "@/lib/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const site = await getSiteContent(lang);

  return {
    metadataBase: new URL("https://anemonturizm.com"),
    title: {
      default: site.seo.title,
      template: `%s · ${site.name}`,
    },
    description: site.seo.description,
    keywords: site.seo.keywords,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [
          localeToHtmlLang[locale],
          `https://anemonturizm.com/${locale}`,
        ]),
      ),
    },
    openGraph: {
      title: site.seo.ogTitle ?? site.seo.title,
      description: site.seo.ogDescription ?? site.seo.description,
      url: `https://anemonturizm.com/${lang}`,
      siteName: site.name,
      type: "website",
      locale: localeToOgLocale[lang],
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${site.name} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.ogTitle ?? site.seo.title,
      description: site.seo.ogDescription ?? site.seo.description,
      images: ["/twitter-image.png"],
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const site = await getSiteContent(locale);

  return (
    <html
      lang={localeToHtmlLang[locale]}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Prevent theme flash before hydration. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar locale={locale} brandName={site.name} links={site.nav} ui={site.ui} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} site={site} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
