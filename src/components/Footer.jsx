import { site } from "../data/site";
import { currentYear } from "../lib/time";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between md:px-10">
      <div className="flex items-center gap-3">
        <img src="/jullia-avatar.jpg" alt="" className="h-8 w-8 rounded-full object-cover" />
        <p>
          © {currentYear()} {site.name}. Designed and built by me.
        </p>
      </div>
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          })
        }
        className="self-start rounded-full px-3 py-1.5 transition hover:bg-ink/5 hover:text-ink sm:self-auto"
      >
        Back to top ↑
      </button>
    </footer>
  );
}
