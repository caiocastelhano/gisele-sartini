import Link from "next/link";
import styles from "./Projects.module.css";
import { usePathname } from "next/navigation";

export default function Projects({ dictionary, onVideoClick }) {
  const { projects } = dictionary;

  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "pt";

  function getYouTubeId(url) {
    return url.split("/embed/")[1];
  }

  function getThumbnail(url) {
    const id = getYouTubeId(url);
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

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

      <section className={styles.headerBand}>
        <div className={styles.headerContent}>
          <p className={styles.introTitle}>{projects.sectionTitle}</p>
          <p className={styles.introText}>{projects.sectionDescription}</p>
        </div>
      </section>

      <div className={styles.grid}>
        {projects.items.slice(0, 9).map((video, idx) => (
          <div key={idx} className={styles.videoCard}>
            <button
              className={styles.thumbnailButton}
              onClick={() => onVideoClick(video.src, video.title)}
            >
              <div className={styles.videoWrapper}>
                <img
                  src={getThumbnail(video.src)}
                  alt={video.title}
                  className={styles.thumbnail}
                />
                <div className={styles.playOverlay}>▶</div>
              </div>
            </button>

            <p className={styles.caption}>{video.caption}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <Link
          href={`/${lang}/portfolio`}
          className={styles.seeAllButton}
          aria-label={projects.ariaLabels.seeAllButton}
        >
          {projects.seeAllText}
        </Link>
      </div>
    </section>
  );
}
