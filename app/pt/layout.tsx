import "../globals.css";
import { ReactNode } from "react";
import { spaceGrotesk } from "../fonts";

export default function PTLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
