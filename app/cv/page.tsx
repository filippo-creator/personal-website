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
      <div className="mb-10 flex justify-end print:hidden">
        <a
          href="/filippo-guastella-cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md border border-[#e9e8e4] bg-[#f1f1ef] px-4 py-2 font-sans text-sm text-[#37352f] transition-colors hover:bg-[#e9e8e4]"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <header className="mb-10 border-b border-[#e9e8e4] pb-8">
        <h1 className="mb-1 font-sans text-3xl font-bold text-[#37352f]">
          Filippo Guastella
        </h1>
        <p className="mb-4 font-sans text-sm text-[#9b9a97]">
          Data Scientist
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 font-sans text-sm text-[#9b9a97] hover:text-[#37352f]">
            <Mail size={12} /> {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-sans text-sm text-[#9b9a97] hover:text-[#37352f]">
            <Github size={12} /> filippo-creator
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-sans text-sm text-[#9b9a97] hover:text-[#37352f]">
            <Linkedin size={12} /> filippo-guastella
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mb-10">
        <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
          Education
        </h2>
        <div className="space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
              <div>
                <p className="font-sans text-sm font-semibold text-[#37352f]">
                  {edu.degree} in {edu.field}
                </p>
                <p className="font-sans text-sm text-[#9b9a97]">{edu.university} · {edu.location}</p>
              </div>
              <p className="shrink-0 font-sans text-sm text-[#9b9a97]">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="mb-0.5 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-sans text-sm font-semibold text-[#37352f]">
                  {exp.role} — {exp.company}
                </p>
                <p className="shrink-0 font-sans text-sm text-[#9b9a97]">{exp.period}</p>
              </div>
              <p className="mb-3 font-sans text-sm text-[#9b9a97]">{exp.location}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="border-l-2 border-[#e9e8e4] pl-4 font-sans text-sm text-[#9b9a97]">
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
        <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
          Skills
        </h2>
        <div className="space-y-3">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:items-start">
              <span className="w-36 shrink-0 font-sans text-sm text-[#9b9a97]">
                {group.category}
              </span>
              <p className="font-sans text-sm text-[#37352f]">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
