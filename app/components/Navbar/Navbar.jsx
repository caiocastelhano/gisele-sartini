"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ dictionary }) {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLang = segments[1] === "en" ? "en" : "pt";

  const isHome = pathname === `/${currentLang}`;

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => prev + 0 === 1 ? false : true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAnchorClick = (event, targetId) => {
    if (!isHome) return;

    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const navHeight = navRef.current ? navRef.current.offsetHeight : 0;

    const elementTop =
      targetElement.getBoundingClientRect().top + window.scrollY;

    const offsetPosition = elementTop - navHeight - 8;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={styles.navbar}
      aria-label={dictionary.navbar.navLabel}
    >
      <Link
        href={`/${currentLang}`}
        className={styles.name}
        aria-label={dictionary.navbar.homeLabel}
      >
        {dictionary.navbar.name}
      </Link>

      <ul
        ref={menuRef}
        className={`${styles.rightMenu} ${isOpen ? styles.menuOpen : ""}`}
      >
        {isHome && (
          <>
            <li>
              <Link
                href={`/${currentLang}#about`}
                onClick={(e) => handleAnchorClick(e, "#about")}
                className={`${styles.linkWrapper} ${styles.red}`}
                aria-label={dictionary.navbar.bioLabel}
              >
                <span className={styles.link}>{dictionary.navbar.bio}</span>
              </Link>
            </li>

            <li>
              <Link
                href={`/${currentLang}#tools`}
                onClick={(e) => handleAnchorClick(e, "#tools")}
                className={`${styles.linkWrapper} ${styles.blue}`}
                aria-label={dictionary.navbar.toolsLabel}
              >
                <span className={styles.link}>{dictionary.navbar.tools}</span>
              </Link>
            </li>

            <li>
              <Link
                href={`/${currentLang}#projects`}
                onClick={(e) => handleAnchorClick(e, "#projects")}
                className={`${styles.linkWrapper} ${styles.red}`}
                aria-label={dictionary.navbar.projectsLabel}
              >
                <span className={styles.link}>{dictionary.navbar.projects}</span>
              </Link>
            </li>

            <li>
              <Link
                href={`/${currentLang}#clients`}
                onClick={(e) => handleAnchorClick(e, "#clients")}
                className={`${styles.linkWrapper} ${styles.blue}`}
                aria-label={dictionary.navbar.brandsLabel}
              >
                <span className={styles.link}>{dictionary.navbar.brands}</span>
              </Link>
            </li>

            <li>
              <Link
                href={`/${currentLang}#contact`}
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className={`${styles.linkWrapper} ${styles.red}`}
                aria-label={dictionary.navbar.contactLabel}
              >
                <span className={styles.link}>{dictionary.navbar.contact}</span>
              </Link>
            </li>
          </>
        )}

        <li className={styles.languageWrapper}>
          <LanguageSwitcher currentLang={currentLang} dictionary={dictionary} />
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
