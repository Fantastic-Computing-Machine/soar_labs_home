import billa from "../assets/images/billa.png";
const navLinks = [
  // { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 w-full max-w-5xl -translate-x-1/2 px-4">
      <div className="glass-panel relative flex flex-col gap-4 overflow-hidden rounded-3xl px-6 py-4 backdrop-blur-3xl sm:flex-row sm:items-center sm:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-white/15 blur-2xl sm:block" />
        <a
          href="#home"
          className="relative z-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-primary)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-alt-surface)] text-[color:var(--text-primary)] shadow-inner shadow-white/30">
            <img src={billa} alt="logo" className="h-5 w-5" />
          </span>
          <span>SOAR LABS</span>
        </a>

        <div className="relative z-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-5">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[color:var(--text-secondary)] sm:justify-end">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition-colors duration-200 hover:text-[color:var(--text-primary)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
