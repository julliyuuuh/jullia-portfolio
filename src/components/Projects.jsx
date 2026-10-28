import { projects } from "../data/projects";
import Reveal from "./Reveal";

function Cover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
      />
    );
  }

  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div
      className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
      style={{
        background: `radial-gradient(120% 90% at 20% 10%, ${project.tint}33, transparent 60%), linear-gradient(160deg, ${project.tint}22, ${project.tint}55)`,
      }}
    >
      <span
        className="font-serif text-7xl italic md:text-8xl"
        style={{ color: project.tint }}
      >
        {initials}
      </span>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal className="mb-12 flex items-end justify-between gap-6 md:mb-16">
        <div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-md text-ink/65">
            A few things I've designed and built, front to back.
          </p>
        </div>
        <span className="label text-ink/50">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </Reveal>

      <ul className="flex flex-col gap-16 md:gap-24">
        {projects.map((p, i) => {
          const Card = p.href ? "a" : "div";
          const linkProps = p.href
            ? { href: p.href, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Reveal as="li" key={p.title}>
              <Card
                {...linkProps}
                className="group grid gap-6 md:grid-cols-12 md:gap-10"
              >
                <div
                  className={`aspect-[4/3] overflow-hidden rounded-2xl bg-alabaster md:col-span-7 ${
                    i % 2 ? "md:order-2" : ""
                  }`}
                >
                  <Cover project={p} />
                </div>

                <div className="flex flex-col justify-between gap-6 md:col-span-5 md:py-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="label text-ink/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.status && (
                        <span className="label rounded-full bg-smoky-rose/10 px-2 py-0.5 text-smoky-rose">
                          {p.status}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-ink/65">{p.summary}</p>
                    {p.href && (
                      <span className="mt-4 inline-flex items-center gap-2 text-sm">
                        <span className="link-underline">{p.linkLabel}</span>
                        <span
                          aria-hidden
                          className="text-smoky-rose transition-transform duration-300 group-hover:translate-x-1"
                        >
                          ↗
                        </span>
                      </span>
                    )}
                  </div>

                  <dl className="grid grid-cols-2 gap-4 border-t border-ink/10 pt-4 text-sm">
                    <div>
                      <dt className="label text-ink/40">Role</dt>
                      <dd className="mt-1">{p.role}</dd>
                    </div>
                    <div>
                      <dt className="label text-ink/40">Year</dt>
                      <dd className="mt-1">{p.year}</dd>
                    </div>
                    <div className="col-span-2 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </dl>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
