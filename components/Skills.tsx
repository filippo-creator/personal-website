import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[rgba(240,240,250,0.08)] px-8 py-20 md:px-16">
      <p className="mb-16 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Skills
      </p>

      <div className="max-w-3xl space-y-8">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2 sm:flex-row sm:items-start">
            <span className="w-44 shrink-0 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {group.items.map((item) => (
                <span key={item} className="font-din text-sm text-[#f0f0fa]">
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
