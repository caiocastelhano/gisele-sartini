import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <video
        className={styles.video}
        src="/videos/videoprovisorio.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </section>
  );
}
