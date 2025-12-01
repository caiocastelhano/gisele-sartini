import styles from "./Contact.module.css";

export default function Contact({ dictionary }) {
  const { contact } = dictionary;

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      {/* TÍTULO */}
      <h2 id="contact-heading" className={styles.title}>
        {contact.title}
      </h2>

      {/* TEXTO */}
      <p className={styles.description}>
        {contact.description}
      </p>

      {/* BOTÕES */}
      <div className={styles.buttonsWrapper}>
        <a
          href={`mailto:${contact.links.email}`}
          className={styles.button}
          aria-label={contact.emailCta}
        >
          {contact.emailCta}
        </a>

        <a
          href={contact.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          aria-label={contact.linkedinCta}
        >
          {contact.linkedinCta}
        </a>

        <a
          href={contact.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          aria-label={contact.whatsappCta}
        >
          {contact.whatsappCta}
        </a>
      </div>
    </section>
  );
}
