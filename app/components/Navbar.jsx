import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang, dictionary }) {
  return (
    <nav
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link href="/">{dictionary.navbar.name}</Link> •{" "}
        <a href="#bio">{dictionary.navbar.bio}</a> •{" "}
        <a href="#tools">{dictionary.navbar.tools}</a> •{" "}
        <a href="#projects">{dictionary.navbar.projects}</a> •{" "}
        <a href="#brands">{dictionary.navbar.brands}</a> •{" "}
        <a href="#contact">{dictionary.navbar.contact}</a>
      </div>

      <LanguageSwitcher currentLang={lang} />
    </nav>
  );
}
