import Link from "next/link";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar({ lang, dictionary }) {
  return (
    <nav className={styles.navbar} aria-label={dictionary.navbar.navLabel}>
      
      <Link
        href="/"
        className={styles.name}
        aria-label={dictionary.navbar.homeLabel}
      >
        {dictionary.navbar.name}
      </Link>

      <ul className={styles.rightMenu}>
        
        <li>
          <Link
            href="#bio"
            className={`${styles.linkWrapper} ${styles.red}`}
            aria-label={dictionary.navbar.bioLabel}
          >
            <span className={styles.link}>{dictionary.navbar.bio}</span>
          </Link>
        </li>

        <li>
          <Link
            href="#tools"
            className={`${styles.linkWrapper} ${styles.blue}`}
            aria-label={dictionary.navbar.toolsLabel}
          >
            <span className={styles.link}>{dictionary.navbar.tools}</span>
          </Link>
        </li>

        <li>
          <Link
            href="#projects"
            className={`${styles.linkWrapper} ${styles.yellow}`}
            aria-label={dictionary.navbar.projectsLabel}
          >
            <span className={styles.link}>{dictionary.navbar.projects}</span>
          </Link>
        </li>

        <li>
          <Link
            href="#brands"
            className={`${styles.linkWrapper} ${styles.blue}`}
            aria-label={dictionary.navbar.brandsLabel}
          >
            <span className={styles.link}>{dictionary.navbar.brands}</span>
          </Link>
        </li>

        <li>
          <Link
            href="#contact"
            className={`${styles.linkWrapper} ${styles.red}`}
            aria-label={dictionary.navbar.contactLabel}
          >
            <span className={styles.link}>{dictionary.navbar.contact}</span>
          </Link>
        </li>

        <li className={styles.languageWrapper}>
          <LanguageSwitcher currentLang={lang} />
        </li>
      </ul>
    </nav>
  );
}
