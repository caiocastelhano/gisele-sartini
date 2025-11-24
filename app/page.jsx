import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Bio from "./components/Bio";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Bio />
      <Tools />
      <Projects />
      <Brands />
      <Contact />
      <Footer />
    </main>
  );
}
