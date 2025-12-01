import styles from "./Tools.module.css";

export default function Tools({ dictionary }) {
  const { tools } = dictionary;

  return (
    <section
      id="tools"
      className={styles.toolsSection}
      role="region"
      aria-labelledby="tools-heading"
    >
      <h2 id="tools-heading" className={styles.visuallyHidden}>
        {tools.title}
      </h2>

      <p className={styles.description}>{tools.text}</p>

      <div className={styles.toolsRow}>
        {tools.list.map((tool, index) => (
          <img
            key={index}
            src={tool.src}
            alt={tool.alt}
            className={styles.toolIcon}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
