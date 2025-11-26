import styles from "./Footer.module.css";

export default function Footer({ dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {year} Gisele Sartini — {dictionary.footer.rights}{" "}
        {dictionary.footer.developed}{" "}
        <a
          href="https://caiocastelhano.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label={dictionary.footer.ariaDevLabel}
        >
          Caio Castelhano
        </a>
      </p>
    </footer>
  );
}

