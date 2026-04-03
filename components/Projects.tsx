import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
          Projects
        </h2>
        <p className="mb-10 text-sm text-slate-500">
          Nothing to show here yet — check back soon.
        </p>

        <a
          href="https://github.com/filippo-creator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          <Github size={15} />
          See my GitHub in the meantime
        </a>
      </div>
    </section>
  );
}
