"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./ProjectsGrid.module.css";
import VideoModal from "../VideoModal/VideoModal";

export default function ProjectsGrid({ items, textCard, dictionary }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");

  const checkScreen = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [checkScreen]);

  const openVideo = (src, title) => {
    if (!isDesktop) return;

    setCurrentVideo(src);
    setCurrentTitle(title);
    setModalOpen(true);
  };

  const handleKeyOpen = (e, src, title) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openVideo(src, title);
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {items.map((video, idx) => (
          <div
            key={idx}
            className={`${styles.videoCard} ${isDesktop ? styles.cardClickable : ""}`}
            role={isDesktop ? "button" : undefined}
            tabIndex={isDesktop ? 0 : undefined}
            aria-label={isDesktop ? dictionary.projectsPage.ariaOpenVideo : undefined}
            onClick={() => openVideo(video.src, video.title)}
            onKeyDown={(e) => handleKeyOpen(e, video.src, video.title)}
          >
            <div className={styles.videoWrapper}>
              <iframe
                src={video.src}
                title={video.title}
                loading="lazy"
                allow="fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <p className={styles.caption}>{video.caption}</p>
          </div>
        ))}

        <div className={styles.textCard}>
          <div className={styles.textWrapper}>
            <h3 className={styles.textCardTitle}>{textCard.title}</h3>
            <p className={styles.textCardParagraph}>{textCard.paragraph}</p>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc={currentVideo}
        videoTitle={currentTitle}
        dictionary={dictionary}
      />
    </>
  );
}
