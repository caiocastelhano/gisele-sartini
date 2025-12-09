"use client";

import { useState } from "react";
import CategorySection from "./CategorySection";
import VideoModal from "../VideoModal/VideoModal";
import styles from "./PortfolioGrid.module.css";

export default function PortfolioGrid({ items, dictionary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  function openModal(video) {
    setCurrentVideoSrc(video.src);
    setCurrentVideoTitle(video.title);
    setIsModalOpen(true);
  }

  const categories = items.reduce((acc, video) => {
    if (!acc[video.category]) acc[video.category] = [];
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <>
      <div className={styles.wrapper}>
        {Object.entries(categories).map(([categoryName, videos]) => (
          <CategorySection
            key={categoryName}
            categoryName={categoryName}
            videos={videos}
            onVideoClick={openModal}
          />
        ))}
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={currentVideoSrc}
        videoTitle={currentVideoTitle}
        dictionary={dictionary}
      />
    </>
  );
}
