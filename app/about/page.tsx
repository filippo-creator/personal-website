import type { Metadata } from "next";
import { Download } from "lucide-react";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "About — Filippo Guastella",
  description:
    "Data Scientist at Databreeders S.r.l. Background in Physics and Astrophysics.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            I&apos;m a Data Scientist at Databreeders S.r.l. in Milan, where I work on
            cross-media reach &amp; frequency modelling and audience attribution
            pipelines for television and digital advertising. My background is in
            Physics (BSc, University of Milan) and Astrophysics (MSc, LMU Munich),
            where my thesis focused on topological methods for large-scale cosmic
            structure detection.
          </p>
        </div>
        <a
          href="/filippo-guastella-cv.pdf"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-md"
        >
          <Download size={15} />
          Download CV
        </a>
      </div>

      {/* Education */}
      <div className="-mx-6">
        <Education />
      </div>

      {/* Skills */}
      <div className="-mx-6">
        <Skills />
      </div>
    </div>
  );
}
