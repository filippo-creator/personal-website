import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-slate-900">
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-2 sm:flex-row sm:items-start">
              <span className="w-40 shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-400 pt-0.5">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
