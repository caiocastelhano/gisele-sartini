export const dynamic = "force-dynamic";

import Link from "next/link";
import styles from "./page.module.css";

import en from "../../dictionaries/en";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import FloatingContactMenu from "../../components/FloatingContactMenu/FloatingContactMenu";

export const metadata = {
  title: "Portfolio",

  description:
    "Official portfolio of Gisele Sartini — video editing, motion design, reels and audiovisual productions.",

  alternates: {
    canonical: "/en/portfolio",
  },

  openGraph: {
    title: "Portfolio | Gisele Sartini",
    description:
      "Official portfolio of Gisele Sartini — video editing, motion design, reels and audiovisual productions.",
    url: "/en/portfolio",
    images: [
      {
        url: "/og/gisele-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional portrait of Gisele Sartini",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Gisele Sartini",
    description:
      "Official portfolio of Gisele Sartini — video editing, motion design, reels and audiovisual productions.",
    images: ["/og/gisele-og-image.jpg"],
  },
};

export default function ProjectsPage() {
  const dictionary = en;
  const { projectsPage } = dictionary;

  return (
    <>
      <Navbar lang="en" dictionary={dictionary} />

      <main
        id="projects-page"
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
            <Link
              href="/en"
              className={styles.backButton}
              aria-label={projectsPage.backButtonAria}
            >
              {projectsPage.backButtonText}
            </Link>
          </div>
        </div>
      </main>

      <FloatingContactMenu dictionary={dictionary} />

      <Footer dictionary={dictionary} />
    </>
  );
}
