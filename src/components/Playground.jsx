import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { icons } from "../lib/weatherIcons";
import { WeatherGlyph } from "./WeatherIcons";
import { PhoneFrame } from "./Frames";
import Reveal from "./Reveal";
import { ease } from "../lib/motion";
import fmProduct from "../assets/work/fm-product.jpg";
import fmHome from "../assets/work/fm-home.jpg";
import wmReykjavik from "../assets/work/wm-reykjavik.jpg";

// Small live experiments pulled out of my projects. Each card is a real,
// working piece, not a screenshot.
export default function Playground() {
  return (
    <section id="playground" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="label text-ink-soft">Playground</p>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.035em] md:text-6xl">
            Little things, <span className="font-serif font-normal italic text-ink">made with care</span>
          </h2>
        </div>
        <p className="max-w-md text-ink-soft md:justify-self-end">
          Tiny pieces from my projects that you can play with. Click, tap and
          poke around: they're all live.
        </p>
      </Reveal>

      <div className="mt-12 grid auto-rows-[17rem] gap-4 md:grid-cols-2 lg:grid-cols-3">
        <WeatherCard />
        <BagCard />
        <PhoneCard />
        <MonogramCard />
        <PetalsCard />
      </div>
    </section>
  );
}

function Card({ label, title, className = "", style, children, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className={`relative flex flex-col overflow-hidden rounded-[1.75rem] p-6 ${className}`}
      style={style}
    >
      <p className="label relative z-10 opacity-70">{label}</p>
      <h3 className="relative z-10 mt-1 text-lg font-medium tracking-[-0.01em]">{title}</h3>
      {children}
    </Reveal>
  );
}

// 1 · Weather: one button cycles through the icon set and its colour mood
const moods = {
  Clear: ["#8fc1f2", "#cfe6fb", "#173753"],
  Night: ["#232a5c", "#47508f", "#f4f7fc"],
  "Partly cloudy": ["#a9cdee", "#e3eef8", "#173753"],
  Cloudy: ["#9aa4b5", "#d2d7df", "#23243a"],
  Fog: ["#c9cdd4", "#eceef1", "#23243a"],
  Rain: ["#5d6f8a", "#95a5bd", "#f4f7fc"],
  Snow: ["#dfe9f5", "#ffffff", "#2a3466"],
  Storm: ["#3b3552", "#6b6286", "#f4f7fc"],
};

function WeatherCard() {
  const [i, setI] = useState(0);
  const icon = icons[i];
  const [from, to, ink] = moods[icon.name];

  return (
    <Card
      label="01 · Weather Dashboard"
      title="An icon set that sets the mood"
      className="transition-colors duration-700 lg:row-span-2"
      style={{ background: `linear-gradient(160deg, ${from}, ${to})`, color: ink }}
    >
      <div className="grid flex-1 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={icon.name}
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 20 }}
            transition={{ duration: 0.45, ease }}
            className="flex flex-col items-center gap-3"
          >
            <WeatherGlyph icon={icon} className="h-28 w-28" />
            <p className="text-2xl tracking-[-0.02em]">{icon.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={() => setI((n) => (n + 1) % icons.length)}
        className="self-start rounded-full bg-white/25 px-5 py-2.5 text-sm backdrop-blur transition hover:bg-white/40"
        style={{ color: ink }}
      >
        Change the weather ↻
      </button>
      <p className="sr-only" aria-live="polite">
        Now showing: {icon.name}
      </p>
    </Card>
  );
}

// 2 · Add to bag: the micro-interaction from Fleurisence's product cards
function BagCard() {
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const id = setTimeout(() => setAdded(false), 1600);
    return () => clearTimeout(id);
  }, [added]);

  return (
    <Card label="02 · Fleurisence" title="“Add to bag”, with feedback" className="bg-[#1f3a2e] text-[#fbf7f2]" delay={0.05}>
      <div className="mt-auto flex items-center gap-3">
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            setCount((c) => c + 1);
            setAdded(true);
          }}
          className={`relative h-12 flex-1 overflow-hidden rounded-full text-sm transition-colors duration-300 ${
            added ? "bg-[#f3d3cf] text-[#1f3a2e]" : "bg-[#fbf7f2] text-[#1f3a2e]"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={added ? "added" : "add"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="block"
            >
              {added ? "Added ✓" : "Add to bag"}
            </motion.span>
          </AnimatePresence>
        </motion.button>
        <span role="img" className="relative grid h-12 w-12 place-items-center rounded-full border border-white/25" aria-label={`Bag: ${count} items`}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M5.5 8.5h13l-1 11.5h-11l-1-11.5zM9 8.5V7a3 3 0 016 0v1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          <motion.span
            key={count}
            initial={{ scale: 1.6 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#c2525b] px-1 text-[11px] text-white"
          >
            {count}
          </motion.span>
        </span>
      </div>
      <p className="mt-3 text-sm opacity-70">The button answers, and the bag count pops.</p>
    </Card>
  );
}

// 3 · Phone frame: the iPhone frame drawn in code for this site
const screens = [
  { src: fmProduct, alt: "Fleurisence product page on a phone" },
  { src: wmReykjavik, alt: "Weather Dashboard at night on a phone" },
  { src: fmHome, alt: "Fleurisence signed-in home page on a phone" },
];

function PhoneCard() {
  const [i, setI] = useState(0);
  return (
    <Card label="03 · This site" title="An iPhone frame, all in code" className="bg-peri-soft lg:row-span-2" delay={0.1}>
      <div className="relative mt-4 flex flex-1 items-start justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease }}
            className="w-44"
          >
            <PhoneFrame src={screens[i].src} alt={screens[i].alt} />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={() => setI((n) => (n + 1) % screens.length)}
        className="mt-4 self-start rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition hover:bg-peri-deep"
      >
        Next screen →
      </button>
    </Card>
  );
}

// 4 · Monogram: the JL logo, with the sparkles twinkling on hover or tap
function MonogramCard() {
  const [burst, setBurst] = useState(0);
  return (
    <Card label="04 · Brand" title="My JL monogram" className="group bg-[#f3e4d7]" delay={0.15}>
      <button
        type="button"
        onClick={() => setBurst((b) => b + 1)}
        aria-label="Make the logo sparkle"
        className="relative mx-auto mt-2 grid flex-1 place-items-center"
      >
        <img src="/icon-512.png" alt="" className="h-28 w-28 rounded-full transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-105" />
        {[
          ["right-2 top-3", 0],
          ["left-1 top-10", 0.08],
          ["bottom-4 right-6", 0.16],
        ].map(([pos, d], k) => (
          <motion.svg
            key={`${burst}-${k}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`absolute h-5 w-5 text-sand ${pos}`}
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: d, ease }}
          >
            <path d="M12 0c.6 6.2 2.6 9.9 12 12-9.4 2.1-11.4 5.8-12 12-.6-6.2-2.6-9.9-12-12C9.4 9.9 11.4 6.2 12 0z" fill="currentColor" />
          </motion.svg>
        ))}
      </button>
      <p className="text-sm text-ink-soft">Tap it ✦ A new version is on the way.</p>
    </Card>
  );
}

// 5 · Petals: the falling petals from Fleurisence's hero, with a pause button
// Five petals, falling slowly, so the card stays calm next to the others
const petals = [
  { left: "10%", size: 15, dur: 16, delay: 0, color: "#c2525b" },
  { left: "29%", size: 11, dur: 19, delay: 6, color: "#c8ad96" },
  { left: "50%", size: 14, dur: 17, delay: 2.5, color: "#878eb3" },
  { left: "71%", size: 12, dur: 20, delay: 9, color: "#c2525b" },
  { left: "89%", size: 13, dur: 18, delay: 4.5, color: "#c8ad96" },
];

function PetalsCard() {
  const [paused, setPaused] = useState(false);
  return (
    <Card
      label="05 · Fleurisence"
      title="Petals that drift, and stop when asked"
      className="bg-paper md:col-span-2 lg:col-span-3"
      delay={0.2}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((p, k) => (
          <svg
            key={k}
            viewBox="0 0 20 20"
            width={p.size}
            height={p.size}
            className="petal absolute -top-6"
            style={{
              left: p.left,
              color: p.color,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            <path d="M10 1 C16 6 16 14 10 19 C4 14 4 6 10 1 Z" fill="currentColor" />
          </svg>
        ))}
      </div>
      <button
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((v) => !v)}
        className="relative z-10 mt-auto self-start rounded-full border border-ink/15 bg-paper/80 px-5 py-2.5 text-sm backdrop-blur transition hover:border-ink"
      >
        {paused ? "Let them fall ▶" : "Pause the petals ❚❚"}
      </button>
      <p className="relative z-10 mt-3 text-sm text-ink-soft">They also stay still for anyone who turns on reduced motion.</p>
    </Card>
  );
}
