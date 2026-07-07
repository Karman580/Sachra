"use client";

import { Card, Container, Reveal, Section, SectionHeading } from "./ui";

const features = [
  {
    title: "Trust Engine",
    body: "Scores every agent action in real time against identity, history, and live risk signals — before it settles.",
    icon: "M12 3l7 4v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V7l7-4Zm-3 9 2 2 4-5",
  },
  {
    title: "Immutable Records",
    body: "Every ATR is cryptographically signed and tamper-evident. What happened can never be quietly rewritten.",
    icon: "M6 10V7a6 6 0 1 1 12 0v3m-14 0h16v10H4V10Zm8 4v3",
  },
  {
    title: "Behavior Graph",
    body: "Voyage AI embeddings map each agent's behavioral fingerprint, surfacing drift and anomalies instantly.",
    icon: "M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 8 4.5-6m3 0L18 17",
  },
  {
    title: "Compliance",
    body: "Regulator-ready audit trails with full authorization chains, policy states, and model provenance built in.",
    icon: "M7 3h8l4 4v14H7V3Zm2 8h6m-6 4h4M15 3v4h4",
  },
  {
    title: "Fraud Detection",
    body: "Detects compromised agents, replay attacks, and out-of-pattern transactions the moment they emerge.",
    icon: "M12 3 21 19H3L12 3Zm0 6v4m0 3v.01",
  },
  {
    title: "Settlement",
    body: "A verifiable clearing layer for agent-initiated payments — disputes resolve from the record, not from guesswork.",
    icon: "M4 8h16M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 8v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-6 6h3",
  },
  {
    title: "Policy Engine",
    body: "Declarative guardrails — spend limits, scopes, approval chains — enforced at execution time, not reviewed after.",
    icon: "M9 12l2 2 4-4m-3-7 7 4v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V7l7-4Z",
  },
  {
    title: "Agent Reputation",
    body: "Portable, provable trust scores that follow agents across organizations and platforms.",
    icon: "M12 3l2.5 5.1 5.5.8-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.5-.8L12 3Z",
  },
];

export function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="One platform. Every layer of agent trust."
          lede="From the first delegated action to cross-organization reputation, Sachra covers the full lifecycle of autonomous trust."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08}>
              <Card glow className="h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald/30 bg-forest-deep/60">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 stroke-emerald-bright"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {f.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
