const hobbies = [
  { emoji: "📚", name: "Reading", description: "Non-fiction, sci-fi, and the occasional philosophy deep-dive." },
  { emoji: "🏃", name: "Running", description: "Early morning runs — half marathons a couple times a year." },
  { emoji: "🎸", name: "Guitar", description: "Self-taught, mostly fingerpicking and classic rock." },
  { emoji: "✈️", name: "Travel", description: "Slow travel, local food, and getting comfortably lost." },
  { emoji: "🍳", name: "Cooking", description: "Italian classics and experimenting with fermentation." },
  { emoji: "🎲", name: "Board Games", description: "Strategy games and the occasional Catan argument." },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
          Outside of Work
        </h2>
        <p className="mb-10 text-sm text-slate-500">
          A few things that keep me grounded away from the keyboard.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h) => (
            <div
              key={h.name}
              className="flex gap-4 rounded-xl border border-slate-200 p-5"
            >
              <span className="text-2xl">{h.emoji}</span>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">{h.name}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
