import Link from "next/link";
import styles from "./Projects.module.css";

export default function Projects({ dictionary }) {
  const { projects } = dictionary;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={styles.projectsSection}
      role="region"
      aria-label={projects.ariaLabels.sectionLabel}
    >
      <span className={styles.verticalLine} aria-hidden="true"></span>
      <span className={styles.horizontalLine} aria-hidden="true"></span>

      <h2 id="projects-heading" className={styles.visuallyHidden}>
        {projects.title}
      </h2>

      <div className={styles.introWrapper}>
        <p className={styles.introTitle}>{projects.sectionTitle}</p>
        <p className={styles.introText}>{projects.sectionDescription}</p>
      </div>

      <div className={styles.grid}>
        {projects.items.slice(0, 9).map((video, idx) => (
          <div key={idx} className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src={video.src}
                title={video.title}
                loading="lazy"
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                fetchPriority="low"
                allowFullScreen
              ></iframe>
            </div>

            <p className={styles.caption}>{video.caption}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <Link
          href="/projects"
          className={styles.seeAllButton}
          aria-label={projects.ariaLabels.seeAllButton}
        >
          {projects.seeAllText}
        </Link>
      </div>
    </section>
  );
}
