import { useState } from "react";
import { motion } from "motion/react";
import { ease } from "../lib/motion";

// Drag the handle (or use the arrow keys) to compare two screenshots.
// A real range input sits invisibly on top, so it works with mouse,
// touch and keyboard, and screen readers announce it as a slider.
export default function BeforeAfter({ before, after, beforeAlt, afterAlt, url = "" }) {
  const [pos, setPos] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease }}
      className="overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[0_30px_60px_-30px_rgba(35,36,58,0.45)]"
    >
      <div className="flex items-center gap-3 border-b border-ink/10 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </span>
        <span className="mx-auto rounded-md bg-cream px-6 py-0.5 font-mono text-[10px] text-ink-soft">{url}</span>
        <span className="w-10" aria-hidden="true" />
      </div>

      <div className="relative select-none">
        <img src={after} alt={afterAlt} loading="lazy" className="block w-full" draggable="false" />
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <span className="label absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 text-paper backdrop-blur">
          Before
        </span>
        <span className="label absolute right-4 top-4 rounded-full bg-peri-deep/90 px-3 py-1.5 text-paper backdrop-blur">
          After
        </span>

        {/* Divider + handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-paper shadow-[0_0_0_1px_rgba(35,36,58,0.15)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-lg">
            ⟷
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after: drag left to see more of the new design"
          className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <span className="pointer-events-none absolute inset-0 rounded-b-xl peer-focus-visible:ring-4 peer-focus-visible:ring-inset peer-focus-visible:ring-peri-deep" />
      </div>
    </motion.div>
  );
}
