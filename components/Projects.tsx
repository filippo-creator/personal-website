import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "This very site — built with Next.js, Tailwind CSS, and deployed on Vercel. Open-source and easy to fork.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/filippoguastella/personal-website",
    live: "/",
  },
  {
    title: "Data Pipeline Tool",
    description:
      "A CLI for automating ETL pipelines with support for CSV, JSON, and API sources. Built with Python.",
    tags: ["Python", "Click", "Pandas"],
    github: "https://github.com/filippoguastella",
    live: null,
  },
  {
    title: "Side Project Alpha",
    description:
      "An experimental web app exploring real-time collaboration features using WebSockets and CRDT data structures.",
    tags: ["React", "Node.js", "WebSockets"],
    github: "https://github.com/filippoguastella",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-slate-900">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-slate-900">{p.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900"
                >
                  <Github size={13} /> GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900"
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
