"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({ currentLang, dictionary }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = (newLang) => {
    if (newLang === currentLang) return;

    const cleanPath = pathname.replace(/^\/(pt|en)/, "");

    const newPath = `/${newLang}${cleanPath}`;

    router.push(newPath);
  };

  return (
    <div
      className={styles.wrapper}
      role="group"
      aria-label={dictionary.lang.languageSelectorLabel}
    >
      <button
        className={`${styles.flag} ${
          currentLang === "pt" ? styles.active : ""
        }`}
        onClick={() => switchLang("pt")}
        aria-label={dictionary.lang.switchToPT}
        aria-pressed={currentLang === "pt"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
          <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#459a45"></rect>
          <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
          <path d="M3.472,16l12.528,8,12.528-8-12.528-8L3.472,16Z" fill="#fedf00"></path>
          <circle cx="16" cy="16" r="5" fill="#0a2172"></circle>
          <path d="M14,14.5c-.997,0-1.958,.149-2.873,.409-.078,.35-.126,.71-.127,1.083,.944-.315,1.951-.493,2.999-.493,2.524,0,4.816,.996,6.519,2.608,.152-.326,.276-.666,.356-1.026-1.844-1.604-4.245-2.583-6.875-2.583Z" fill="#fff"></path>
        </svg>
      </button>

      <button
        className={`${styles.flag} ${
          currentLang === "en" ? styles.active : ""
        }`}
        onClick={() => switchLang("en")}
        aria-label={dictionary.lang.switchToEN}
        aria-pressed={currentLang === "en"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
          <rect x="1" y="4" width="30" height="24" fill="#fff"></rect>
          <path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path>
          <path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path>
          <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
          <path fill="#a62842" d="M2 15.077H31V16.923H2z"></path>
          <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
          <path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path>
          <path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path>
          <path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path>
        </svg>
      </button>
    </div>
  );
}
