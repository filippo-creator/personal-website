import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#e9e8e4] px-8 py-16 md:px-16">
      <h2 className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Projects
      </h2>

      <p className="mb-8 max-w-md font-sans text-sm text-[#9b9a97]">
        Nothing to show here yet — check back soon.
      </p>

      <a
        href="https://github.com/filippo-creator"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-[#e9e8e4] bg-[#f1f1ef] px-4 py-2 font-sans text-sm text-[#37352f] transition-colors hover:bg-[#e9e8e4]"
      >
        <Github size={14} />
        See my GitHub
      </a>
    </section>
  );
}
