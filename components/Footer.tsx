export default function Footer() {
  return (
    <footer
      className="bg-notion-warm px-8 py-8 md:px-16"
      style={{ borderTop: "1px solid var(--notion-border)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[14px] text-notion-gray300">
          © {new Date().getFullYear()} Filippo Guastella
        </p>
      </div>
    </footer>
  );
}
