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
        className={styles.pageBackground}
      >
        {/* 🔹 Linhas ficam no fundo geral */}
        <span className={styles.verticalLine} aria-hidden="true"></span>
        <span className={styles.horizontalLine} aria-hidden="true"></span>

        {/* 🔹 Faixa separada para título + texto */}
        <section className={styles.headerBand}>
          <div className={styles.headerContent}>
            <h1 id="projects-heading" className={styles.title}>
              {projectsPage.title}
            </h1>
            <p className={styles.description}>{projectsPage.description}</p>
          </div>
        </section>

        {/* 🔹 Container do conteúdo (grid + botão) */}
        <div className={styles.pageContainer}>
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

            <div className={styles.textCard}>
              <div className={styles.textWrapper}>
                <h3 className={styles.textCardTitle}>{projectsPage.textCard.title}</h3>
              </div>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <Link href="/" className={styles.backButton}>
              Voltar
            </Link>
          </div>
        </div>
      </main>

      <Footer dictionary={dictionary} />
    </>
  );
}
