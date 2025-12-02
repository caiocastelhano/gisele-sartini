import styles from "./HeroSection.module.css";

export default function HeroSection({ dictionary }) {
  const { hero } = dictionary;

  return (
    <section
      className={styles.heroSection}
      aria-labelledby="hero-heading"
      role="region"
    >
      <h1 id="hero-heading" className={styles.visuallyHidden}>
        {hero.sectionLabel}
      </h1>

      <video
        aria-hidden="true"
        tabIndex="-1"
        role="presentation"
        className={styles.video}
        src="/videos/videoprovisorio.mp4"
        poster="/images/fotoprovisoria.jpg"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        controls={false}
        crossOrigin="anonymous"
      ></video>
    </section>
  );
}
