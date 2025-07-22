import AboutMe from "@/components/AboutMe";
import { Certificate } from "@/components/Certificate";
import { Education } from "@/components/Education";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { SpotlightContainer } from "@/components/SpotlightContainer";
import { TechStack } from "@/components/TechStack";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <SpotlightContainer />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="certification">
        <Certificate />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>

    </main>

  );
}

