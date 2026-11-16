import { useRef } from "react";
import { Link } from "react-router";
import {
  motion,
  useReducedMotionConfig,
  useScroll,
  useTransform,
} from "motion/react";
import { site, mailto } from "../data/site";
import { useLocalTime } from "../hooks/useLocalTime";
import { ease } from "../lib/motion";
import portrait from "../assets/jullia.jpg";

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
  const reduce = useReducedMotionConfig();
  const stage = useRef(null);

  // Gentle scroll parallax: the photo rises a little faster than the word
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, -12]);

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-36">
      <motion.ul
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="label mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 text-ink-soft"
      >
        <li>{site.role}</li>
        <li>Based in the {site.location}</li>
        <li>
          <span className="sr-only">Local time: </span>
          {time} in Manila
        </li>
      </motion.ul>

      {/* Stage: oversized word behind, photo in front */}
      <div
        ref={stage}
        className="relative mx-auto mt-8 grid max-w-6xl place-items-center md:mt-10"
      >
        <motion.p
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          style={reduce ? undefined : { y: wordY }}
          className="pointer-events-none absolute select-none font-serif text-[clamp(6.5rem,27vw,23rem)] italic leading-none tracking-[-0.03em] text-peri/30"
        >
          jullia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          style={reduce ? undefined : { y: photoY }}
          className="relative"
        >
          <div className="relative w-[clamp(11rem,24vw,19rem)]">
            <div className="aspect-[4/5] overflow-hidden rounded-b-[1.75rem] rounded-tl-[50%_40%] rounded-tr-[50%_40%] bg-peri-soft shadow-[0_40px_80px_-40px_rgba(35,36,58,0.55)]">
              <img
                src={portrait}
                alt="Jullia smiling at a café table, resting her chin on her hand"
                fetchPriority="high"
                className="h-full w-full object-cover object-[50%_40%]"
              />
            </div>

            {/* Little floating notes around the photo */}
            <Note
              className="-left-16 top-[18%] -rotate-6 md:-left-28"
              delay={0.9}
            >
              {site.available && (
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
              )}
              Open for projects
            </Note>
            <Note
              className="-right-14 top-[46%] rotate-3 md:-right-24"
              delay={1.05}
            >
              Design + code ✦
            </Note>
            <Note
              className="-left-6 bottom-[6%] rotate-2 md:-left-14"
              delay={1.2}
            >
              BSIT student
            </Note>
          </div>
        </motion.div>
      </div>

      {/* Headline: a light line, then an italic line */}
      <h1 className="mx-auto mt-12 max-w-4xl text-center leading-[1.02] tracking-[-0.04em] md:mt-14">
        <motion.span
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.45}
          className="block text-[clamp(2.2rem,5.4vw,4.6rem)] font-light text-ink-soft"
        >
          I design websites
        </motion.span>
        <motion.span
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="block font-serif text-[clamp(2.7rem,6.6vw,5.6rem)] italic tracking-[-0.02em] text-ink"
        >
          and build them, too.
        </motion.span>
      </h1>

      <motion.p
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0.7}
        className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-ink-soft"
      >
        Hi! I'm {site.firstName}, a UI/UX & web designer from the Philippines. I
        design clear, lovely websites and hand-code them, so the little details
        make it all the way to the live site.
      </motion.p>

      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0.8}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
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
      </motion.div>
    </section>
  );
}

function Note({ className = "", delay = 0, children }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease }}
      className={`absolute hidden items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 bg-paper/90 px-3.5 py-2 text-xs shadow-[0_12px_30px_-14px_rgba(35,36,58,0.4)] backdrop-blur sm:flex ${className}`}
    >
      {children}
    </motion.span>
  );
}
