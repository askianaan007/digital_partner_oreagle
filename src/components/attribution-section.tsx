"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";

const SOURCES = [
  "Google",
  "Ads",
  "Social",
  "Website",
  "Landing Pages",
  "Calls",
  "Bookings",
  "Completed Jobs",
  "Revenue",
];

const CHAIN = ["Source", "Tracked Lead", "Booking", "Completed Job", "Paid Revenue"];

const DASHBOARD = [
  { label: "Tracked Calls", value: 142, suffix: "", prefix: "" },
  { label: "Qualified Leads", value: 96, suffix: "", prefix: "" },
  { label: "Bookings", value: 61, suffix: "", prefix: "" },
  { label: "Completed Jobs", value: 54, suffix: "", prefix: "" },
  { label: "Revenue", value: 6480, suffix: "", prefix: "$" },
  { label: "Conversion Rate", value: 38, suffix: "%", prefix: "" },
];

export function AttributionSection() {
  return (
    <section id="attribution" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Attribution
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Every job needs a source.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            We don&apos;t simply count leads. We track where every job came
            from — end to end.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {SOURCES.map((source) => (
              <span
                key={source}
                className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-foreground/80"
              >
                {source}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-col items-stretch gap-2 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            {CHAIN.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:flex-col sm:items-center sm:gap-2">
                <div className="flex flex-1 items-center justify-center rounded-xl border border-accent/30 bg-background/40 px-4 py-3 text-center text-sm font-medium text-foreground sm:w-36">
                  {step}
                </div>
                {i < CHAIN.length - 1 && (
                  <span className="flex shrink-0 items-center justify-center text-muted">
                    <ArrowRight className="hidden size-4 sm:block" />
                    <ArrowDown className="size-4 sm:hidden" />
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Commission applies only to attributable, completed, paid jobs.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                Illustrative dashboard preview
              </p>
              <motion.span
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="size-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {DASHBOARD.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background/40 p-4"
                >
                  <p className="text-[11px] uppercase tracking-wide text-muted">
                    {stat.label}
                  </p>
                  <p className="font-display mt-1.5 text-lg font-semibold tabular-nums text-foreground">
                    {stat.prefix}
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} duration={1.4} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
