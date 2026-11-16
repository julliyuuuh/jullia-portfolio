import { site } from "../data/site";
import Reveal from "./Reveal";
import Stickers from "./Stickers";

const facts = [
  ["Based in", "Philippines (GMT+8)"],
  ["Studying", "BS Information Technology"],
  ["Leadership", "Chief Creatives Officer, AWS Student Builder Group · TIP QC"],
  ["Learning now", "AWS cloud computing, and a bit of cybersecurity"],
  ["Works with", "Clients anywhere, in English"],
  ["Right now", site.available ? "Taking on new projects" : "Booked up, but say hi"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        {/* Your photo now lives in the intro, so this side holds the sticker board */}
        <div className="md:sticky md:top-28 md:self-start">
          <Stickers />
        </div>

        <div>
          <Reveal>
            <p className="label text-ink-soft">About</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] md:text-6xl">
              Hi, I'm {site.firstName} <span className="font-serif font-normal italic text-peri-deep">✦</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              I'm a freelance UI/UX and web designer from the Philippines, and a
              BS Information Technology student. I love the moment a messy idea
              turns into a screen that just makes sense.
            </p>
            <p>
              I start with the people who'll use it: what they need, where they
              get stuck, what would make them smile. Then I design it, and I
              build it myself, so details like spacing, motion and error
              messages make it all the way to the live site.
            </p>
            <p>
              In school projects I'm usually the team's designer, shaping the
              look, the flows and the little details. Outside class, I lead
              the creative side of our campus AWS Student Builder Group as
              Chief Creatives Officer.
            </p>
            <p>
              Whatever the project, big or small, I give it my very best. And
              I love feedback: every note is a chance to make the work better,
              so I listen closely and keep refining until it feels right for you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-ink/10 pt-8 sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="label text-ink-soft">{label}</dt>
                  <dd className="mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
