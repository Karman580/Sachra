"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Section, SectionHeading } from "./ui";

const captured = [
  { label: "Agent Identity", icon: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0" },
  { label: "Human Authorization", icon: "M5 8l2.5 2.5L13 5M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" },
  { label: "Policy Constraints", icon: "M8 1.5 13.5 4v4c0 3.5-2.5 5.7-5.5 6.5C5 13.7 2.5 11.5 2.5 8V4L8 1.5Z" },
  { label: "Execution Trace", icon: "M2 8h3l2-4 2 8 2-4h3" },
  { label: "Tool Calls", icon: "M10 3.5a3 3 0 0 0-4 4L2.5 11a1.5 1.5 0 1 0 2.5 2.5L8.5 10a3 3 0 0 0 4-4L10.5 8 8 5.5 10 3.5Z" },
  { label: "Model Version", icon: "M8 2v3m0 6v3m6-6h-3M5 8H2m9.5-3.5L10 6M6 10l-1.5 1.5M11.5 11.5 10 10M6 6 4.5 4.5" },
  { label: "Risk Signals", icon: "M8 2 14.5 13.5h-13L8 2Zm0 4.5V10m0 1.5v.01" },
  { label: "Trust Score", icon: "M8 1.5l2 4 4.4.6-3.2 3.1.8 4.3L8 11.4l-4 2.1.8-4.3L1.6 6.1 6 5.5l2-4Z" },
  { label: "Cryptographic Signature", icon: "M4 7V5a4 4 0 1 1 8 0v2m-9 0h10v7H3V7Zm5 3v2" },
  { label: "Transaction Outcome", icon: "M14 8A6 6 0 1 1 8 2m3 1 3-1-1 3M5.5 8.5 7 10l3.5-3.5" },
  { label: "Compliance Metadata", icon: "M5 2h6l3 3v9H2V2h3Zm0 6h6M5 11h4" },
];

const enables = [
  "Real-time Trust",
  "Compliance",
  "Settlement",
  "Auditability",
  "Dispute Resolution",
  "Cross-Org Trust",
  "Behavior Analytics",
  "Fraud Detection",
  "Agent Reputation",
];

function AtrDocument() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink-2 shadow-2xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="font-mono text-xs text-faint">
          atr · MongoDB document
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-bright">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m2.5 6.5 2.5 2.5 4.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          verified
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-mist">
        <code>{`{
  "_id": "atr_9f2ka81mc03",
  "agent": {
    "id": "procurement-bot-4",
    "model": "gpt-5",
    "trust_score": 0.982
  },
  "authorization": {
    "delegated_by": "j.osei@acme.com",
    "limit_usd": 25000,
    "scope": ["vendor_payments"]
  },
  "action": {
    "type": "payment.execute",
    "amount_usd": 12400,
    "tool_calls": 3,
    "policy_checks": "7/7 passed"
  },
  "outcome": "settled",
  "signature": "ed25519:8c41…f0aa",
  "recorded_at": "2026-07-07T03:41:08Z"
}`}</code>
      </pre>
    </div>
  );
}

export function Solution() {
  return (
    <Section id="solution" className="relative">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-3xl -translate-x-1/2 rounded-full bg-forest/25 blur-[120px]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="The Solution"
          title={
            <>
              Meet the{" "}
              <span className="bg-gradient-to-r from-emerald-bright to-emerald bg-clip-text text-transparent">
                Agent Transaction Record
              </span>
            </>
          }
          lede="Sachra creates an immutable, cryptographically signed ATR for every autonomous AI action — a tamper-evident source of truth for what was authorized, what happened, and why."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <AtrDocument />
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-xl font-semibold tracking-tight">
                Every ATR captures
              </h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {captured.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-3 py-2.5 transition-colors duration-300 hover:border-emerald/40 hover:bg-surface-2"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4 shrink-0 stroke-emerald-bright"
                    fill="none"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d={c.icon} />
                  </svg>
                  <span className="text-[13px] font-medium text-cream">
                    {c.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="rounded-xl border border-line bg-surface/60 px-6 py-8">
            <p className="text-center font-mono text-xs tracking-widest text-faint uppercase">
              One record. Nine capabilities.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {enables.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-line-2 bg-ink-2 px-4 py-1.5 text-sm text-mist transition-colors hover:border-emerald/40 hover:text-cream"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
