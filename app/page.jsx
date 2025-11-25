export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";
import HomeContent from "./components/HomeContent/HomeContent";

export default async function Page() {
  const cookieStore = await cookies(); // 👈 AQUI ESTÁ O PULO DO GATO
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "pt";

  const dictionary = lang === "en" ? en : pt;

  return <HomeContent dictionary={dictionary} lang={lang} />;
}
