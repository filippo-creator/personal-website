import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[#e9e8e4] px-8 py-16 md:px-16">
      <h2 className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Experience
      </h2>

      <div className="max-w-3xl space-y-12">
        {experiences.map((exp, i) => (
          <div key={i}>
            <h3 className="mb-1 font-sans text-lg font-semibold text-[#37352f]">
              {exp.role}
            </h3>
            <p className="mb-4 font-sans text-sm text-[#9b9a97]">
              {exp.company} · {exp.period} · {exp.location}
            </p>
            <ul className="space-y-2">
              {exp.bullets.map((b, j) => (
                <li
                  key={j}
                  className="border-l-2 border-[#e9e8e4] pl-4 font-sans text-sm text-[#9b9a97]"
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
