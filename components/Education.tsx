import { GraduationCap, Stars, Atom } from "lucide-react";
import { education } from "@/lib/data";

const degreeIcons: Record<string, React.ElementType> = {
  MSc: Stars,
  BSc: Atom,
};

export default function Education() {
  return (
    <section
      id="education"
      className="bg-notion-bg px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 flex items-center gap-3 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          <GraduationCap size={36} />
          Education
        </h2>

        <div className="max-w-3xl space-y-5">
          {education.map((edu, i) => {
            const DegreeIcon = degreeIcons[edu.degree];
            return (
              <div
                key={i}
                className="rounded-[12px] bg-notion-card p-6 shadow-notion-card"
                style={{ border: "1px solid var(--notion-border)" }}
              >
                <h3 className="mb-1 flex items-center gap-2 text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-notion-ink">
                  {DegreeIcon && <DegreeIcon size={20} />}
                  {edu.degree} in {edu.field}
                </h3>
                <p className="mb-0.5 text-[16px] font-medium text-notion-ink">
                  {edu.university}
                </p>
                <p className="text-[14px] font-medium text-notion-gray300">
                  {edu.period} · {edu.location}
                </p>
                {edu.thesis && (
                  <>
                    <p className="mt-3 text-[14px] font-semibold text-notion-ink">{edu.thesis}</p>
                    <p className="mt-1 text-[13px] leading-[1.5] text-notion-gray500">{edu.thesisDescription}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
