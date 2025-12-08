import HomeContent from "../components/HomeContent/HomeContent";
import en from "../dictionaries/en";

export const metadata = {
  title: "Gisele Sartini | Video Editing & Motion Design",
  description:
    "Official portfolio of Gisele Sartini — video editing, motion design, reels, and audiovisual productions.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "Gisele Sartini | Video Editing & Motion Design",
    description:
      "Official portfolio of Gisele Sartini — video editing, motion design, reels, and audiovisual productions.",
    url: "/en",
    images: [
      {
        url: "/og/gisele-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional portrait of Gisele Sartini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gisele Sartini | Video Editing & Motion Design",
    description:
      "Official portfolio of Gisele Sartini — video editing, motion design, reels, and audiovisual productions.",
    images: ["/og/gisele-og-image.jpg"],
  },
};

export default function Page() {
  return <HomeContent dictionary={en} lang="en" />;
}
