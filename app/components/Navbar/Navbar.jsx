"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useState, useRef, useEffect } from "react";

export default function Navbar({ lang, dictionary }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar} aria-label={dictionary.navbar.navLabel}>

      <Link
        href="/"
        className={styles.name}
        aria-label={dictionary.navbar.homeLabel}
      >
        {dictionary.navbar.name}
      </Link>

      <ul ref={menuRef} className={`${styles.rightMenu} ${isOpen ? styles.menuOpen : ""}`}>
        
        <li>
          <Link
            href="#about"
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
            href="#clients"
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
          <LanguageSwitcher currentLang={lang} dictionary={dictionary} />
        </li>
      </ul>

      <button
        ref={buttonRef}
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        ☰
      </button>
    </nav>
  );
}
