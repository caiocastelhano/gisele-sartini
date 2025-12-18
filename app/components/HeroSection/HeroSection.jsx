import { useRef, useState } from "react";
import styles from "./HeroSection.module.css";

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polygon points="5,3 19,12 5,21" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="6" y="4" width="4" height="16" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" fill="currentColor" />
    </svg>
  );
}

function SoundOnIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polygon points="3,9 7,9 12,4 12,20 7,15 3,15" fill="currentColor" />
      <path
        d="M16 8 C18 10,18 14,16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polygon points="3,9 7,9 12,4 12,20 7,15 3,15" fill="currentColor" />
      <line
        x1="16"
        y1="8"
        x2="21"
        y2="16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="21"
        y1="8"
        x2="16"
        y2="16"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function HeroSection({ dictionary }) {
  const { hero } = dictionary;

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  function togglePlay() {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

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
      >
        <source src={hero.video.webm} type="video/webm" />
        <source src={hero.video.mp4} type="video/mp4" />
      </video>

      <div className={styles.videoControls}>
        <button
          type="button"
          onClick={togglePlay}
          className={styles.controlButton}
          aria-pressed={!isPlaying}
          aria-label={
            isPlaying
              ? hero.ariaLabels.pauseVideo
              : hero.ariaLabels.playVideo
          }
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <button
          type="button"
          onClick={toggleSound}
          className={styles.controlButton}
          aria-pressed={!isMuted}
          aria-label={
            isMuted
              ? hero.ariaLabels.soundOn
              : hero.ariaLabels.soundOff
          }
        >
          {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
        </button>
      </div>
    </section>
  );
}
