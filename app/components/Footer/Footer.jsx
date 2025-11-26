import styles from "./Footer.module.css";

export default function Footer({ dictionary }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Gisele Sartini —{" "}
        {dictionary.footer.rights} {dictionary.footer.developed}{" "}
        <a
          href="https://caiocastelhano.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Caio Castelhano
        </a>
      </p>
    </footer>
  );
}
