"use client";

import { Card, Container, Reveal, Section, SectionHeading } from "./ui";

const capabilities = [
  {
    name: "Document Model",
    role: "The natural shape of an ATR",
    body: "Every Agent Transaction Record is a rich, nested, evolving object. Flexible documents let ATRs grow new fields — new risk signals, new compliance metadata — without migrations.",
  },
  {
    name: "Vector Search",
    role: "Behavior lives beside the data",
    body: "Voyage AI behavior embeddings are stored and queried right alongside operational records. Anomaly detection is one query, not a pipeline to a separate vector database.",
  },
  {
    name: "Change Streams",
    role: "Trust updates in real time",
    body: "Every new ATR streams instantly to the Trust Engine, dashboards, and downstream consumers. Trust scores update the moment behavior changes.",
  },
  {
    name: "Time Series Collections",
    role: "Agent telemetry at scale",
    body: "Millions of agent heartbeats, latencies, and decision metrics stored efficiently and queried over any window — purpose-built for high-write telemetry.",
  },
  {
    name: "Queryable Encryption",
    role: "Secrets that stay secret",
    body: "Transaction amounts, counterparties, and identities remain encrypted even during queries. Sensitive fields are never exposed — not even to Sachra.",
  },
  {
    name: "Atlas Search",
    role: "Audits that take minutes",
    body: "Full-text search across billions of records means compliance teams reconstruct any incident with a query, not a data engineering project.",
  },
  {
    name: "Multi-Region Clusters",
    role: "Trust with data residency",
    body: "ATRs replicate globally with region-pinned storage, satisfying data-sovereignty requirements while keeping trust decisions local and fast.",
  },
  {
    name: "Triggers",
    role: "Automated response",
    body: "High-risk ATRs fire Atlas Triggers automatically — freezing an agent, escalating to a human, or opening a dispute without a single cron job.",
  },
];

export function MongoDeepDive() {
  return (
    <Section id="mongodb" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-4xl -translate-x-1/2 rounded-full bg-forest/30 blur-[140px]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Powered by MongoDB Atlas"
          title={
            <>
              Not just a database.
              <br />
              <span className="text-mist">An architectural advantage.</span>
            </>
          }
          lede="Sachra runs its entire operational core on MongoDB Atlas — one platform for documents, vectors, search, telemetry, and encryption, instead of five systems stitched together."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.08}>
              <Card glow className="h-full">
                <p className="font-mono text-[11px] tracking-widest text-emerald-bright uppercase">
                  {c.role}
                </p>
                <h3 className="mt-2 font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {c.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-lg text-mist">
            One flexible document per autonomous action, with vectors, search,
            streams, and encryption native to the same platform —{" "}
            <span className="text-cream">
              that is why Sachra is built on Atlas.
            </span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
