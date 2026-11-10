import { Link } from "react-router";
import { work } from "../data/work";
import { mailto } from "../data/site";
import { BrowserFrame, PhoneFrame } from "./Frames";
import Reveal from "./Reveal";

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="label text-ink-soft">Selected work</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.035em] md:text-6xl">
            Case studies, <span className="font-serif font-normal italic text-peri-deep">start to finish</span>
          </h2>
        </div>
        <p className="max-w-xs text-ink-soft">
          The problem, the decisions, and what shipped. Each one designed and built by me.
        </p>
      </Reveal>

      <ul className="mt-14 space-y-8 md:mt-20 md:space-y-10">
        {work.map((w, i) => (
          <Reveal as="li" key={w.slug}>
            <WorkCard item={w} index={i} />
          </Reveal>
        ))}
        <Reveal as="li">
          <a
            href={mailto}
            className="group flex flex-col items-start justify-between gap-6 rounded-[2rem] border-2 border-dashed border-ink/15 p-8 transition hover:border-peri-deep md:flex-row md:items-center md:p-12"
          >
            <div>
              <p className="label text-ink-soft">0{work.length + 1}</p>
              <p className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Your project <span className="font-serif font-normal italic text-peri-deep">could be next</span>
              </p>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper transition group-hover:bg-peri-deep">
              Tell me about it
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </Reveal>
      </ul>
    </section>
  );
}

function WorkCard({ item, index }) {
  const { theme } = item;
  return (
    <Link
      to={`/work/${item.slug}`}
      className="group relative grid overflow-hidden rounded-[2rem] md:grid-cols-[0.9fr_1.1fr]"
      style={{ background: theme.bg, color: theme.text }}
    >
      <div className="relative z-10 flex flex-col justify-between gap-10 p-8 md:p-12">
        <div>
          <p className="label opacity-60">
            0{index + 1} · {item.year}
          </p>
          <h3 className="mt-4 text-4xl font-medium tracking-[-0.035em] md:text-5xl">{item.title}</h3>
          <p className="mt-4 max-w-sm text-lg leading-snug opacity-80">{item.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <li key={t} className="rounded-full border border-current/25 px-3 py-1 text-xs opacity-85">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm opacity-70">
            {item.highlights.map((h) => (
              <li key={h}>✦ {h}</li>
            ))}
          </ul>
          <span
            className="flex items-center gap-2 rounded-full px-5 py-3 text-sm transition-transform duration-500 group-hover:-translate-y-0.5"
            style={{ background: theme.soft, color: theme.bg }}
          >
            Read the case study
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>

      {/* Screens: a laptop view with a phone in front, lifting on hover */}
      <div className="relative min-h-[300px] overflow-hidden md:min-h-[460px]">
        <div className="absolute left-6 right-[-12%] top-8 transition-transform duration-700 ease-[var(--ease-calm)] group-hover:-translate-y-2 md:left-4 md:top-12">
          <BrowserFrame src={item.cover.desktop} alt={`${item.title} desktop screen`} url={item.cover.url} />
        </div>
        <div className="absolute bottom-[-18%] right-6 w-[26%] min-w-[96px] transition-transform duration-700 ease-[var(--ease-calm)] group-hover:-translate-y-4 md:right-10">
          <PhoneFrame src={item.cover.phone} alt={`${item.title} on a phone`} />
        </div>
      </div>
    </Link>
  );
}
