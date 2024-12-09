import About from "@/sections/About";
import Contact from "@/sections/Contact/Contact";
import Experiences from "@/sections/Experiences/Experiences";
import Hero from "@/sections/Hero/Hero";
import MarqueeSection from "@/sections/MarqueeSection";
import Projects from "@/sections/Projects";
import Navbar from "@/sections/NavBar/NavBar";

/* Main component for the Home page, organizing sections and their layout. */
export default function Home() {
  return (
    <>
      <main>
        {/* Hero section: occupies 70% of the viewport height with a minimal margin. */}
        <section className="mb-0 h-[70vh]" style={{ marginBottom: "1px" }} id="hero">
          <Hero />
        </section>

        {/* Navbar section for navigation. */}
        <section>
          <Navbar />
        </section>

        {/* Marquee section with a slight margin adjustment for visual alignment. */}
        <section style={{ marginTop: "1px" }}>
          <MarqueeSection />
        </section>

        {/* About section with unique ID for navigation and identification. */}
        <section id="about">
          <About />
        </section>

        {/* Experiences section showcasing past work or experiences. */}
        <section id="experiences">
          <Experiences />
        </section>

        {/* Projects section for displaying project highlights. */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact section for user interaction or inquiries. */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
