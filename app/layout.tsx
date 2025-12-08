export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Outfit, Josefin_Sans, Space_Grotesk } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const josefin = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌐 GLOBAL METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://gisele-sartini.vercel.app"),

  title: {
    default: "Gisele Sartini | Edição de Vídeo & Motion Design",
    template: "%s | Gisele Sartini",
  },

  description:
    "Portfólio oficial de Gisele Sartini — editora de vídeo, motion designer e criadora de conteúdo audiovisual.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Gisele Sartini | Edição de Vídeo & Motion Design",
    description:
      "Portfólio oficial de Gisele Sartini — editora de vídeo, motion designer e criadora de conteúdo audiovisual.",
    siteName: "Gisele Sartini",
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
      "Portfólio oficial de Gisele Sartini — editora de vídeo, motion designer e criadora de conteúdo audiovisual.",
    images: ["/og/gisele-og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  themeColor: "#FAFAF6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
    </html>
  );
}
