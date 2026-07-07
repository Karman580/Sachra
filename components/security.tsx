"use client";

import { Card, Container, Reveal, Section, SectionHeading } from "./ui";

const items = [
  {
    title: "SOC 2 Ready",
    body: "Controls designed to SOC 2 Type II standards from day one, with continuous evidence collection.",
    icon: "M12 3l7 4v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V7l7-4Z",
  },
  {
    title: "End-to-End Encryption",
    body: "TLS 1.3 in transit, AES-256 at rest, and Queryable Encryption for fields that must never be exposed.",
    icon: "M6 10V7a6 6 0 1 1 12 0v3m-14 0h16v10H4V10Zm8 4v3",
  },
  {
    title: "Tamper Evidence",
    body: "Hash-chained, Ed25519-signed records. Any alteration is mathematically detectable.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Privacy by Design",
    body: "Data minimization, region-pinned residency, and customer-managed keys as defaults, not add-ons.",
    icon: "M12 4a8 8 0 0 0-8 8c0 1.9.7 3.7 1.8 5L12 12V4Zm0 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8",
  },
  {
    title: "Compliance Mapping",
    body: "ATRs carry the metadata auditors ask for — mapped to emerging AI governance frameworks.",
    icon: "M7 3h8l4 4v14H7V3Zm2 8h6m-6 4h4M15 3v4h4",
  },
];

export function Security() {
  return (
    <Section id="security">
      <Container>
        <SectionHeading
          eyebrow="Security"
          title="Built like the infrastructure it protects"
          lede="A trust layer has to be more trustworthy than everything above it. Security is the product, not a checkbox."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <Card className="h-full">
                <svg
                  viewBox="0 0 24 24"
                  className="mb-4 h-6 w-6 stroke-emerald-bright"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={s.icon} />
                </svg>
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">
                  {s.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
