import styles from "./Clients.module.css";

export default function Clients({ dictionary }) {
  const { clients } = dictionary;

  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className={styles.clientsSection}
      role="region"
      aria-label={clients.ariaLabels.sectionLabel}
    >
      <h2 id="clients-heading" className={styles.visuallyHidden}>
        {clients.title}
      </h2>

      <div className={styles.grid}>

        <div className={`${styles.clientCard} ${styles.textCard}`}>
          <p className={styles.text}>{clients.description}</p>
        </div>

        {clients.items.map((client, idx) => (
          <div key={idx} className={styles.clientCard}>
            <div className={styles.logoWrapper}>
              <img
                src={client.image}
                alt={client.alt}
                className={styles.logo}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
