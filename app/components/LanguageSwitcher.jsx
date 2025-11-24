"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLanguage } from "../actions/setLanguage";

export default function LanguageSwitcher({ currentLang }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleToggle = () => {
    const nextLang = currentLang === "pt" ? "en" : "pt";

    startTransition(async () => {
      await setLanguage(nextLang);
      router.refresh();
    });
  };

  return (
    <button onClick={handleToggle} disabled={isPending}>
      {currentLang === "pt" ? "EN" : "PT"}
    </button>
  );
}
