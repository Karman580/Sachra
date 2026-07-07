"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui";

export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 2.5 27.5 9v14L16 29.5 4.5 23V9L16 2.5Z"
        stroke="url(#logo-g)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m10.5 16.5 4 4 7-8"
        stroke="#34d399"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="logo-g" x1="4" y1="4" x2="28" y2="28">
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#0c3b2e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#architecture", label: "Architecture" },
  { href: "#features", label: "Product" },
  { href: "#developers", label: "Developers" },
  { href: "#security", label: "Security" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8"
        aria-label="Main"
      >
        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-lg font-semibold tracking-tight">Sachra</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#developers" variant="ghost">
            Docs
          </Button>
          <Button href="#cta" variant="primary">
            Book Demo
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-cream" fill="none" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-mist hover:bg-surface hover:text-cream"
              >
                {l.label}
              </a>
            ))}
            <Button href="#cta" variant="primary" className="mt-3">
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
