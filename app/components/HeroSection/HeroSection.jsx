import { useRef, useState } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection({ dictionary }) {
  const { hero } = dictionary;

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleSound() {
    if (!videoRef.current) return;

    const newMutedState = !videoRef.current.muted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  }

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
        ref={videoRef}
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
      >
        <source src={hero.video.webm} type="video/webm" />
        <source src={hero.video.mp4} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggleSound}
        className={styles.soundButton}
        aria-pressed={!isMuted}
        aria-label={
          isMuted
            ? hero.ariaLabels.soundOn
            : hero.ariaLabels.soundOff
        }
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </section>
  );
}
