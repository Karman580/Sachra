"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container, Reveal, Section } from "./ui";

function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: <Counter to={100} prefix="<" suffix="ms" />,
    label: "Trust decisions",
    detail: "p99 evaluation latency",
  },
  {
    value: <Counter to={40} suffix="M+" />,
    label: "Events per day",
    detail: "recorded and scored",
  },
  {
    value: <Counter to={99.99} decimals={2} suffix="%" />,
    label: "Availability",
    detail: "multi-region Atlas clusters",
  },
  {
    value: <Counter to={14} />,
    label: "Global regions",
    detail: "with data residency",
  },
];

export function Metrics() {
  return (
    <Section id="performance" className="border-y border-line bg-ink-2/40">
      <Container>
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="text-5xl font-semibold tracking-tight text-emerald-bright tabular-nums">
                {s.value}
              </p>
              <p className="mt-3 font-medium">{s.label}</p>
              <p className="mt-1 text-sm text-faint">{s.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
