"use client";

import { useState, useEffect } from "react";
import styles from "./ProjectsGrid.module.css";
import VideoModal from "../VideoModal/VideoModal";

export default function ProjectsGrid({ items, textCard, dictionary }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const openVideo = (src, title) => {
    if (isDesktop) {
      setCurrentVideo(src);
      setCurrentTitle(title);
      setModalOpen(true);
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {items.map((video, idx) => (
          <div
            key={idx}
            className={styles.videoCard}
            onClick={() => openVideo(video.src, video.title)}
            style={{ cursor: isDesktop ? "pointer" : "default" }}
          >
            <div className={styles.videoWrapper}>
              <iframe
                src={video.src}
                title={video.title}
                loading="lazy"
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
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
