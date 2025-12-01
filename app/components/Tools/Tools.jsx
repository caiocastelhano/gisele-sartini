import styles from "./Tools.module.css";

export default function Tools({ dictionary }) {
  const { tools } = dictionary;

  const firstRow = tools.list.slice(0, 6);
  const secondRow = tools.list.slice(6);

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

      <div className={styles.grid}>
        <div className={styles.toolCardText}>
          <span className={styles.toolCardTextLabel}>
            {tools.helperText}
          </span>
        </div>

        {secondRow.map((tool) => (
          <div key={tool.label} className={styles.toolCard}>
            <img src={tool.src} alt={tool.alt} className={styles.logo} />
            <span className={styles.label}>{tool.label}</span>
          </div>
        ))}
        
        {firstRow.map((tool) => (
          <div key={tool.label} className={styles.toolCard}>
            <img src={tool.src} alt={tool.alt} className={styles.logo} />
            <span className={styles.label}>{tool.label}</span>
          </div>
        ))}        
      </div>
    </section>
  );
}
