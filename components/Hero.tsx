import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-end px-8 pb-20 md:px-16">
      <p className="mb-5 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Data Scientist — Milan
      </p>
      <h1 className="mb-8 font-din text-6xl font-bold leading-none tracking-aerospace text-[#f0f0fa] md:text-8xl lg:text-9xl">
        Filippo<br />Guastella
      </h1>
      <p className="mb-12 max-w-xl font-din text-sm leading-relaxed text-[rgba(240,240,250,0.65)]">
        Data Scientist at Databreeders S.r.l., Milan, specialising in
        cross-media reach &amp; frequency modelling and audience attribution
        pipelines. Background in Physics (BSc, Milan) and Astrophysics (MSc,
        Munich).
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/#experience"
          className="rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-7 py-[18px] font-din text-xs font-bold tracking-mission text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)]"
        >
          My Experience
        </Link>
        <Link
          href="/#contact"
          className="rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-7 py-[18px] font-din text-xs font-bold tracking-mission text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)]"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
