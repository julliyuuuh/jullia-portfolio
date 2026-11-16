import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import Concepts from "../components/Concepts";
import Playground from "../components/Playground";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <Concepts />
      <Playground />
      <Services />
      <About />
      <Contact />
    </>
  );
}
