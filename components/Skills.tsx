import { Code2, Cloud, BarChart3, Telescope, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const accentColors = ["#0075de", "#2a9d99", "#9065B0", "#1aae39"];

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  "Cloud & Data": Cloud,
  Methods: BarChart3,
  Research: Telescope,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-notion-warm px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 flex items-center gap-3 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          <Wrench size={36} />
          Skills
        </h2>

        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category];
            return (
              <div
                key={group.category}
                className="rounded-[12px] bg-notion-card p-6 shadow-notion-card"
                style={{
                  border: "1px solid var(--notion-border)",
                  borderTop: `4px solid ${accentColors[i % accentColors.length]}`,
                }}
              >
                <h3 className="mb-3 flex items-center gap-2 text-[16px] font-bold text-notion-ink">
                  {Icon && <Icon size={16} className="shrink-0" />}
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[4px] bg-notion-warm px-2 py-0.5 text-[12px] font-semibold tracking-[0.125px] text-notion-ink"
                      style={{ border: "1px solid var(--notion-border)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
