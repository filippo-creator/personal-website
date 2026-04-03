export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Filippo Guastella. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
