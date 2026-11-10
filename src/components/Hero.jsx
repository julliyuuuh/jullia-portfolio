import { Link } from "react-router";
import { motion } from "motion/react";
import { site, mailto } from "../data/site";
import { useLocalTime } from "../hooks/useLocalTime";
import { ease } from "../lib/motion";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.25 + i * 0.1, ease },
  }),
};
const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: d, ease },
  }),
};

export default function Hero() {
  const time = useLocalTime(site.timeZone);

  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-36 md:px-10 md:pb-20 md:pt-44">
      <motion.ul
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="label flex flex-wrap gap-x-6 gap-y-2 text-ink-soft"
      >
        <li>{site.role}</li>
        <li>Based in the {site.location}</li>
        <li>
          <span className="sr-only">Local time: </span>
          {time} in Manila
        </li>
      </motion.ul>

      <h1 className="mt-8 text-[clamp(2.7rem,7.6vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.045em]">
        {[
          <>I design websites</>,
          <>
            that feel{" "}
            <span className="relative inline-block font-serif font-normal italic tracking-[-0.01em] text-peri-deep">
              effortless
              <Sparkle />
            </span>
            ,
          </>,
          <>and I build them, too.</>,
        ].map((content, i) => (
          <span key={i} className="block overflow-hidden pb-[0.1em]">
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
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0.7}
        className="mt-10 grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-[1.2fr_1fr] md:items-end"
      >
        <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
          Hi, I'm {site.firstName}, a freelance UI/UX designer. I help small
          brands and startups turn ideas into clear, lovely products, from the
          first wireframe to a live, responsive site.
        </p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={mailto}
            className="rounded-full bg-ink px-7 py-3.5 text-paper transition hover:bg-peri-deep"
          >
            Start a project
          </a>
          <Link
            to="/#work"
            className="group flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 transition hover:border-ink"
          >
            See my work
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function Sparkle() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="absolute -right-[0.55em] -top-[0.05em] h-[0.42em] w-[0.42em] text-sand"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: [0, 1.15, 1], rotate: 0 }}
      transition={{ duration: 1.2, delay: 1.1, ease }}
    >
      <path
        d="M12 0c.6 6.2 2.6 9.9 12 12-9.4 2.1-11.4 5.8-12 12-.6-6.2-2.6-9.9-12-12C9.4 9.9 11.4 6.2 12 0z"
        fill="currentColor"
      />
    </motion.svg>
  );
}
