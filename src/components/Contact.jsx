import { motion, AnimatePresence } from "motion/react";
import { site, mailto } from "../data/site";
import { useCopy } from "../hooks/useCopy";
import Reveal from "./Reveal";
import { ease } from "../lib/motion";

export default function Contact() {
  const { copied, copy } = useCopy();

  return (
    <section id="contact" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-5 py-24 text-paper md:px-10 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-peri/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <p className="label text-paper/50">Contact</p>
            <h2 className="mt-6 text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              Have a project in mind?
              <br />
              <span className="font-serif font-normal italic text-peri">
                Let's make it lovely.
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.15}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={mailto}
              className="group flex items-center justify-between gap-6 rounded-full bg-paper py-4 pl-7 pr-4 text-[15px] text-ink transition hover:bg-peri-soft sm:text-xl"
            >
              <span className="truncate">{site.email}</span>
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:-rotate-45"
              >
                →
              </span>
            </a>
            <button
              type="button"
              onClick={() => copy(site.email)}
              className="relative h-[3.75rem] min-w-36 rounded-full border border-paper/25 px-6 text-sm transition hover:border-paper"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease }}
                  className="block"
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </motion.span>
              </AnimatePresence>
            </button>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-14 grid gap-8 border-t border-paper/15 pt-8 md:grid-cols-[1.4fr_1fr]"
          >
            <p className="max-w-md text-paper/65">
              Tell me what you're building, your timeline and a rough budget.
              I'll reply with a few ideas and the next steps.
            </p>
            <ul className="flex flex-wrap gap-3 md:justify-end">
              {[
                ["LinkedIn", site.linkedin],
                ["GitHub", site.github],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm transition hover:border-paper"
                  >
                    {label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
