import Link from "next/link";
import styles from "./page.module.css";

import pt from "../dictionaries/pt";
import en from "../dictionaries/en";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";

export default function ProjectsPage({ lang = "pt" }) {
  const dictionary = lang === "en" ? en : pt;
  const { projectsPage } = dictionary;

  return (
    <>
      <Navbar lang={lang} dictionary={dictionary} />

      <main
        id="projects-page"
        aria-labelledby="projects-heading"
        className={styles.pageBackground}
      >
        {/* Elementos decorativos */}
        <span className={styles.verticalLine} aria-hidden="true"></span>
        <span className={styles.horizontalLine} aria-hidden="true"></span>

        {/* Faixa de Título */}
        <section className={styles.headerBand}>
          <div className={styles.headerContent}>
            <h1 id="projects-heading" className={styles.title}>
              {projectsPage.title}
            </h1>
            <p className={styles.description}>{projectsPage.description}</p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <div className={styles.pageContainer}>
          <ProjectsGrid
            items={projectsPage.items}
            textCard={projectsPage.textCard}
            dictionary={dictionary}
          />

          <div className={styles.buttonWrapper}>
            <Link
              href="/"
              className={styles.backButton}
              aria-label={projectsPage.backButtonAria}
            >
              {projectsPage.backButtonText}
            </Link>
          </div>
        </div>
      </main>

      <Footer dictionary={dictionary} />
    </>
  );
}
