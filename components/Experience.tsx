import { experiences } from "@/lib/data";

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
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-indigo-600 bg-white" />

              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {exp.role}
                </h3>
                <span className="text-sm text-slate-500">@ {exp.company}</span>
              </div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                {exp.period} · {exp.location}
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
