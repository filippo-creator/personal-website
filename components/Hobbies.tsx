import { Smile, Bike, PersonStanding } from "lucide-react";

const hobbies = [
  {
    name: "Cycling",
    icon: Bike,
    description:
      "Road and urban cycling. Volunteer at Ciclochard, a community cycling workshop in Milan.",
  },
  {
    name: "Running",
    icon: PersonStanding,
    description:
      "Regular runner. Half marathons and trail runs when the mountains are close enough.",
  },
  {
    name: "Outdoor Sports",
    icon: null,
    description: "",
  },
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="bg-notion-warm px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 flex items-center gap-3 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          <Smile size={36} />
          Outside of Work
        </h2>

        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {hobbies.map((h) => (
            <div
              key={h.name}
              className="rounded-[12px] bg-notion-card p-6 shadow-notion-card"
              style={{ border: "1px solid var(--notion-border)" }}
            >
              {h.icon && <h.icon size={22} className="mb-3 text-notion-gray300" />}
              <h3 className="mb-2 text-[16px] font-bold text-notion-ink">
                {h.name}
              </h3>
              {h.description && (
                <p className="text-[14px] leading-[1.5] text-notion-gray500">
                  {h.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
