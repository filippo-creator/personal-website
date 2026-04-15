import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-[rgba(240,240,250,0.08)] px-8 py-20 md:px-16">
      <p className="mb-16 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Education
      </p>

      <div className="max-w-3xl space-y-12">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="mb-1 font-din text-xl font-bold tracking-aerospace text-[#f0f0fa]">
              {edu.degree} in {edu.field}
            </h3>
            <p className="mb-1 font-din text-sm text-[rgba(240,240,250,0.65)]">
              {edu.university}
            </p>
            <p className="font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
              {edu.period} — {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
