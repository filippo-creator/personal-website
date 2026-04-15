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
      {/* Download button — hidden on print */}
      <div className="mb-12 flex justify-end print:hidden">
        <a
          href="/filippo-guastella-cv.pdf"
          download
          className="inline-flex items-center gap-3 rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-7 py-[18px] font-din text-xs font-bold tracking-mission text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)]"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <header className="mb-12 border-b border-[rgba(240,240,250,0.08)] pb-10">
        <h1 className="mb-1 font-din text-4xl font-bold tracking-aerospace text-[#f0f0fa]">
          Filippo Guastella
        </h1>
        <p className="mb-6 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
          Data Scientist
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)] hover:text-[#f0f0fa]">
            <Mail size={12} /> {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)] hover:text-[#f0f0fa]">
            <Github size={12} /> filippo-creator
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)] hover:text-[#f0f0fa]">
            <Linkedin size={12} /> filippo-guastella
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mb-12">
        <p className="mb-8 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
          Education
        </p>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <div>
                <p className="font-din text-sm font-bold tracking-aerospace text-[#f0f0fa]">
                  {edu.degree} in {edu.field}
                </p>
                <p className="font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">{edu.university} · {edu.location}</p>
              </div>
              <p className="shrink-0 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <p className="mb-8 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
          Experience
        </p>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-din text-sm font-bold tracking-aerospace text-[#f0f0fa]">
                  {exp.role} — {exp.company}
                </p>
                <p className="shrink-0 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">{exp.period}</p>
              </div>
              <p className="mb-3 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">{exp.location}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="border-l border-[rgba(240,240,250,0.2)] pl-4 font-din text-xs text-[rgba(240,240,250,0.65)]">
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
        <p className="mb-8 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
          Skills
        </p>
        <div className="space-y-4">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:items-start">
              <span className="w-36 shrink-0 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
                {group.category}
              </span>
              <p className="font-din text-xs text-[#f0f0fa]">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
