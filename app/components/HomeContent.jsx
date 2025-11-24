import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Bio from "./Bio";
import Tools from "./Tools";
import Projects from "./Projects";
import Brands from "./Brands";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomeContent({ dictionary, lang }) {
  return (
    <>
      <Navbar lang={lang} dictionary={dictionary} />
      <HeroSection dictionary={dictionary} />
      <Bio dictionary={dictionary} />
      <Tools dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Brands dictionary={dictionary} />
      <Contact dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </>
  );
}
