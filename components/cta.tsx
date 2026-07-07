"use client";

import { Button, Container, Reveal, Section } from "./ui";

export function Cta() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-130 w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest/40 blur-[140px]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Ready to build{" "}
            <span className="bg-gradient-to-r from-emerald-bright to-emerald bg-clip-text text-transparent">
              trusted AI?
            </span>
          </h2>
          <p className="mt-5 text-lg text-mist">
            The autonomous economy is arriving. Make sure every action your
            agents take is one you can stand behind.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="mailto:hello@sachra.ai?subject=Demo%20Request" variant="primary" className="px-7 py-3 text-base">
              Book Demo
            </Button>
            <Button href="mailto:sales@sachra.ai" variant="secondary" className="px-7 py-3 text-base">
              Contact Sales
            </Button>
            <Button href="mailto:hello@sachra.ai?subject=Waitlist" variant="ghost" className="px-7 py-3 text-base">
              Join Waitlist →
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
