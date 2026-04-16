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
    <div className="px-8 py-16 md:px-16">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
            About Me
          </h2>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-[#9b9a97]">
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
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#e9e8e4] bg-[#f1f1ef] px-4 py-2 font-sans text-sm text-[#37352f] transition-colors hover:bg-[#e9e8e4]"
        >
          <Download size={14} />
          Download CV
        </a>
      </div>

      {/* Education */}
      <Education />

      {/* Skills */}
      <Skills />
    </div>
  );
}
