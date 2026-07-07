"use client";

import { Container, Reveal } from "./ui";

/* Placeholder partner marks rendered as typographic logos. */
const partners = [
  "Meridian Bank",
  "MongoDB",
  "Y Combinator",
  "Halcyon AI",
  "Northwind Global",
  "Vertex Systems",
  "Aster Financial",
];

export function Logos() {
  return (
    <section className="border-y border-line bg-ink-2 py-14">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-xs tracking-widest text-faint uppercase">
            Trusted by teams building the agentic economy
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((name) => (
              <span
                key={name}
                className="text-base font-semibold tracking-wide text-faint/80 transition-colors duration-300 hover:text-mist select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
