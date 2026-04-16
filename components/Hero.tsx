import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-end px-8 pb-20 md:px-16">
      <p className="mb-3 font-sans text-sm text-[#9b9a97]">
        Data Scientist — Milan
      </p>
      <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-[#37352f] md:text-7xl lg:text-8xl">
        Filippo<br />Guastella
      </h1>
      <p className="mb-10 max-w-xl font-sans text-base leading-relaxed text-[#9b9a97]">
        Data Scientist at Databreeders S.r.l., Milan, specialising in
        cross-media reach &amp; frequency modelling and audience attribution
        pipelines. Background in Physics (BSc, Milan) and Astrophysics (MSc,
        Munich).
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/#experience"
          className="rounded-md border border-[#e9e8e4] bg-[#f1f1ef] px-4 py-2 font-sans text-sm text-[#37352f] transition-colors hover:bg-[#e9e8e4]"
        >
          My Experience
        </Link>
        <Link
          href="/#contact"
          className="rounded-md border border-[#e9e8e4] bg-[#f1f1ef] px-4 py-2 font-sans text-sm text-[#37352f] transition-colors hover:bg-[#e9e8e4]"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
