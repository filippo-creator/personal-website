import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-600">
        Hello, world.
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Filippo Guastella
      </h1>
      <p className="mb-6 text-xl text-slate-500">
        Software Engineer &amp; Builder
      </p>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">
        I design and build software with a focus on clean architecture and great
        user experiences. Currently exploring ideas at the intersection of data,
        products, and humans.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/#projects"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          View Projects
        </Link>
        <Link
          href="/#contact"
          className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
