import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/filippoguastella",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/filippoguastella",
    icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/filippoguastella",
    icon: Twitter,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
          Get in Touch
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-600">
          Whether you want to collaborate, have a question, or just want to say
          hi — my inbox is open.
        </p>

        <a
          href="mailto:hello@filippoguastella.com"
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          <Mail size={15} />
          hello@filippoguastella.com
        </a>

        <div className="flex gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
