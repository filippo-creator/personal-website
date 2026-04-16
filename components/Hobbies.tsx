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
      className="bg-[#f6f5f4] px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
          Outside of Work
        </h2>

        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {hobbies.map((h) => (
            <div
              key={h.name}
              className="rounded-[12px] bg-white p-6 shadow-notion-card"
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <h3 className="mb-2 text-[16px] font-bold text-[rgba(0,0,0,0.95)]">
                {h.name}
              </h3>
              <p className="text-[14px] leading-[1.5] text-[#615d59]">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
