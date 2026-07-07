"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Container, Reveal, Section, SectionHeading } from "./ui";

const K = ({ children }: { children: ReactNode }) => (
  <span className="text-emerald-bright">{children}</span>
);
const S = ({ children }: { children: ReactNode }) => (
  <span className="text-amber-200/90">{children}</span>
);
const C = ({ children }: { children: ReactNode }) => (
  <span className="text-faint">{children}</span>
);

const samples: { id: string; label: string; code: ReactNode }[] = [
  {
    id: "python",
    label: "Python",
    code: (
      <>
        <K>from</K> sachra <K>import</K> Sachra{"\n\n"}
        client = Sachra(api_key=os.environ[<S>&quot;SACHRA_API_KEY&quot;</S>]){"\n\n"}
        <C># Wrap any agent action in a verified transaction</C>{"\n"}
        <K>with</K> client.transaction(agent=<S>&quot;procurement-bot-4&quot;</S>) <K>as</K> atr:{"\n"}
        {"    "}result = agent.execute_payment(vendor, amount=<span className="text-cream">12_400</span>){"\n"}
        {"    "}atr.record(result){"\n\n"}
        <K>print</K>(atr.trust_score)  <C># 0.982 — evaluated in &lt;100ms</C>
      </>
    ),
  },
  {
    id: "typescript",
    label: "TypeScript",
    code: (
      <>
        <K>import</K> {"{ Sachra }"} <K>from</K> <S>&quot;@sachra/sdk&quot;</S>;{"\n\n"}
        <K>const</K> sachra = <K>new</K> Sachra({"{"} apiKey: process.env.SACHRA_API_KEY {"}"});{"\n\n"}
        <C>{"// Every action returns a signed, immutable ATR"}</C>{"\n"}
        <K>const</K> atr = <K>await</K> sachra.transactions.create({"{"}{"\n"}
        {"  "}agent: <S>&quot;procurement-bot-4&quot;</S>,{"\n"}
        {"  "}action: {"{"} type: <S>&quot;payment.execute&quot;</S>, amountUsd: <span className="text-cream">12400</span> {"}"},{"\n"}
        {"}"});{"\n\n"}
        console.log(atr.trustScore, atr.signature);
      </>
    ),
  },
  {
    id: "cli",
    label: "CLI",
    code: (
      <>
        <C># Inspect any agent&apos;s transaction history</C>{"\n"}
        <K>$</K> sachra atr list --agent procurement-bot-4 --since 24h{"\n\n"}
        <C># Verify a record&apos;s cryptographic integrity</C>{"\n"}
        <K>$</K> sachra atr verify atr_9f2ka81mc03{"\n"}
        <span className="text-emerald-bright">✓</span> signature valid · ed25519{"\n"}
        <span className="text-emerald-bright">✓</span> tamper check passed{"\n"}
        <span className="text-emerald-bright">✓</span> policy chain complete (7/7)
      </>
    ),
  },
];

const points = [
  {
    title: "REST API",
    body: "Predictable, versioned endpoints for every ATR operation.",
  },
  {
    title: "Native SDKs",
    body: "First-class Python and TypeScript clients with typed responses.",
  },
  {
    title: "Drop-in middleware",
    body: "Instrument LangGraph and LangChain agents in one line.",
  },
  {
    title: "Documentation",
    body: "Guides, references, and runnable examples for every surface.",
  },
];

export function Developers() {
  const [tab, setTab] = useState("python");
  const active = samples.find((s) => s.id === tab)!;

  return (
    <Section id="developers" className="border-y border-line bg-ink-2/40">
      <Container>
        <SectionHeading
          eyebrow="Developer Experience"
          title="Trust infrastructure that feels like a great API"
          lede="Integrate in an afternoon. Ship verified agents by the end of the week."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:items-start">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-line bg-ink-2 shadow-2xl">
              <div
                className="flex items-center gap-1 border-b border-line px-3 py-2"
                role="tablist"
                aria-label="SDK examples"
              >
                {samples.map((s) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={tab === s.id}
                    onClick={() => setTab(s.id)}
                    className={`rounded-md px-3.5 py-1.5 font-mono text-xs transition-colors ${
                      tab === s.id
                        ? "bg-surface-2 text-cream"
                        : "text-faint hover:text-mist"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <pre className="min-h-72 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-mist">
                <code>{active.code}</code>
              </pre>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-4 border-b border-line py-5 last:border-0">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-1 h-5 w-5 shrink-0 stroke-emerald-bright"
                    fill="none"
                    strokeWidth="1.5"
                    aria-hidden
                  >
                    <path d="m5 10.5 3.5 3.5L15 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-mist">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <a
                href="#cta"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-bright transition-colors hover:text-cream"
              >
                Read the documentation
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10m0 0L9 4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
