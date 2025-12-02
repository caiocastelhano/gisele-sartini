"use client";

import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Bio from "../Bio/Bio";
import Tools from "../Tools/Tools";
import Projects from "../Projects/Projects";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function HomeContent({ dictionary, lang }) {
  useEffect(() => {
    function updateVh() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    }

    updateVh();
    window.addEventListener("resize", updateVh);

    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <>
      <Navbar lang={lang} dictionary={dictionary} />
      <HeroSection dictionary={dictionary} />
      <Bio dictionary={dictionary} lang={lang} />
      <Tools dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Clients dictionary={dictionary} />
      <Contact dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </>
  );
}
