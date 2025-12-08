import HomeContent from "../components/HomeContent/HomeContent";
import pt from "../dictionaries/pt";

export const metadata = {
  title: "Gisele Sartini | Edição de Vídeo & Motion Design",
  description:
    "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",
  alternates: {
    canonical: "/pt",
  },
  openGraph: {
    title: "Gisele Sartini | Edição de Vídeo & Motion Design",
    description:
      "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",
    url: "/pt",
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

export default function Page() {
  return <HomeContent dictionary={pt} lang="pt" />;
}
