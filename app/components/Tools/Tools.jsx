import Image from "next/image";
import styles from "./Tools.module.css";

export default function Tools({ dictionary }) {
  const { tools } = dictionary;

  const list = tools?.list ?? [];
  const firstRow = list.slice(0, 6);
  const secondRow = list.slice(6);

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

      <p id="tools-helper" className={styles.visuallyHidden}>
        {tools.helperText}
      </p>

      <div className={styles.grid} role="list" aria-describedby="tools-helper">

        <div
          className={styles.toolCardText}
          aria-hidden="true"
        >
          <span className={styles.toolCardTextLabel}>
            {tools.helperText}
          </span>
        </div>

        {secondRow.map((tool) => (
          <div key={tool.label} role="listitem" className={styles.toolCard}>
            
            <div className={styles.logoWrapper}>
              <Image
                src={tool.src}
                alt={tool.alt}
                width={80}
                height={80}
                className={styles.logo}
              />
            </div>

            <span className={styles.label}>{tool.label}</span>
          </div>
        ))}

        {firstRow.map((tool) => (
          <div key={tool.label} role="listitem" className={styles.toolCard}>
            
            <div className={styles.logoWrapper}>
              <Image
                src={tool.src}
                alt={tool.alt}
                width={80}
                height={80}
                className={styles.logo}
              />
            </div>

            <span className={styles.label}>{tool.label}</span>
          </div>
        ))}

      </div>
    </section>
  );
}
