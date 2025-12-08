export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";
import HomeContent from "./components/HomeContent/HomeContent";

export const metadata = {
  title: "Gisele Sartini | Edição de Vídeo & Motion Design",

  description:
    "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Gisele Sartini | Edição de Vídeo & Motion Design",
    description:
      "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",
    url: "/",
    images: [
      {
        url: "/og/gisele-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Retrato profissional de Gisele Sartini",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gisele Sartini | Edição de Vídeo & Motion Design",
    description:
      "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",
    images: ["/og/gisele-og-image.jpg"],
  },
};

export default async function Page() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "pt";

  const dictionary = lang === "en" ? en : pt;

  return <HomeContent dictionary={dictionary} lang={lang} />;
}
