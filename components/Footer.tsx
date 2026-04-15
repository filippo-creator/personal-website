export default function Footer() {
  return (
    <footer className="border-t border-[rgba(240,240,250,0.08)] px-8 py-8 md:px-16">
      <p className="font-din text-[10px] tracking-mission text-[rgba(240,240,250,0.65)]">
        © {new Date().getFullYear()} Filippo Guastella
      </p>
    </footer>
  );
}
