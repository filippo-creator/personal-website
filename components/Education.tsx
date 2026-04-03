import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-slate-900">
          Education
        </h2>

        <div className="relative border-l border-slate-200 pl-8">
          {education.map((edu, i) => (
            <div key={i} className="mb-10 last:mb-0">
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-violet-500 bg-white" />

              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {edu.degree} in {edu.field}
                </h3>
              </div>
              <p className="text-sm text-slate-500">{edu.university}</p>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                {edu.period} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
