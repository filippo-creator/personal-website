const hobbies = [
  {
    name: "Cycling",
    description:
      "Road and urban cycling. Volunteer at Ciclochard, a community cycling workshop in Milan.",
  },
  {
    name: "Running",
    description:
      "Regular runner. Half marathons and trail runs when the mountains are close enough.",
  },
  {
    name: "Outdoor Sports",
    description: "Hiking, skiing, anything that gets me outside and moving.",
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
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          Outside of Work
        </h2>

        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {hobbies.map((h) => (
            <div
              key={h.name}
              className="rounded-[12px] bg-notion-card p-6 shadow-notion-card"
              style={{ border: "1px solid var(--notion-border)" }}
            >
              <h3 className="mb-2 text-[16px] font-bold text-notion-ink">
                {h.name}
              </h3>
              <p className="text-[14px] leading-[1.5] text-notion-gray500">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
