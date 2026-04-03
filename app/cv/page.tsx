import type { Metadata } from "next";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { experiences, education, skills, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "CV — Filippo Guastella",
  description: "Curriculum Vitae of Filippo Guastella, Data Scientist.",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 print:py-0">
      {/* Download button — hidden on print */}
      <div className="mb-10 flex justify-end print:hidden">
        <a
          href="/filippo-guastella-cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-md"
        >
          <Download size={15} />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <header className="mb-10 border-b border-slate-200 pb-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-slate-900">
          Filippo Guastella
        </h1>
        <p className="mb-4 text-lg text-slate-500">Data Scientist</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-indigo-600">
            <Mail size={13} /> {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600">
            <Github size={13} /> filippo-creator
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600">
            <Linkedin size={13} /> filippo-guastella
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mb-10">
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-sm text-slate-600">{edu.university} · {edu.location}</p>
              </div>
              <p className="shrink-0 text-sm text-slate-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <span className="font-semibold text-slate-900">{exp.role}</span>
                  <span className="ml-2 text-sm text-slate-500">@ {exp.company}</span>
                </div>
                <p className="shrink-0 text-sm text-slate-400">{exp.period}</p>
              </div>
              <p className="mb-2 text-xs text-slate-400">{exp.location}</p>
              <ul className="space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
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
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
          Skills
        </h2>
        <div className="space-y-3">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:items-start">
              <span className="w-36 shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-400 pt-0.5">
                {group.category}
              </span>
              <p className="text-sm text-slate-600">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
