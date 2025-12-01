import Image from "next/image";
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
    <section id="about" className={styles.bioSection} role="region" aria-labelledby="about-heading">
      <div className={styles.bioContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/profile-image.jpg"
            alt={bio.alt}
            width={400}
            height={400}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
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

          <a href={cvFile} download className={styles.cvButton} aria-label={cvAriaLabel}>
            {cv.download}
          </a>
        </div>
      </div>
    </section>
  );
}
