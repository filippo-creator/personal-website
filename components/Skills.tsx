import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#e9e8e4] px-8 py-16 md:px-16">
      <h2 className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Skills
      </h2>

      <div className="max-w-3xl space-y-6">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2 sm:flex-row sm:items-start">
            <span className="w-44 shrink-0 font-sans text-sm text-[#9b9a97]">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-[#f1f1ef] px-2.5 py-1 font-sans text-sm text-[#37352f]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
