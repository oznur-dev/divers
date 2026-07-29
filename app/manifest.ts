import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anemon Turizm — Profesyonel Dalış Turları",
    short_name: "Anemon Turizm",
    description:
      "TURSAB belgeli dalış operatörü. Kızıldeniz, Maldivler ve dünya çapında profesyonel dalış turları ve PADI eğitimleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0099cc",
    orientation: "portrait-primary",
    categories: ["travel", "sports", "lifestyle"],
    lang: "tr",
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
