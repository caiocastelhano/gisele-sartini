"use client";

import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Bio from "../Bio/Bio";
import Tools from "../Tools/Tools";
import Projects from "../Projects/Projects";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import VideoModal from "../VideoModal/VideoModal";

export default function HomeContent({ dictionary, lang }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  function handleOpenVideo(src, title) {
    setCurrentVideoSrc(src);
    setCurrentVideoTitle(title);
    setIsModalOpen(true);
  }

  function handleCloseVideo() {
    setIsModalOpen(false);
    setCurrentVideoSrc("");
    setCurrentVideoTitle("");
  }

  return (
    <>
      <Navbar lang={lang} dictionary={dictionary} />
      <HeroSection dictionary={dictionary} />
      <Bio dictionary={dictionary} lang={lang} />
      <Tools dictionary={dictionary} />

      <Projects dictionary={dictionary} onVideoClick={handleOpenVideo} />

      <Clients dictionary={dictionary} />
      <Contact dictionary={dictionary} />
      <Footer dictionary={dictionary} />

      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseVideo}
        videoSrc={currentVideoSrc}
        videoTitle={currentVideoTitle}
        dictionary={dictionary}
      />
    </>
  );
}
