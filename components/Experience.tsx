const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    bullets: [
      "Led development of a real-time analytics dashboard serving 50k+ users.",
      "Reduced API latency by 40% through query optimization and caching.",
      "Mentored three junior engineers and drove team coding standards.",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Full-Stack Developer",
    period: "2019 — 2022",
    bullets: [
      "Built the core product from 0→1 using React, Node.js, and PostgreSQL.",
      "Integrated third-party payment and auth providers.",
      "Shipped bi-weekly releases with a two-person engineering team.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2017 — 2019",
    bullets: [
      "Delivered websites and web apps for small businesses and agencies.",
      "Worked across the full stack: design, frontend, backend, and deployment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-slate-900">
          Experience
        </h2>

        <div className="relative border-l border-slate-200 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-12 last:mb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-indigo-600 bg-white" />

              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {exp.role}
                </h3>
                <span className="text-sm text-slate-500">@ {exp.company}</span>
              </div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                {exp.period}
              </p>
              <ul className="space-y-1.5">
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
      </div>
    </section>
  );
}
