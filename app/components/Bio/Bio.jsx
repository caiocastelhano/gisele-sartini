import Image from "next/image";
import styles from "./Bio.module.css";

export default function Bio({ dictionary, lang }) {
  const { bio, cv } = dictionary;

  const cvFile =
    lang === "pt"
      ? "/cv-file/CV-PT.pdf"
      : "/cv-file/CV-ENG.pdf";

  return (
    <section id="about" className={styles.bioSection}>
      <div className={styles.bioContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/profile-image.jpg"
            alt={bio.alt}
            width={400}
            height={400}
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.visuallyHidden}>{bio.title}</h2>

          {bio.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          <a href={cvFile} download className={styles.cvButton}>
            {cv.download}
          </a>
        </div>
      </div>
    </section>
  );
}
