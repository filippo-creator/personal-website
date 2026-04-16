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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e9e8e4]">
      <div className="flex items-center justify-between px-8 py-4 md:px-16">
        <Link
          href="/"
          className="font-sans text-sm font-semibold text-[#37352f]"
        >
          Filippo Guastella
        </Link>

        {/* Desktop */}
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-[#9b9a97] transition-colors hover:text-[#37352f]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-[#9b9a97] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-[#e9e8e4] px-8 py-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-[#9b9a97] hover:text-[#37352f]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
