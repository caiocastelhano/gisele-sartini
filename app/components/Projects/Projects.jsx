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
      {/* Título acessível */}
      <h2 id="projects-heading" className="visuallyHidden">
        {projects.title}
      </h2>

      {/* GRID DE 9 VÍDEOS */}
      <div className={styles.grid}>
        {projects.items.slice(0, 9).map((video, idx) => (
          <div key={idx} className={styles.videoCard}>

            <div className={styles.videoWrapper}>
              <iframe
                src={video.src}
                title={video.title}
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className={styles.caption}>{video.caption}</p>
          </div>
        ))}
      </div>

      {/* BOTÃO "VEJA TUDO" */}
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
