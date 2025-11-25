import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Bio from "../Bio/Bio";
import Tools from "../Tools/Tools";
import Projects from "../Projects/Projects";
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

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
