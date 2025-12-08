import styles from "./FloatingContactMenu.module.css";

export default function FloatingContactMenu({ dictionary }) {
  const { contact } = dictionary;

  return (
    <nav
      className={styles.menu}
      aria-label="Floating contact menu"
      role="navigation"
      aria-orientation="vertical"
    >
      <a
        href={contact.links.email}
        className={styles.button}
        aria-label={contact.ariaLabels.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/email.svg" alt={contact.iconAlt.email} aria-hidden="true" />
      </a>

      <a
        href={contact.links.linkedin}
        className={styles.button}
        aria-label={contact.ariaLabels.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/linkedin.svg" alt={contact.iconAlt.linkedin} aria-hidden="true" />
      </a>

      <a
        href={contact.links.whatsapp}
        className={styles.button}
        aria-label={contact.ariaLabels.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/whatsapp.svg" alt={contact.iconAlt.whatsapp} aria-hidden="true" />
      </a>
    </nav>
  );
}
