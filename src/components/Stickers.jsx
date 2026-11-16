import { useRef } from "react";
import { motion, useReducedMotionConfig } from "motion/react";
import { stickers } from "../data/site";
import { ease } from "../lib/motion";

// Colours per kind of sticker, from the site palette
const looks = {
  me: "bg-peri-deep text-paper",
  design: "bg-[#f3d3cf] text-ink",
  build: "bg-ink text-paper",
  learning: "border-2 border-dashed border-peri-deep bg-paper text-peri-deep",
  basics: "bg-[#e9e2da] text-ink-soft",
};

const shapes = {
  pill: "rounded-full px-4 py-2",
  round: "grid h-20 w-20 place-items-center rounded-full p-2 text-center leading-tight",
  // A soft 8-point star, cut with clip-path
  star: "grid h-24 w-24 place-items-center p-3 text-center leading-tight [clip-path:polygon(50%_0%,63%_18%,85%_15%,82%_37%,100%_50%,82%_63%,85%_85%,63%_82%,50%_100%,37%_82%,15%_85%,18%_63%,0%_50%,18%_37%,15%_15%,37%_18%)]",
  tag: "rounded-[0.9rem] rounded-tl-[1.6rem] px-4 py-2.5",
};

// Small, fixed tilts so the board looks hand-placed (same every visit)
const tilts = [-6, 4, -2, 7, -4, 3, -8, 5, -3, 6, -5, 2, 8, -7, 4, -2, 6, -4, 3, -6, 5];

export default function Stickers() {
  const board = useRef(null);
  const reduce = useReducedMotionConfig();

  return (
    <div>
      <div
        ref={board}
        className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-paper p-6 [background-image:radial-gradient(rgba(35,36,58,0.12)_1px,transparent_1px)] [background-size:18px_18px] md:p-8"
      >
        <p className="label text-ink-soft">Sticker board</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {stickers.map((s, i) => (
            <motion.li
              key={s.label}
              drag={!reduce}
              dragConstraints={board}
              dragElastic={0.15}
              dragMomentum={false}
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: tilts[i % tilts.length] }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.03 * i, ease }}
              whileHover={reduce ? undefined : { scale: 1.08, rotate: 0, zIndex: 10 }}
              whileDrag={{ scale: 1.12, zIndex: 20, boxShadow: "0 18px 30px -12px rgba(35,36,58,0.45)" }}
              className={`relative cursor-grab select-none text-sm font-medium shadow-[0_6px_14px_-8px_rgba(35,36,58,0.45)] active:cursor-grabbing ${looks[s.kind]} ${shapes[s.shape]} ${
                s.wide ? "max-w-[15rem]" : ""
              }`}
            >
              {s.label}
            </motion.li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        {reduce ? "My skills and roles, as stickers." : "Psst, you can drag the stickers around ✦"}
      </p>
    </div>
  );
}
