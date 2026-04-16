import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#f6f5f4] px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
          Experience
        </h2>

        <div className="max-w-3xl space-y-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="rounded-[12px] bg-white p-6 shadow-notion-card"
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <h3 className="mb-1 text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-[rgba(0,0,0,0.95)]">
                {exp.role}
              </h3>
              <p className="mb-4 text-[14px] font-medium text-[#a39e98]">
                {exp.company} · {exp.period} · {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-[16px] leading-[1.5] text-[#615d59]">
                    <span className="mt-[3px] shrink-0 text-[#a39e98]">·</span>
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
