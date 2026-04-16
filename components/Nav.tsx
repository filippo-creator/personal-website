"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects",   label: "Projects" },
  { href: "/about",       label: "About" },
  { href: "/cv",          label: "CV" },
  { href: "/blog",        label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4 md:px-16">
        <Link
          href="/"
          className="text-[15px] font-semibold leading-tight text-[rgba(0,0,0,0.95)]"
        >
          Filippo Guastella
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-[#615d59] transition-colors hover:text-[rgba(0,0,0,0.95)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA — Notion Blue */}
        <Link
          href="/#contact"
          className="hidden rounded-[4px] bg-[#0075de] px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#005bab] active:scale-90 md:inline-flex"
        >
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          className="text-[rgba(0,0,0,0.95)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="flex flex-col gap-4 bg-white px-8 py-5 md:hidden"
          style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-[#615d59] hover:text-[rgba(0,0,0,0.95)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-1 w-fit rounded-[4px] bg-[#0075de] px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#005bab]"
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
