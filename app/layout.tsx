import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/layout/ThemeProvider";
import { getSiteContent } from "@/lib/content-service";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://anemonturizm.com"),
  title: {
    default: "Anemon Divers — Profesyonel Dalış Turları & PADI Eğitimleri",
    template: "%s · Anemon Divers",
  },
  description:
    "Anemon Turizm, TURSAB belgeli dalış operatörüdür. Kızıldeniz, Maldivler ve dünyanın en iyi dalış noktalarında profesyonel rehberlik, güvenli dalış deneyimleri ve PADI sertifikasyon programları.",
  keywords: [
    "dalış turları",
    "PADI eğitimi",
    "Kızıldeniz dalış",
    "Maldivler dalış",
    "liveaboard",
    "TURSAB",
    "dalış operatörü",
    "scuba diving",
    "batık dalışları",
    "su altı fotoğrafçılığı",
    "dalış sertifikası",
    "DAN sigorta",
  ],
  applicationName: "Anemon Turizm",
  authors: [{ name: "Anemon Turizm" }],
  creator: "Anemon Turizm",
  publisher: "Anemon Turizm",
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
  openGraph: {
    title: "Anemon Turizm — Profesyonel Dalış Turları",
    description:
      "TURSAB belgeli dalış operatörü — Kızıldeniz, Maldivler ve daha fazlası.",
    url: "https://anemonturizm.com",
    siteName: "Anemon Turizm",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Anemon Turizm Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anemon Turizm — Profesyonel Dalış Turları",
    description:
      "TURSAB belgeli dalış operatörü — Kızıldeniz, Maldivler ve daha fazlası.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = await getSiteContent();

  return (
    <html
      lang="tr"
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
            <Navbar brandName={site.name} links={site.nav} />
            <main className="flex-1">{children}</main>
            <Footer site={site} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
