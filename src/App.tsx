import { Nav } from "./components/Nav";
import { BackgroundLayer } from "./components/BackgroundLayer";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { OpenSource } from "./components/OpenSource";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ color: "var(--fg)" }}>
      <BackgroundLayer />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Education />
        <Experience />
        <OpenSource />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
