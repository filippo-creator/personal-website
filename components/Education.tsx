import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
          Education
        </h2>

        <div className="max-w-3xl space-y-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-[12px] bg-white p-6 shadow-notion-card"
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <h3 className="mb-1 text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-[rgba(0,0,0,0.95)]">
                {edu.degree} in {edu.field}
              </h3>
              <p className="mb-0.5 text-[16px] font-medium text-[rgba(0,0,0,0.95)]">
                {edu.university}
              </p>
              <p className="text-[14px] font-medium text-[#a39e98]">
                {edu.period} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
