import styles from "./Clients.module.css";

export default function Clients({ dictionary }) {
  const { clients } = dictionary;

  return (
    <section
      id="clients"
      className={styles.clientsSection}
      aria-labelledby="clients-heading"
      role="region"
      aria-label={clients.ariaLabels.sectionLabel}
    >
      <h2 id="clients-heading" className={styles.title}>
        {clients.title}
      </h2>

      <div className={styles.grid}>
        {clients.items.map((client, idx) => (
          <div key={idx} className={styles.clientCard}>
            <img
              src={client.image}
              alt={client.alt}
              className={styles.logo}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
