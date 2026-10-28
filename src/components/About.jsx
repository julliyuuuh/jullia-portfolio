import Reveal from "./Reveal";

const capabilities = [
  {
    title: "Front-end",
    items: ["React & Next.js", "TypeScript & JavaScript", "HTML & CSS", "Bootstrap & Tailwind"],
  },
  {
    title: "Back-end & data",
    items: ["PostgreSQL", "Oracle", "Java", "C# & C++"],
  },
  {
    title: "Care about",
    items: ["Typography", "Micro-interactions", "Responsive layouts", "Accessibility"],
  },
];

function About() {
  return (
    <section id="about" className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <Reveal className="md:col-span-4">
          <span className="label text-ink/50">About</span>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal>
            <p className="text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
              I'm happiest making something new. I start with how it should
              look and feel, then build it end to end, because the{" "}
              <em className="font-serif italic text-smoky-rose">small things</em>{" "}
              like timing, spacing and states only get decided in code.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <h3 className="label text-ink/50">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-ink/80">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
