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
        role="main"
        aria-labelledby="projects-heading"
        className={styles.pageBackground}
      >
        <span className={styles.verticalLine} aria-hidden="true"></span>
        <span className={styles.horizontalLine} aria-hidden="true"></span>

        <section className={styles.headerBand}>
          <div className={styles.headerContent}>
            <h1 id="projects-heading" className={styles.title}>
              {projectsPage.title}
            </h1>
            <p className={styles.description}>{projectsPage.description}</p>
          </div>
        </section>

        <div className={styles.pageContainer}>
          <ProjectsGrid
            items={projectsPage.items}
            textCard={projectsPage.textCard}
            dictionary={dictionary}
          />

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
