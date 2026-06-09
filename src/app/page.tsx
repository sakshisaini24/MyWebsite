import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import TravelSection from "@/components/TravelSection";
import Passions from "@/components/Passions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <Credentials />
        <TravelSection />
        <Passions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
