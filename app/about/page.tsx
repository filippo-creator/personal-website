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
    <div>
      {/* Header */}
      <div className="bg-[#f6f5f4] px-8 py-20 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-8 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
            About Me
          </h1>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-xl text-[20px] font-semibold leading-[1.40] tracking-[-0.125px] text-[#615d59]">
              I&apos;m a Data Scientist at Databreeders S.r.l. in Milan, where I work on
              cross-media reach &amp; frequency modelling and audience attribution
              pipelines for television and digital advertising. My background is in
              Physics (BSc, University of Milan) and Astrophysics (MSc, LMU Munich),
              where my thesis focused on topological methods for large-scale cosmic
              structure detection.
            </p>
            <a
              href="/filippo-guastella-cv.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-[4px] bg-[#0075de] px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#005bab]"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Education & Skills reuse components */}
      <Education />
      <Skills />
    </div>
  );
}
