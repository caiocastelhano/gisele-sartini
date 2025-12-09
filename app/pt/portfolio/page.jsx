export const dynamic = "force-dynamic";

import Link from "next/link";
import styles from "./page.module.css";

import pt from "../../dictionaries/pt";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PortfolioGrid from "../../components/PortfolioGrid/PortfolioGrid";
import FloatingContactMenu from "../../components/FloatingContactMenu/FloatingContactMenu";

export const metadata = {
  title: "Portfolio",

  description:
    "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",

  alternates: {
    canonical: "/pt/portfolio",
  },

  openGraph: {
    title: "Portfolio | Gisele Sartini",
    description:
      "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",
    url: "/pt/portfolio",
    images: [
      {
        url: "/og/gisele-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Retrato profissional de Gisele Sartini",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Gisele Sartini",
    description:
      "Portfólio oficial de Gisele Sartini — edição de vídeo, motion design, reels e produções audiovisuais.",
    images: ["/og/gisele-og-image.jpg"],
  },
};

export default function PortfolioPage() {
  const dictionary = pt;
  const { projectsPage } = dictionary;

  return (
    <>
      <Navbar lang="pt" dictionary={dictionary} />

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
          <PortfolioGrid items={projectsPage.items} />

          <div className={styles.buttonWrapper}>
            <Link
              href="/pt"
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
