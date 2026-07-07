"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeading } from "./ui";

const steps = [
  {
    n: "01",
    title: "Agent executes",
    body: "An AI agent initiates a purchase, API call, or workflow under delegated authority.",
  },
  {
    n: "02",
    title: "ATR generated",
    body: "Sachra captures identity, authorization, reasoning metadata, and tool calls into a signed record.",
  },
  {
    n: "03",
    title: "Trust Engine evaluates",
    body: "Policies, behavior embeddings, and risk signals score the action in under 100 milliseconds.",
  },
  {
    n: "04",
    title: "Decision + audit record",
    body: "The action settles or is blocked — and an immutable audit trail exists either way.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-line bg-ink-2/40">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From action to accountability in four steps"
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line */}
          <div
            className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-emerald/10 via-emerald/50 to-emerald/10 md:block"
            aria-hidden
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center md:text-left"
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald/40 bg-ink font-mono text-sm text-emerald-bright md:mx-0">
                {s.n}
              </div>
              <h3 className="mt-5 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
