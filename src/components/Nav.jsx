import { useEffect, useState } from "react";
import { site } from "../data/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-ink/10"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {site.name}
          <span className="text-smoky-rose">.</span>
        </a>

        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline hidden text-ink/70 hover:text-ink sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-paper transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
          >
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
