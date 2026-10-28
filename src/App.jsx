import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Contact />
    </MotionConfig>
  );
}

export default App;
