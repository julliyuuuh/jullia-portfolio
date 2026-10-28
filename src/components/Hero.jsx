import { motion } from "framer-motion";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1];

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease },
  }),
};

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="label mb-8 flex flex-wrap gap-x-6 gap-y-2 text-ink/50"
      >
        <span>Portfolio — {new Date().getFullYear()}</span>
        <span>{site.role}</span>
        {site.location && <span>{site.location}</span>}
      </motion.div>

      <h1 className="max-w-5xl text-[clamp(2.4rem,6.4vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.035em]">
        {[
          <>I design and build</>,
          <>
            <em className="font-serif font-normal italic tracking-[-0.01em] text-smoky-rose">
              calm, considered
            </em>{" "}
            interfaces
          </>,
          <>for the web.</>,
        ].map((content, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block"
              variants={line}
              initial="hidden"
              animate="show"
              custom={i}
            >
              {content}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="max-w-md text-ink/65">
          I'm {site.name.split(" ")[0]}, a 3rd-year BSIT student. I design
          front-ends first and build the back-end when the project needs it,
          and I care about the small things: spacing, motion, and how it feels.
        </p>

        <div className="flex items-center gap-6">
          {site.available && (
            <span className="flex items-center gap-2 text-sm text-ink/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to work
            </span>
          )}
          <a href="#work" className="link-underline text-sm">
            Selected work ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
