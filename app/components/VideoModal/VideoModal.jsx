"use client";

import styles from "./VideoModal.module.css";

export default function VideoModal({ isOpen, onClose, videoSrc, videoTitle, dictionary }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={dictionary.videoModal.ariaCloseButton}
        >
          ✕
        </button>

        <div className={styles.videoWrapper}>
          <iframe
            src={videoSrc}
            title={videoTitle || dictionary.videoModal.fallbackTitle}
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
