"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur">
      <div className="flex items-center justify-between px-8 py-5 md:px-16">
        <Link
          href="/"
          className="font-din text-sm font-bold tracking-mission text-[#f0f0fa]"
        >
          Filippo Guastella
        </Link>

        {/* Desktop */}
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-din text-[13px] font-bold tracking-mission text-[rgba(240,240,250,0.65)] transition-colors hover:text-[#f0f0fa]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-[#f0f0fa] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-5 border-t border-[rgba(240,240,250,0.08)] px-8 py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-din text-[13px] font-bold tracking-mission text-[rgba(240,240,250,0.65)] hover:text-[#f0f0fa]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
