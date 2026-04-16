import { skills } from "@/lib/data";

const accentColors = ["#0075de", "#2a9d99", "#9065B0", "#1aae39"];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#f6f5f4] px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
          Skills
        </h2>

        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="rounded-[12px] bg-white p-6 shadow-notion-card"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderTop: `4px solid ${accentColors[i % accentColors.length]}`,
              }}
            >
              <h3 className="mb-3 text-[16px] font-bold text-[rgba(0,0,0,0.95)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[4px] bg-[#f6f5f4] px-2 py-0.5 text-[12px] font-semibold tracking-[0.125px] text-[rgba(0,0,0,0.95)]"
                    style={{ border: "1px solid rgba(0,0,0,0.1)" }}
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
