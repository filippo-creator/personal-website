import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-[#e9e8e4] px-8 py-16 md:px-16">
      <h2 className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Education
      </h2>

      <div className="max-w-3xl space-y-10">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="mb-1 font-sans text-lg font-semibold text-[#37352f]">
              {edu.degree} in {edu.field}
            </h3>
            <p className="mb-0.5 font-sans text-sm text-[#37352f]">
              {edu.university}
            </p>
            <p className="font-sans text-sm text-[#9b9a97]">
              {edu.period} · {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
