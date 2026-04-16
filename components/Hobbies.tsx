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
    <section id="hobbies" className="border-t border-[#e9e8e4] px-8 py-16 md:px-16">
      <h2 className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Outside of Work
      </h2>

      <div className="max-w-3xl space-y-8">
        {hobbies.map((h) => (
          <div key={h.name}>
            <h3 className="mb-1 font-sans text-base font-semibold text-[#37352f]">
              {h.name}
            </h3>
            <p className="font-sans text-sm text-[#9b9a97]">{h.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
