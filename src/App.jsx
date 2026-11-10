import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import { MotionConfig, motion } from "motion/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { ease } from "./lib/motion";

// Case studies load only when opened, so the home page stays light
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

export default function App() {
  const { pathname } = useLocation();

  return (
    // reducedMotion="user": everything calms down if the visitor's
    // device asks for less motion
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <Nav />
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
      <Footer />
    </MotionConfig>
  );
}
