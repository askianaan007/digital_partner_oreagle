"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const FUTURE_METRICS = [
  "Leads",
  "Bookings",
  "Completed jobs",
  "Revenue",
  "Conversion",
  "Review growth",
];

export function ProofSection() {
  return (
    <section id="proof" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Proof
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Honesty is part of the brand.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-accent/30 bg-surface/60 p-8 sm:p-12">
            <div className="flex items-center gap-2.5">
              <motion.span
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="size-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Pilot in progress
              </span>
            </div>
            <p className="font-display mt-5 max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Our first NYC cleaning partnership is currently in pilot.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              We&apos;re building the system, tracking every lead, and
              measuring completed jobs before publishing the case study.
              We&apos;d rather show you real numbers late than invented
              numbers early.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {FUTURE_METRICS.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-dashed border-border px-3.5 py-1.5 text-xs text-muted"
                >
                  {metric}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Replaced with verified results once the pilot completes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
