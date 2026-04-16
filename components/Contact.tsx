import { Mail, Github, Linkedin } from "lucide-react";
import { contact } from "@/lib/data";

const socials = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#e9e8e4] px-8 py-16 md:px-16">
      <h2 className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Get in Touch
      </h2>

      <p className="mb-8 max-w-md font-sans text-sm leading-relaxed text-[#9b9a97]">
        Whether you want to collaborate, have a question, or just want to say
        hi — my inbox is open.
      </p>

      <a
        href={`mailto:${contact.email}`}
        className="mb-8 inline-flex items-center gap-2 rounded-md border border-[#e9e8e4] bg-[#f1f1ef] px-4 py-2 font-sans text-sm text-[#37352f] transition-colors hover:bg-[#e9e8e4]"
      >
        <Mail size={14} />
        {contact.email}
      </a>

      <div className="flex gap-5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-1.5 font-sans text-sm text-[#9b9a97] transition-colors hover:text-[#37352f]"
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
