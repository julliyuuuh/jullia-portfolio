import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { site } from "../data/site";
import { ease } from "../lib/motion";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/#services", label: "Services" },
  { to: "/#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-5">
      <motion.nav
        aria-label="Main"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease }}
        className={`mx-auto max-w-5xl rounded-[1.75rem] border transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || open
            ? "border-ink/10 bg-paper/85 shadow-[0_12px_40px_-20px_rgba(35,36,58,0.35)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-2 pr-2">
          <Link to="/" onClick={close} className="flex items-center gap-2.5 rounded-full pr-3">
            <img src="/favicon-96.png" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-sm font-medium tracking-tight">{site.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 text-sm md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-4 py-2 text-ink-soft transition hover:bg-ink/5 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <Link
              to="/#contact"
              onClick={close}
              className="group flex items-center gap-2 rounded-full bg-ink py-2.5 pl-4 pr-5 text-sm text-paper transition hover:bg-peri-deep"
            >
              {site.available && (
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              )}
              Let's talk
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-ink/5 md:hidden"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <motion.path
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ d: open ? "M6 6l12 12" : "M4 9h16" }}
                  transition={{ duration: 0.3, ease }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ d: open ? "M6 18L18 6" : "M4 15h16" }}
                  transition={{ duration: 0.3, ease }}
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="overflow-hidden px-3 md:hidden"
            >
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={close}
                    className="block rounded-2xl px-3 py-3 font-serif text-3xl hover:bg-ink/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="h-3" aria-hidden="true" />
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
