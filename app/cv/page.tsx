import type { Metadata } from "next";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { experiences, education, skills, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "CV — Filippo Guastella",
  description: "Curriculum Vitae of Filippo Guastella, Data Scientist.",
};

export default function CVPage() {
  return (
    <div className="px-8 py-16 md:px-16 print:py-0">
      <div className="mx-auto max-w-[1200px]">
        {/* Download button — hidden on print */}
        <div className="mb-10 flex justify-end print:hidden">
          <a
            href="/filippo-guastella-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-[4px] bg-notion-blue px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-notion-blue-deep"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>

        {/* Header */}
        <header
          className="mb-12 pb-10"
          style={{ borderBottom: "1px solid var(--notion-border)" }}
        >
          <h1 className="mb-1 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
            Filippo Guastella
          </h1>
          <p className="mb-5 text-[16px] font-medium text-notion-gray500">
            Data Scientist
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 text-[14px] font-medium text-notion-gray500 transition-colors hover:text-notion-ink">
              <Mail size={13} /> {contact.email}
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[14px] font-medium text-notion-gray500 transition-colors hover:text-notion-ink">
              <Github size={13} /> filippo-creator
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[14px] font-medium text-notion-gray500 transition-colors hover:text-notion-ink">
              <Linkedin size={13} /> filippo-guastella
            </a>
          </div>
        </header>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-[26px] font-bold leading-[1.23] tracking-[-0.625px] text-notion-ink">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-[12px] bg-notion-card p-5 shadow-notion-card"
                style={{ border: "1px solid var(--notion-border)" }}
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-[16px] font-bold text-notion-ink">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-[14px] font-medium text-notion-gray500">
                      {edu.university} · {edu.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-[14px] font-medium text-notion-gray300">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-[26px] font-bold leading-[1.23] tracking-[-0.625px] text-notion-ink">
            Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="rounded-[12px] bg-notion-card p-5 shadow-notion-card"
                style={{ border: "1px solid var(--notion-border)" }}
              >
                <div className="mb-0.5 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-[16px] font-bold text-notion-ink">
                    {exp.role} — {exp.company}
                  </p>
                  <p className="shrink-0 text-[14px] font-medium text-notion-gray300">
                    {exp.period}
                  </p>
                </div>
                <p className="mb-3 text-[14px] font-medium text-notion-gray300">
                  {exp.location}
                </p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-[14px] leading-[1.5] text-notion-gray500">
                      <span className="mt-[2px] shrink-0 text-notion-gray300">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="mb-6 text-[26px] font-bold leading-[1.23] tracking-[-0.625px] text-notion-ink">
            Skills
          </h2>
          <div
            className="rounded-[12px] bg-notion-card p-5 shadow-notion-card"
            style={{ border: "1px solid var(--notion-border)" }}
          >
            <div className="space-y-3">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:items-start">
                  <span className="w-36 shrink-0 text-[14px] font-semibold text-notion-ink">
                    {group.category}
                  </span>
                  <p className="text-[14px] text-notion-gray500">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
