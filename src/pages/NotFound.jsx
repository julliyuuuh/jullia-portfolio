import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-serif text-8xl italic text-peri-deep">404</p>
      <h1 className="mt-4 text-3xl font-medium tracking-[-0.03em]">This page doesn't exist</h1>
      <p className="mt-3 text-ink-soft">Maybe it moved, or the link has a typo.</p>
      <Link to="/" className="mt-8 rounded-full bg-ink px-6 py-3 text-paper transition hover:bg-peri-deep">
        Back home
      </Link>
    </section>
  );
}
