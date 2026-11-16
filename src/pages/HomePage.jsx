import Hero from "../components/Hero";
import ScreensMarquee from "../components/ScreensMarquee";
import WorkSection from "../components/WorkSection";
import Concepts from "../components/Concepts";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScreensMarquee />
      <WorkSection />
      <Concepts />
      <Services />
      <About />
      <Contact />
    </>
  );
}
