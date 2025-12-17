import { ReactNode } from "react";
import { josefin } from "../fonts";

export default function ENLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${josefin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
