import Link from "next/link";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar({ lang, dictionary }) {
  return (
    <nav className={styles.navbar}>
      
      <Link href="/" className={styles.name}>
        {dictionary.navbar.name}
      </Link>

      <div className={styles.rightMenu}>
        <div className={`${styles.linkWrapper} ${styles.red}`}>
          <a className={styles.link} href="#bio">
            {dictionary.navbar.bio}
          </a>
        </div>

        <div className={`${styles.linkWrapper} ${styles.blue}`}>
          <a className={styles.link} href="#tools">
            {dictionary.navbar.tools}
          </a>
        </div>

        <div className={`${styles.linkWrapper} ${styles.yellow}`}>
          <a className={styles.link} href="#projects">
            {dictionary.navbar.projects}
          </a>
        </div>

        <div className={`${styles.linkWrapper} ${styles.blue}`}>
          <a className={styles.link} href="#brands">
            {dictionary.navbar.brands}
          </a>
        </div>

        <div className={`${styles.linkWrapper} ${styles.red}`}>
          <a className={styles.link} href="#contact">
            {dictionary.navbar.contact}
          </a>
        </div>

        <div className={styles.languageWrapper}>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </nav>
  );
}
