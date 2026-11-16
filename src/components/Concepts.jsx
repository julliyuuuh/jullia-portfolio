import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { concepts } from "../data/concepts";
import BeforeAfter from "./BeforeAfter";
import { PhoneFrame } from "./Frames";
import Reveal from "./Reveal";
import { ease } from "../lib/motion";

// Three redesign concepts with a before/after slider. Pill buttons switch
// between them; the details card and phone swap with a soft crossfade.
export default function Concepts() {
  const [activeId, setActiveId] = useState(concepts[0].id);
  const reduce = useReducedMotion();
  const c = concepts.find((x) => x.id === activeId);

  return (
    <section id="concepts" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="label text-ink-soft">Redesign concepts</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] md:text-6xl">
            Before and after, <span className="font-serif font-normal italic text-peri-deep">three ways</span>
          </h2>
        </div>
        <p className="max-w-md text-ink-soft md:justify-self-end">
          Made-up businesses with believably dated websites, redesigned the way I'd
          redesign yours. Drag the slider to compare.
        </p>
      </Reveal>

      <Reveal className="mt-10 flex flex-wrap gap-2" delay={0.1}>
        {concepts.map((x) => {
          const on = x.id === activeId;
          return (
            <button
              key={x.id}
              type="button"
              aria-pressed={on}
              aria-controls="concept-panel"
              onClick={() => setActiveId(x.id)}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors duration-300 ${
                on ? "bg-ink text-paper" : "border border-ink/15 hover:border-ink"
              }`}
            >
              {x.kind}
            </button>
          );
        })}
      </Reveal>

      <div id="concept-panel" aria-live="polite" className="mt-8 grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-start">
        <div>
          {/* key forces a fresh slider (reset to 50%) for each concept */}
          <BeforeAfter
            key={c.id}
            before={c.before}
            after={c.after}
            beforeAlt={`${c.name}: the dated "before" homepage`}
            afterAlt={`${c.name}: the redesigned homepage`}
            url={c.url}
          />
          <p className="label mt-4 text-ink-soft">Fictional business · concept redesign</p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={c.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease }}
            className="grid grid-cols-[1fr_auto] gap-6 rounded-[2rem] bg-paper p-7 md:p-8"
          >
            <div className="min-w-0">
              <p className="label text-ink-soft">{c.kind}</p>
              <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">{c.name}</h3>
              <p className="mt-3 text-ink-soft">{c.summary}</p>
            </div>
            <PhoneFrame src={c.phone} alt={`${c.name} redesign on a phone`} className="w-24 rotate-3 sm:w-28" />

            <ul className="col-span-2 space-y-3 border-t border-ink/10 pt-5">
              {c.changes.map((ch) => (
                <li key={ch} className="flex gap-3 text-[15px]">
                  <span aria-hidden="true" className="text-sand">✦</span>
                  {ch}
                </li>
              ))}
            </ul>
            <ul className="col-span-2 flex flex-wrap gap-2" aria-label="Built with">
              {c.builtWith.map((b) => (
                <li key={b} className="rounded-full bg-cream px-3 py-1.5 text-sm">
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
