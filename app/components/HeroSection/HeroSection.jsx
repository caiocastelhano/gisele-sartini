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
        poster={hero.poster}
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        crossOrigin="anonymous"
      >
        <source src={hero.video.webm} type="video/webm" />
        <source src={hero.video.mp4} type="video/mp4" />
      </video>
    </section>
  );
}
