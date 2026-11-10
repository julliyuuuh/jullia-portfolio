import { motion } from "motion/react";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { ease } from "../lib/motion";
import fHome from "../assets/work/f-home.jpg";
import fShop from "../assets/work/f-shop.jpg";
import fProduct from "../assets/work/f-product.jpg";
import fmProduct from "../assets/work/fm-product.jpg";
import fmHome from "../assets/work/fm-home.jpg";
import wTokyo from "../assets/work/w-tokyo.jpg";
import wLondon from "../assets/work/w-london.jpg";
import wmReykjavik from "../assets/work/wm-reykjavik.jpg";

const screens = [
  { kind: "browser", src: fHome, url: "fleurisence-shop.vercel.app" },
  { kind: "phone", src: wmReykjavik },
  { kind: "browser", src: wTokyo, url: "weather-dashboard" },
  { kind: "phone", src: fmProduct },
  { kind: "browser", src: fShop, url: "fleurisence-shop.vercel.app" },
  { kind: "browser", src: wLondon, url: "weather-dashboard" },
  { kind: "phone", src: fmHome },
  { kind: "browser", src: fProduct, url: "fleurisence-shop.vercel.app" },
];

// A slow, endless strip of real screens from my projects.
// The list is rendered twice so the loop has no visible seam.
// It pauses on hover, and stands still if the visitor prefers less motion.
export default function ScreensMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.9, ease }}
      aria-label="Screens from my projects"
      role="img"
      className="overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee items-end gap-6 hover:[animation-play-state:paused]">
        {[...screens, ...screens].map((s, i) =>
          s.kind === "browser" ? (
            <BrowserFrame
              key={i}
              src={s.src}
              alt=""
              url={s.url}
              loading={i < 4 ? "eager" : "lazy"}
              className="w-[300px] shrink-0 md:w-[480px]"
            />
          ) : (
            <PhoneFrame
              key={i}
              src={s.src}
              alt=""
              loading={i < 4 ? "eager" : "lazy"}
              className="w-[120px] shrink-0 md:w-[170px]"
            />
          ),
        )}
      </div>
    </motion.div>
  );
}
