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
    <section id="hobbies" className="border-t border-[rgba(240,240,250,0.08)] px-8 py-20 md:px-16">
      <p className="mb-16 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Outside of Work
      </p>

      <div className="max-w-3xl space-y-10">
        {hobbies.map((h) => (
          <div key={h.name}>
            <h3 className="mb-1 font-din text-base font-bold tracking-aerospace text-[#f0f0fa]">
              {h.name}
            </h3>
            <p className="font-din text-sm text-[rgba(240,240,250,0.65)]">{h.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
