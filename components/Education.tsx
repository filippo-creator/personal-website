import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-notion-bg px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          Education
        </h2>

        <div className="max-w-3xl space-y-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-[12px] bg-notion-card p-6 shadow-notion-card"
              style={{ border: "1px solid var(--notion-border)" }}
            >
              <h3 className="mb-1 text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-notion-ink">
                {edu.degree} in {edu.field}
              </h3>
              <p className="mb-0.5 text-[16px] font-medium text-notion-ink">
                {edu.university}
              </p>
              <p className="text-[14px] font-medium text-notion-gray300">
                {edu.period} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
