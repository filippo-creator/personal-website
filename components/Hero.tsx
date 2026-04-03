import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

function hasProfilePhoto() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "profile.png"));
  } catch {
    return false;
  }
}

export default function Hero() {
  const photoExists = hasProfilePhoto();

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        {/* Text */}
        <div className="flex-1">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-600">
            Hello, world.
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Filippo Guastella
          </h1>
          <p className="mb-6 text-xl text-slate-500">Data Scientist</p>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">
            Data Scientist at Databreeders S.r.l., Milan, specialising in
            cross-media reach &amp; frequency modelling and audience attribution
            pipelines. Background in Physics (BSc, Milan) and Astrophysics (MSc,
            Munich).
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#experience"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-md"
            >
              My Experience
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          {photoExists ? (
            <Image
              src="/profile.png"
              alt="Filippo Guastella"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-md ring-4 ring-white"
              priority
            />
          ) : (
            <div className="h-48 w-48 rounded-full bg-slate-100 ring-4 ring-white shadow-md flex items-center justify-center md:h-52 md:w-52">
              <span className="text-slate-400 text-sm text-center px-4">
                Add profile.jpg to /public
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
