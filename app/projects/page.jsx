import Link from "next/link";
import styles from "./page.module.css";
import pt from "../dictionaries/pt";
import en from "../dictionaries/en";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ProjectsPage({ lang = "pt" }) {
  const dictionary = lang === "en" ? en : pt;
  const { projectsPage } = dictionary;

  return (
    <>
      <Navbar lang={lang} dictionary={dictionary} />

      <main
        id="projects-page"
        role="main"
        aria-labelledby="projects-heading"
        className={styles.pageContainer}
      >
        <h1 id="projects-heading" className={styles.visuallyHidden}>
          {projectsPage.title}
        </h1>

        <span className={styles.verticalLine} aria-hidden="true"></span>
        <span className={styles.horizontalLine} aria-hidden="true"></span>

        <div className={styles.introWrapper}>
          <p className={styles.introTitle}>{projectsPage.title}</p>
          <p className={styles.introText}>{projectsPage.description}</p>
        </div>

        <div className={styles.grid}>
          {projectsPage.items.map((video, idx) => (
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
                />
              </div>

              <p className={styles.caption}>{video.caption}</p>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/" className={styles.backButton}>
            Voltar
          </Link>
        </div>
      </main>

      <Footer dictionary={dictionary} />
    </>
  );
}
