import { site } from "../data/site";
import Reveal from "./Reveal";

function Contact() {
  return (
    <footer id="contact" className="bg-deep-space text-paper">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <span className="label text-paper/50">Contact</span>
          <h2 className="mt-6 max-w-4xl text-[clamp(2.2rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.035em]">
            Let's build something{" "}
            <em className="font-serif font-normal italic text-steel-blue">
              meaningful
            </em>{" "}
            together.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-10 inline-block text-xl text-paper/90 md:text-2xl"
            >
              {site.email} ↗
            </a>
          ) : (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-10 inline-block text-xl text-paper/90 md:text-2xl"
            >
              Message me on LinkedIn ↗
            </a>
          )}
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t border-paper/15 pt-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex gap-6">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-paper"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <span>
            © {new Date().getFullYear()} {site.name} · @{site.handle}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
