import styles from "./Contact.module.css";

export default function Contact({ dictionary }) {
  const { contact } = dictionary;

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
      role="region"
      aria-label={contact.ariaLabels.sectionLabel}
    >

      <div className={styles.q1}>
        <h2 id="contact-heading" className={styles.title}>
          {contact.title}
        </h2>
      </div>

      <div className={styles.q2}>
        <div className={styles.text}>
          {contact.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      <div className={styles.q3}></div>

      <div className={styles.q4}>
        <div className={styles.buttonsWrapper}>

          <a
            href={`mailto:${contact.links.email}`}
            className={styles.button}
            aria-label={contact.ariaLabels.email}
            rel="noopener"
          >
            {contact.emailCta}
          </a>

          <a
            href={contact.links.linkedin}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.ariaLabels.linkedin}
          >
            {contact.linkedinCta}
          </a>

          <a
            href={contact.links.whatsapp}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.ariaLabels.whatsapp}
          >
            {contact.whatsappCta}
          </a>
        </div>

      </div>

      <div className={styles.verticalLine} aria-hidden="true"></div>
      <div className={styles.horizontalLine} aria-hidden="true"></div>

    </section>
  );
}
