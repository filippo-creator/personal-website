import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-end px-8 pb-24 md:px-16">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Pill badge */}
        <span className="mb-8 inline-flex items-center rounded-full bg-[#f2f9ff] px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#097fe8]">
          Data Scientist — Milan
        </span>

        {/* Display hero heading: 64px, weight 700, -2.125px tracking */}
        <h1 className="mb-6 text-[clamp(48px,8vw,96px)] font-bold leading-none text-[rgba(0,0,0,0.95)]"
          style={{ letterSpacing: "clamp(-1.5px, -0.022em, -3px)" }}>
          Filippo<br />Guastella
        </h1>

        {/* Body Large: 20px, weight 600, warm gray */}
        <p className="mb-10 max-w-xl text-[20px] font-semibold leading-[1.40] tracking-[-0.125px] text-[#615d59]">
          Data Scientist at Databreeders S.r.l., Milan, specialising in
          cross-media reach &amp; frequency modelling and audience attribution
          pipelines. Background in Physics (BSc, Milan) and Astrophysics (MSc,
          Munich).
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#experience"
            className="rounded-[4px] bg-[#0075de] px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#005bab] active:scale-90"
          >
            My Experience
          </Link>
          <Link
            href="/#contact"
            className="rounded-[4px] bg-[rgba(0,0,0,0.05)] px-4 py-2 text-[15px] font-semibold text-[rgba(0,0,0,0.95)] transition-colors hover:bg-[rgba(0,0,0,0.08)] active:scale-90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
