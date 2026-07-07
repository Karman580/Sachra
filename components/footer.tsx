import { Logo } from "./navbar";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Trust Engine", href: "#features" },
      { label: "Agent Transaction Record", href: "#solution" },
      { label: "Architecture", href: "#architecture" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#developers" },
      { label: "REST API", href: "#developers" },
      { label: "Python SDK", href: "#developers" },
      { label: "TypeScript SDK", href: "#developers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@sachra.ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Trust Center", href: "#security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="font-semibold tracking-tight">Sachra</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              The trust infrastructure for autonomous AI. Every decision
              verified, auditable, accountable.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-faint transition-colors hover:text-cream"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Sachra, Inc. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-widest text-faint uppercase">
            Truth for the agentic economy
          </p>
        </div>
      </div>
    </footer>
  );
}
