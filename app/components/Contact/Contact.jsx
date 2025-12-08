import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact({ dictionary }) {
  const { contact } = dictionary;

  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    function getUniversalEmailLink(email, subject) {
      const userAgent = navigator.userAgent.toLowerCase();

      if (userAgent.includes("outlook") || userAgent.includes("windows nt")) {
        return `https://outlook.office.com/mail/deeplink/compose?to=${email}&subject=${subject}`;
      }

      if (/iphone|ipad|ipod/.test(userAgent)) {
        return `mailto:${email}?subject=${subject}`;
      }

      if (userAgent.includes("android")) {
        return `mailto:${email}?subject=${subject}`;
      }

      return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    }

    setEmailLink(getUniversalEmailLink(contact.links.email, contact.links.emailSubject));
  }, [contact.links.email, contact.links.emailSubject]);

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
            href={emailLink}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.ariaLabels.email}
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
