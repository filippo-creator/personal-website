import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[rgba(240,240,250,0.08)] px-8 py-20 md:px-16">
      <p className="mb-16 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Projects
      </p>

      <p className="mb-10 max-w-md font-din text-sm text-[rgba(240,240,250,0.65)]">
        Nothing to show here yet — check back soon.
      </p>

      <a
        href="https://github.com/filippo-creator"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-7 py-[18px] font-din text-xs font-bold tracking-mission text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)]"
      >
        <Github size={14} />
        See my GitHub
      </a>
    </section>
  );
}
