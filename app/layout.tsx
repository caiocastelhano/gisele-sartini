import { ReactNode } from "react";
import "./globals.css";
import { spaceGrotesk } from "./fonts"; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
