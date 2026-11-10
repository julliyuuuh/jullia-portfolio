import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { findWork, nextWork } from "../data/work";
import { BrowserFrame, PhoneFrame } from "../components/Frames";
import Reveal from "../components/Reveal";
import WeatherIcons from "../components/WeatherIcons";
import BeforeAfter from "../components/BeforeAfter";
import Contact from "../components/Contact";
import NotFound from "./NotFound";
import { ease } from "../lib/motion";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const item = findWork(slug);

  useEffect(() => {
    if (item) document.title = `${item.title} case study · Jullia De Jesus`;
    return () => {
      document.title = "Jullia De Jesus · Freelance Web Designer & Developer, Philippines";
    };
  }, [item]);

  if (!item) return <NotFound />;
  return <CaseStudy key={item.slug} item={item} />;
}

function CaseStudy({ item }) {
  const { theme } = item;
  const next = nextWork(item.slug);

  // Reading progress bar along the top of the page
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <article>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress, background: theme.bg }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left"
      />

      {/* Intro */}
      <header className="mx-auto max-w-6xl px-5 pt-32 md:px-10 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Link to="/#work" className="label text-ink-soft transition hover:text-ink">
            ← All work
          </Link>
          <p className="label mt-10 text-ink-soft">{item.tags.join(" · ")}</p>
        </motion.div>
        <h1 className="mt-4 overflow-hidden pb-2 text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
          >
            {item.title}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink-soft md:text-4xl"
        >
          {item.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-12 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto]"
        >
          {item.meta.map(([label, value]) => (
            <div key={label}>
              <p className="label text-ink-soft">{label}</p>
              <p className="mt-2">{value}</p>
            </div>
          ))}
          <div className="flex flex-wrap items-start gap-2 lg:max-w-[22rem]">
            {item.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`rounded-full px-5 py-2.5 text-sm transition ${
                  i === 0
                    ? "bg-ink text-paper hover:bg-peri-deep"
                    : "border border-ink/15 hover:border-ink"
                }`}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Hero visual */}
      <div className="mx-auto mt-14 max-w-6xl px-3 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="relative overflow-hidden rounded-[2rem] px-6 pt-10 md:px-16 md:pt-16"
          style={{ background: theme.bg }}
        >
          <BrowserFrame
            src={item.cover.desktop}
            alt={`${item.title} on desktop`}
            url={item.cover.url}
            loading="eager"
            className="relative top-2"
          />
          <PhoneFrame
            src={item.cover.phone}
            alt={`${item.title} on a phone`}
            loading="eager"
            className="absolute bottom-[-10%] right-4 w-[24%] max-w-[220px] md:right-10"
          />
        </motion.div>
      </div>

      {/* Story blocks */}
      <div className="mx-auto max-w-6xl space-y-24 px-5 py-24 md:space-y-36 md:px-10 md:py-36">
        {item.blocks.map((block, i) => (
          <Block key={i} block={block} theme={theme} />
        ))}
      </div>

      {/* Next case study */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-10">
        <Link
          to={`/work/${next.slug}`}
          className="group grid items-center gap-8 rounded-[2rem] p-8 md:grid-cols-[1fr_0.8fr] md:p-12"
          style={{ background: next.theme.bg, color: next.theme.text }}
        >
          <div>
            <p className="label opacity-60">Next case study</p>
            <p className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              {next.title}{" "}
              <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </p>
            <p className="mt-3 max-w-md opacity-75">{next.summary}</p>
          </div>
          <BrowserFrame
            src={next.cover.desktop}
            alt=""
            url={next.cover.url}
            className="transition-transform duration-700 ease-[var(--ease-calm)] group-hover:-translate-y-2"
          />
        </Link>
      </section>

      <Contact />
    </article>
  );
}

// ---- One component per block type ------------------------------------

const views = {
  text: TextBlock,
  split: SplitBlock,
  personas: PersonasBlock,
  flow: FlowBlock,
  image: ImageBlock,
  decision: DecisionBlock,
  gallery: GalleryBlock,
  palette: PaletteBlock,
  phones: PhonesBlock,
  icons: IconsBlock,
  stats: StatsBlock,
  beforeAfter: BeforeAfterBlock,
};

function Block({ block, theme }) {
  const View = views[block.type];
  return View ? <View block={block} theme={theme} /> : null;
}

// Label on the left, title + content on the right (stacks on phones)
function Section({ label, title, children, className = "" }) {
  return (
    <Reveal as="section" className={`grid gap-6 md:grid-cols-[180px_1fr] md:gap-12 ${className}`}>
      <p className="label pt-2 text-peri-deep">{label}</p>
      <div className="min-w-0">
        {title && (
          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </Reveal>
  );
}

function Paragraphs({ body }) {
  const list = Array.isArray(body) ? body : [body];
  return (
    <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-soft">
      {list.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

function TextBlock({ block }) {
  return (
    <Section label={block.label} title={block.title}>
      <Paragraphs body={block.body} />
    </Section>
  );
}

function SplitBlock({ block }) {
  return (
    <Section label={block.label} title={block.title}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Paragraphs body={block.body} />
        <div className="mt-6 rounded-[1.5rem] bg-paper p-6 md:p-8">
          <p className="label text-ink-soft">{block.list.title}</p>
          <ol className="mt-4 space-y-3">
            {block.list.items.map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="font-mono text-sm text-peri-deep">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function PersonasBlock({ block }) {
  return (
    <Section label={block.label} title={block.title}>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {block.items.map((p) => (
          <li key={p.name} className="rounded-[1.5rem] bg-paper p-6 md:p-8">
            <p className="text-xl font-medium">{p.name}</p>
            <p className="mt-3 font-serif text-2xl leading-snug text-ink-soft">“{p.quote}”</p>
            <p className="label mt-6 text-ink-soft">Needs</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.needs.map((n) => (
                <li key={n} className="rounded-full bg-cream px-3 py-1.5 text-sm">
                  {n}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-soft">{block.note}</p>
    </Section>
  );
}

function FlowBlock({ block, theme }) {
  return (
    <Section label={block.label} title={block.title}>
      <ol className="mt-8 flex flex-wrap items-center gap-y-3">
        {block.steps.map((step, i) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease }}
            className="flex items-center"
          >
            <span
              className="rounded-full bg-paper px-4 py-2.5 text-sm"
              style={
                i === 0 || i === block.steps.length - 1
                  ? { background: theme.bg, color: theme.text }
                  : undefined
              }
            >
              {step}
            </span>
            {i < block.steps.length - 1 && (
              <span aria-hidden="true" className="mx-2 text-ink-soft">
                →
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

function ImageBlock({ block }) {
  return (
    <Reveal as="figure">
      <BrowserFrame src={block.image} alt={block.alt} url={block.url} />
      {block.caption && <figcaption className="mt-4 text-sm text-ink-soft">{block.caption}</figcaption>}
    </Reveal>
  );
}

function DecisionBlock({ block }) {
  return (
    <Reveal as="section" className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
      <div className={block.flip ? "md:order-2" : ""}>
        <p className="label text-peri-deep">{block.label}</p>
        <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">{block.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{block.body}</p>
        {block.aside && (
          <p className="mt-5 rounded-2xl border-l-2 border-peri bg-paper px-5 py-4 text-sm text-ink-soft">
            {block.aside}
          </p>
        )}
      </div>
      <BrowserFrame src={block.image} alt={block.alt} />
    </Reveal>
  );
}

function GalleryBlock({ block }) {
  return (
    <Section label={block.label} title={block.title}>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{block.body}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {block.images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 2) * 0.1}>
            <BrowserFrame src={img.src} alt={img.alt} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PaletteBlock({ block }) {
  return (
    <Section label={block.label} title={block.title}>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{block.body}</p>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {block.colors.map((c, i) => (
          <motion.li
            key={c.hex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="overflow-hidden rounded-[1.25rem] bg-paper"
          >
            <div className="h-28 border-b border-ink/5" style={{ background: c.hex }} />
            <div className="p-4">
              <p className="font-medium">{c.name}</p>
              <p className="font-mono text-xs uppercase text-ink-soft">{c.hex}</p>
            </div>
          </motion.li>
        ))}
      </ul>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {block.fonts.map((f) => (
          <li key={f.name} className="flex items-end justify-between gap-4 rounded-[1.25rem] bg-paper p-6">
            <div>
              <p className="label text-ink-soft">{f.role}</p>
              <p className="mt-2 text-xl">{f.name}</p>
            </div>
            <p className="text-6xl leading-none" style={{ fontFamily: f.family }} aria-hidden="true">
              Aa
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function PhonesBlock({ block, theme }) {
  return (
    <Section label={block.label} title={block.title}>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{block.body}</p>
      <div
        className="mt-10 flex gap-4 overflow-x-auto rounded-[2rem] p-6 [scrollbar-width:none] md:justify-center md:gap-6 md:p-12"
        style={{ background: theme.soft }}
      >
        {block.images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: i % 2 ? 24 : 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
            className="w-[44%] max-w-[220px] shrink-0 sm:w-[30%]"
          >
            <PhoneFrame src={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function IconsBlock({ block }) {
  return (
    <Section label={block.label} title={block.title}>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{block.body}</p>
      <div className="mt-10">
        <WeatherIcons />
      </div>
    </Section>
  );
}

function StatsBlock({ block, theme }) {
  return (
    <Section label={block.label} title={block.title}>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map(([value, text], i) => (
          <Reveal
            as="li"
            key={text}
            delay={i * 0.08}
            className="rounded-[1.5rem] p-6"
            style={{ background: theme.bg, color: theme.text }}
          >
            <p className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">{value}</p>
            <p className="mt-3 text-sm opacity-75">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function BeforeAfterBlock({ block, theme }) {
  return (
    <Section label={block.label} title={block.title}>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{block.body}</p>
      <div className="mt-10">
        <BeforeAfter
          before={block.before}
          after={block.after}
          beforeAlt={block.beforeAlt}
          afterAlt={block.afterAlt}
          url={block.url}
        />
      </div>

      {/* The same comparison on phones */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {[
          ["Before", block.phones.before, "#f6d9e8"],
          ["After", block.phones.after, theme.soft],
        ].map(([label, images, bg]) => (
          <Reveal key={label} className="rounded-[2rem] p-6 md:p-8" style={{ background: bg }}>
            <p className="label">{label}, on a phone</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <PhoneFrame key={src} src={src} alt={`${label}: screen ${i + 1} on a phone`} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* What changed, row by row */}
      <Reveal className="mt-5 overflow-hidden rounded-[1.5rem] bg-paper">
        <div className="label grid grid-cols-2 gap-6 border-b border-ink/10 px-6 py-4 text-ink-soft">
          <span>Before</span>
          <span>After</span>
        </div>
        <ul>
          {block.changes.map(([was, now]) => (
            <li key={was} className="grid grid-cols-2 gap-6 border-b border-ink/5 px-6 py-4 last:border-0">
              <span className="text-ink-soft line-through decoration-rose-300/70">{was}</span>
              <span>{now}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
