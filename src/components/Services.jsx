import { motion } from "motion/react";
import { services, process } from "../data/site";
import Reveal from "./Reveal";
import { ease } from "../lib/motion";

export default function Services() {
  return (
    <>
      <section id="services" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="label text-ink-soft">Services</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] md:text-6xl">
              How I can <span className="font-serif font-normal italic text-peri-deep">help</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-soft md:justify-self-end">
            Need a new site, a smoother shop, or a fix for the one you have?
            Every project gets a clear plan and a fixed quote before we start.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 2) * 0.1}
              className="group flex flex-col justify-between gap-8 rounded-[2rem] bg-paper p-8 transition-colors duration-500 hover:bg-peri-soft/60 md:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="label text-ink-soft">0{i + 1}</span>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 transition-transform duration-500 group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em] md:text-3xl">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.text}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="rounded-full bg-cream px-3 py-1.5 text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Process, on a dark band for contrast */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <Reveal>
            <p className="label text-paper/50">Process</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-0.035em] md:text-6xl">
              Simple steps, <span className="font-serif font-normal italic text-peri">no surprises</span>
            </h2>
            <p className="mt-5 max-w-xl text-paper/65">
              Your feedback shapes every step. I share work early, listen
              closely, and keep improving it until you're truly happy with it.
            </p>
          </Reveal>

          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            {/* The line between the steps draws itself in */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-paper/20 md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease }}
            />
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.2 + i * 0.15} className="relative">
                <span className="relative grid h-10 w-10 place-items-center rounded-full bg-peri font-mono text-sm text-ink">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-medium">{p.title}</h3>
                <p className="mt-2 text-paper/65">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
