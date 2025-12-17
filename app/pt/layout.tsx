import { ReactNode } from "react";
import { josefin } from "../fonts";

export default function PTLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" dir="ltr">
      <body className={`${josefin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
