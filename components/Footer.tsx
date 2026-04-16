export default function Footer() {
  return (
    <footer className="bg-[#f6f5f4] px-8 py-8 md:px-16" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[14px] text-[#a39e98]">
          © {new Date().getFullYear()} Filippo Guastella
        </p>
      </div>
    </footer>
  );
}
