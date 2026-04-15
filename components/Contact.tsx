import { Mail, Github, Linkedin } from "lucide-react";
import { contact } from "@/lib/data";

const socials = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[rgba(240,240,250,0.08)] px-8 py-20 md:px-16">
      <p className="mb-16 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Get in Touch
      </p>

      <p className="mb-10 max-w-md font-din text-sm leading-relaxed text-[rgba(240,240,250,0.65)]">
        Whether you want to collaborate, have a question, or just want to say
        hi — my inbox is open.
      </p>

      <a
        href={`mailto:${contact.email}`}
        className="mb-10 inline-flex items-center gap-3 rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-7 py-[18px] font-din text-xs font-bold tracking-mission text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)]"
      >
        <Mail size={14} />
        {contact.email}
      </a>

      <div className="flex gap-6">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-2 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)] transition-colors hover:text-[#f0f0fa]"
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
