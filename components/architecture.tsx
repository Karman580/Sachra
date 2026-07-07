"use client";

import { Container, Reveal, Section, SectionHeading } from "./ui";

function Node({
  name,
  detail,
  accent = false,
}: {
  name: string;
  detail?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 text-center transition-all duration-300 hover:-translate-y-0.5 ${
        accent
          ? "border-emerald/40 bg-forest-deep/60 hover:shadow-[0_0_32px_-8px_rgba(16,185,129,0.4)]"
          : "border-line bg-surface hover:border-line-2"
      }`}
    >
      <p className="text-sm font-medium text-cream">{name}</p>
      {detail && <p className="mt-0.5 text-xs text-faint">{detail}</p>}
    </div>
  );
}

/* Animated dashed lines flowing between layers. */
function Flow({ down = true }: { down?: boolean }) {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <svg width="220" height="44" viewBox="0 0 220 44" fill="none">
        {[30, 110, 190].map((x, i) => (
          <line
            key={x}
            x1={x}
            y1={down ? 2 : 42}
            x2={x}
            y2={down ? 42 : 2}
            stroke="#10b981"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="animate-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

function Layer({
  label,
  sub,
  children,
  accent = false,
}: {
  label: string;
  sub: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        accent
          ? "border-emerald/30 bg-gradient-to-b from-forest-deep/50 to-surface/40"
          : "border-line bg-ink-2/60"
      }`}
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-mono text-xs tracking-widest text-emerald-bright uppercase">
          {label}
        </h3>
        <p className="text-xs text-faint">{sub}</p>
      </div>
      {children}
    </div>
  );
}

export function Architecture() {
  return (
    <Section id="architecture" className="bg-ink-2/40">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="Every autonomous action flows through the trust plane"
          lede="Agents act, Sachra records and evaluates, MongoDB Atlas stores and streams. One pipeline from delegation to settlement."
        />

        <Reveal className="mt-16">
          <div className="mx-auto max-w-4xl">
            <Layer label="Agent Layer" sub="Where autonomous actions originate">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Node name="AI Agents" detail="acting on delegation" />
                <Node name="LangGraph" detail="agent orchestration" />
                <Node name="LangChain" detail="tool execution" />
                <Node name="Enterprise APIs" detail="payments · workflows" />
              </div>
            </Layer>

            <Flow />

            <Layer
              label="Sachra Trust Plane"
              sub="Sub-100ms evaluation on every action"
              accent
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Node name="FastAPI Gateway" detail="ATR ingestion" accent />
                <Node name="Trust Engine" detail="real-time scoring" accent />
                <Node name="Policy Engine" detail="constraint checks" accent />
                <Node name="Voyage AI" detail="behavior embeddings" accent />
                <Node name="Kafka" detail="event backbone" accent />
                <Node name="Redis" detail="hot decision cache" accent />
              </div>
            </Layer>

            <Flow />

            <Layer label="MongoDB Atlas" sub="The system of record">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Node name="ATR Documents" detail="flexible schema" />
                <Node name="Vector Search" detail="behavior similarity" />
                <Node name="Atlas Search" detail="audit queries" />
                <Node name="Time Series" detail="agent telemetry" />
                <Node name="Change Streams" detail="live trust updates" />
                <Node name="Queryable Encryption" detail="protected fields" />
                <Node name="Multi-Region" detail="global clusters" />
                <Node name="Triggers" detail="automated response" />
              </div>
            </Layer>

            <p className="mt-6 text-center text-sm text-faint">
              Change Streams push trust-score updates back to the Trust Engine
              in real time — the loop closes in milliseconds.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
