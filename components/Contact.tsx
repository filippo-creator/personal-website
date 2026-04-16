import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

const socials = [
  { label: "GitHub",   href: contact.github,   icon: Github   },
  { label: "LinkedIn", href: contact.linkedin,  icon: Linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-notion-bg px-8 py-20 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-6 flex items-center gap-3 text-[48px] font-bold leading-none tracking-[-1.5px] text-notion-ink">
          <MessageCircle size={36} />
          Get in Touch
        </h2>

        <p className="mb-10 max-w-md text-[20px] font-semibold leading-[1.40] tracking-[-0.125px] text-notion-gray500">
          Whether you want to collaborate, have a question, or just want to say
          hi — my inbox is open.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mb-8 inline-flex items-center gap-2 rounded-[4px] bg-notion-blue px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-notion-blue-deep active:scale-90"
        >
          <Mail size={15} />
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
              className="flex items-center gap-1.5 text-[15px] font-medium text-notion-gray500 transition-colors hover:text-notion-ink"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
