import { Github, FolderKanban } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-notion-bg px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 flex items-center gap-3 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          <FolderKanban size={36} />
          Projects
        </h2>

        <div
          className="max-w-3xl rounded-[12px] bg-notion-card p-6 shadow-notion-card"
          style={{ border: "1px solid var(--notion-border)" }}
        >
          <p className="mb-6 text-[16px] leading-[1.5] text-notion-gray500">
            Nothing to show here yet — check back soon.
          </p>
          <a
            href="https://github.com/filippo-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[4px] bg-notion-ghost px-4 py-2 text-[15px] font-semibold text-notion-ink transition-colors hover:bg-notion-ghost-hover"
          >
            <Github size={15} />
            See my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
