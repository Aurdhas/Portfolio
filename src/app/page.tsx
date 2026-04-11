import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ContentGallery from "@/components/ContentGallery";

export default function Home() {
  return (
    <main style={{ background: "#0F0F0F" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContentGallery />
      <Contact />
    </main>
  );
}