"use client";

import { Container, Reveal, Section, SectionHeading } from "./ui";

const failures = [
  "Exceed delegated authority",
  "Execute unauthorized payments",
  "Hallucinate actions that never should have happened",
  "Misuse enterprise tools and APIs",
  "Trigger fraudulent workflows",
  "Violate compliance rules",
];

const gaps = [
  {
    title: "Fraud systems",
    body: "Only understand human behavior. Agent traffic is invisible to models trained on human patterns.",
  },
  {
    title: "Audit systems",
    body: "Only reconstruct events after failures occur. By then, the loss has already happened.",
  },
  {
    title: "Payment systems",
    body: "Verify authorization, but cannot reconstruct AI intent, reasoning, or the policies in force.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              Today&rsquo;s systems trust humans.
              <br />
              <span className="text-mist">Tomorrow&rsquo;s must trust AI agents.</span>
            </>
          }
          lede="Autonomous agents are already purchasing, transacting, and approving on behalf of people and businesses — on rails that were never designed for software that decides."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Failure modes */}
          <Reveal>
            <h3 className="text-xl font-semibold tracking-tight">
              Left unverified, AI agents can:
            </h3>
            <ul className="mt-6 space-y-3.5">
              {failures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-mist">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-0.5 h-5 w-5 shrink-0 stroke-red-400/80"
                    fill="none"
                    strokeWidth="1.6"
                    aria-hidden
                  >
                    <circle cx="10" cy="10" r="8" />
                    <path d="M10 6v5m0 3v.01" strokeLinecap="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-emerald pl-4 text-lg text-cream">
              When it happens, no one can answer: what was the agent authorized
              to do — and what did it actually do?
            </p>
          </Reveal>

          {/* Incident log mock */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl border border-line bg-ink-2 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
                <span className="ml-3 font-mono text-xs text-faint">
                  incident-review.log
                </span>
              </div>
              <div className="space-y-2.5 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <p className="text-faint">
                  <span className="text-mist">03:41:07</span> agent
                  procurement-bot-4 initiated wire transfer
                </p>
                <p className="text-red-400">
                  03:41:08 amount $148,500.00 — exceeds delegated limit $25,000
                </p>
                <p className="text-faint">
                  <span className="text-mist">03:41:09</span> authorization
                  chain: <span className="text-amber-300">UNKNOWN</span>
                </p>
                <p className="text-faint">
                  <span className="text-mist">03:41:09</span> model version:{" "}
                  <span className="text-amber-300">UNRECORDED</span>
                </p>
                <p className="text-faint">
                  <span className="text-mist">03:41:09</span> active policies:{" "}
                  <span className="text-amber-300">UNRECOVERABLE</span>
                </p>
                <p className="text-faint">
                  <span className="text-mist">03:41:10</span> liable party:{" "}
                  <span className="text-red-400">UNRESOLVED</span>
                </p>
                <p className="pt-2 text-mist">
                  &gt; audit reconstruction failed — no transaction record
                  exists for this agent action_
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Systemic gaps */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {gaps.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-line bg-surface p-6">
                <h4 className="font-semibold">{g.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {g.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            There is no universal trust layer for autonomous AI.
            <br />
            <span className="bg-gradient-to-r from-emerald-bright to-emerald bg-clip-text text-transparent">
              Until now.
            </span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
