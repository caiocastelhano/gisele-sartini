import "../globals.css";
import { ReactNode } from "react";
import { spaceGrotesk } from "../fonts";

export default function ENLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
