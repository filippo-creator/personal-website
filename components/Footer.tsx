export default function Footer() {
  return (
    <footer className="border-t border-[#e9e8e4] px-8 py-6 md:px-16">
      <p className="font-sans text-xs text-[#9b9a97]">
        © {new Date().getFullYear()} Filippo Guastella
      </p>
    </footer>
  );
}
