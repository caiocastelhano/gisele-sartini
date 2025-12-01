import styles from "./Bio.module.css";

export default function Bio({ dictionary, lang }) {
  const { bio, cv } = dictionary;

  const cvFile =
    lang === "pt"
      ? "/cv-file/CV-PT.pdf"
      : "/cv-file/CV-ENG.pdf";

  const cvAriaLabel =
    lang === "pt"
      ? "Baixar currículo em PDF"
      : "Download résumé PDF";

  return (
    <section
      id="about"
      className={styles.bioSection}
      role="region"
      aria-labelledby="about-heading"
    >
      <div className={styles.bioContainer}>

        <div className={styles.leftColumn}>
          <div className={styles.photo} aria-hidden="true"></div>

          <a
            href={cvFile}
            download
            className={styles.cvButton}
            aria-label={cvAriaLabel}
          >
            {cv.download}
          </a>
        </div>

        <div className={styles.rightColumn}>
          <h2 id="about-heading" className={styles.visuallyHidden}>
            {bio.title}
          </h2>

          {bio.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
