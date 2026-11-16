import { useState } from "react";
import { Link } from "react-router";
import {
  motion,
  useMotionValue,
  useReducedMotionConfig,
  useSpring,
  useTransform,
} from "motion/react";
import { work } from "../data/work";
import { concepts } from "../data/concepts";
import { mailto } from "../data/site";
import Reveal from "./Reveal";

// Everything shown in the fan: the two case studies + the concepts section
const items = [
  ...work.map((w) => ({
    id: w.slug,
    to: `/work/${w.slug}`,
    title: w.title,
    headline: w.headline,
    meta: `${w.tags.join(" · ")} · ${w.year}`,
    image: w.cover.desktop,
    theme: w.theme,
    cta: "Read the case study",
  })),
  {
    id: "concepts",
    to: "/#concepts",
    title: "Redesign concepts",
    headline: `${concepts.length} dated websites, redesigned`,
    meta: "Before & after · Made-up businesses · 2026",
    image: concepts[0].after,
    theme: { bg: "#c8ad96", soft: "#f4e9e0", text: "#23243a" },
    cta: "See the before & after",
  },
];

const tiltSpring = { stiffness: 180, damping: 24 };
// Springs keep their speed when interrupted, so quick switches stay smooth
const cardSpring = { type: "spring", stiffness: 260, damping: 30, mass: 0.9 };

export default function WorkSection() {
  const [active, setActive] = useState(0);
  const [spread, setSpread] = useState(false);
  const reduce = useReducedMotionConfig();

  // The whole fan tilts toward the cursor
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), tiltSpring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), tiltSpring);

  function onMove(e) {
    if (e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width;
    // The fan is split into equal slices, one per card. The card for the slice
    // under the cursor comes forward. (Hovering the cards themselves made them
    // fight, because a moving card slides under the cursor.)
    const slice = Math.min(items.length - 1, Math.max(0, Math.floor(x * items.length)));
    if (slice !== active) setActive(slice);
    if (reduce) return;
    px.set(x - 0.5);
    py.set((e.clientY - box.top) / box.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
    setSpread(false);
  }

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="label text-ink-soft">Selected work</p>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.035em] md:text-6xl">
            Things I've <span className="font-serif font-normal italic text-ink">made lately</span>
          </h2>
        </div>
        <p className="max-w-xs text-ink-soft">
          Designed and built by me, from the first sketch to the live site.
        </p>
      </Reveal>

      <div className="mt-14 grid items-center gap-12 md:mt-20 lg:grid-cols-[1fr_1.05fr]">
        {/* The list: hover or focus a row to bring its card forward */}
        <ol className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((it, i) => (
            <li key={it.id}>
              <Link
                to={it.to}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-6 md:py-7"
              >
                <span className="label pt-1 text-ink-soft">0{i + 1}</span>
                <span>
                  <span className="label block text-ink-soft">{it.title}</span>
                  <span
                    className={`mt-2 block text-2xl tracking-[-0.025em] transition-colors duration-300 md:text-3xl ${
                      active === i ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {it.headline}
                  </span>
                  <span className="mt-2 block text-sm text-ink-soft">{it.meta}</span>
                  {/* On phones the fan is hidden, so each row shows its picture */}
                  <img
                    src={it.image}
                    alt=""
                    loading="lazy"
                    className="mt-5 block w-full rounded-2xl border border-ink/10 lg:hidden"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center self-start rounded-full border border-ink/15 transition group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* The fan of cards (desktop only) */}
        <div
          onPointerMove={onMove}
          onPointerEnter={() => setSpread(true)}
          onPointerLeave={onLeave}
          className="relative hidden h-[30rem] [perspective:1400px] lg:block"
        >
          <motion.div
            style={reduce ? undefined : { rotateX, rotateY }}
            className="absolute inset-0 will-change-transform"
          >
            {items.map((it, i) => {
              const offset = i - (items.length - 1) / 2; // -1, 0, 1
              const isActive = active === i;
              const gap = spread ? 120 : 70;
              return (
                <motion.div
                  key={it.id}
                  aria-hidden="true"
                  initial={false}
                  animate={{
                    x: offset * gap,
                    y: isActive ? -18 : Math.abs(offset) * 14,
                    rotate: isActive ? 0 : offset * 7,
                    scale: isActive ? 1.04 : 0.94,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  }}
                  transition={reduce ? { duration: 0 } : cardSpring}
                  className="absolute left-1/2 top-1/2 -ml-[11rem] -mt-[13rem] w-[22rem] will-change-transform"
                >
                  <Link
                    to={it.to}
                    tabIndex={-1}
                    className="block overflow-hidden rounded-[1.75rem] shadow-[0_30px_50px_-30px_rgba(35,36,58,0.55)] ring-1 ring-black/5"
                    style={{ background: it.theme.bg, color: it.theme.text }}
                  >
                    <div className="p-3">
                      <img
                        src={it.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/11] w-full rounded-[1.1rem] object-cover object-top"
                      />
                    </div>
                    <div className="px-5 pb-5 pt-2">
                      <p className="label opacity-70">{it.title}</p>
                      <p className="mt-2 text-xl leading-snug tracking-[-0.02em]">{it.headline}</p>
                      <p className="mt-4 text-sm opacity-75">{it.cta} →</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <Reveal className="mt-12">
        <a
          href={mailto}
          className="group flex flex-col items-start justify-between gap-6 rounded-[2rem] border-2 border-dashed border-ink/15 p-8 transition hover:border-peri-deep md:flex-row md:items-center md:p-10"
        >
          <p className="text-2xl tracking-[-0.03em] md:text-3xl">
            Your project <span className="font-serif italic text-peri-deep">could be next</span>
          </p>
          <span className="flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper transition group-hover:bg-peri-deep">
            Tell me about it
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </a>
      </Reveal>
    </section>
  );
}
