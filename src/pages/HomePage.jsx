import Hero from "../components/Hero";
import ScreensMarquee from "../components/ScreensMarquee";
import WorkSection from "../components/WorkSection";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScreensMarquee />
      <WorkSection />
      <Services />
      <About />
      <Contact />
    </>
  );
}
