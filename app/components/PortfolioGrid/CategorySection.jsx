"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./CategorySection.module.css";

export default function CategorySection({ categoryName, videos, onVideoClick }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const visibleCount = 3;
  const maxIndex = Math.max(0, videos.length - visibleCount);

  function next() {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }

  function prev() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  useEffect(() => {
    if (isDesktop && trackRef.current) {
      const shiftPercent = currentIndex * (100 / visibleCount);
      trackRef.current.style.transform = `translateX(-${shiftPercent}%)`;
    }
  }, [currentIndex, isDesktop]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{categoryName}</h2>

      <div className={styles.carouselWrapper}>
        
        {isDesktop && currentIndex > 0 && (
          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={(e) => {
              e.stopPropagation(); 
              prev();
            }}
            aria-label="Previous videos"
          >
            ←
          </button>
        )}

        <div
          className={styles.carouselViewport}
          aria-hidden={!isDesktop ? "true" : "false"}
        >
          <div className={styles.carouselTrack} ref={trackRef}>
            {videos.map((video, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => onVideoClick(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onVideoClick(video)}
              >
                <div className={styles.videoWrapper}>
                  <iframe
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                    className={styles.iframe}
                  />
                </div>
                <p className={styles.caption}>{video.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {isDesktop && currentIndex < maxIndex && (
          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next videos"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
