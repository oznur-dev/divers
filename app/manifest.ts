import { MetadataRoute } from "next";
import { defaultLocale, localeToHtmlLang } from "@/lib/i18n/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anemon Turizm — Professional Dive Tours",
    short_name: "Anemon Turizm",
    description:
      "TURSAB-licensed dive operator. Professional dive tours and PADI courses at the Red Sea, the Maldives, and worldwide.",
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0099cc",
    orientation: "portrait-primary",
    categories: ["travel", "sports", "lifestyle"],
    lang: localeToHtmlLang[defaultLocale],
    dir: "ltr",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
