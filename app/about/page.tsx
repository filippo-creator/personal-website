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
    <div className="px-8 py-20 md:px-16">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-5 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
            About Me
          </p>
          <p className="max-w-xl font-din text-sm leading-relaxed text-[rgba(240,240,250,0.65)]">
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
          className="inline-flex shrink-0 items-center gap-3 rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-7 py-[18px] font-din text-xs font-bold tracking-mission text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)]"
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
