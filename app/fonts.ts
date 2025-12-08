import { Poppins, Outfit, Josefin_Sans, Space_Grotesk } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const josefin = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
