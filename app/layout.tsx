import { ReactNode } from "react";
import "./globals.css";
import { spaceGrotesk } from "./fonts";

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },

  manifest: "/site.webmanifest",
  themeColor: "#E55347"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" dir="ltr">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
