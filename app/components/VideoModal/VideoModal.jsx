"use client";

import { useEffect, useRef } from "react";
import styles from "./VideoModal.module.css";

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  videoTitle,
  dictionary,
}) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;

      setTimeout(() => {
        modalRef.current?.focus();
      }, 10);

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";

      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const trapFocus = (e) => {
    const focusableSelectors =
      'button, [href], iframe, [tabindex]:not([tabindex="-1"])';

    const focusable = modalRef.current.querySelectorAll(focusableSelectors);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className={styles.modal}
        ref={modalRef}
        tabIndex="-1"
        onKeyDown={trapFocus}
      >
        <h2 id="video-modal-title" className={styles.visuallyHidden}>
          {dictionary?.videoModal?.dialogTitle || "Vídeo"}
        </h2>

        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={dictionary?.videoModal?.ariaCloseButton || "Close"}
        >
          ✕
        </button>

        <div className={styles.videoWrapper}>
          <iframe
            src={videoSrc}
            title={videoTitle || dictionary?.videoModal?.fallbackTitle || "Vídeo"}
            allowFullScreen
            loading="lazy"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
