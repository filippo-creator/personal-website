import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[rgba(240,240,250,0.08)] px-8 py-20 md:px-16">
      <p className="mb-16 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Experience
      </p>

      <div className="max-w-3xl space-y-14">
        {experiences.map((exp, i) => (
          <div key={i}>
            <h3 className="mb-1 font-din text-xl font-bold tracking-aerospace text-[#f0f0fa]">
              {exp.role}
            </h3>
            <p className="mb-5 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
              {exp.company} — {exp.period} — {exp.location}
            </p>
            <ul className="space-y-2">
              {exp.bullets.map((b, j) => (
                <li
                  key={j}
                  className="border-l border-[rgba(240,240,250,0.2)] pl-4 font-din text-sm text-[rgba(240,240,250,0.65)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
