import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
          Projects
        </h2>

        <div
          className="max-w-3xl rounded-[12px] bg-white p-6 shadow-notion-card"
          style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        >
          <p className="mb-6 text-[16px] leading-[1.5] text-[#615d59]">
            Nothing to show here yet — check back soon.
          </p>
          <a
            href="https://github.com/filippo-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[4px] bg-[rgba(0,0,0,0.05)] px-4 py-2 text-[15px] font-semibold text-[rgba(0,0,0,0.95)] transition-colors hover:bg-[rgba(0,0,0,0.08)]"
          >
            <Github size={15} />
            See my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
