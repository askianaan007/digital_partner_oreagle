"use client";

import { motion } from "framer-motion";
import { X, Check, ShieldCheck, Handshake } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TRADITIONAL = [
  "Upfront project fees",
  "Monthly retainers",
  "Pay regardless of outcome",
  "Multiple disconnected providers",
  "Deliverables over outcomes",
];

const OREAGLE_MODEL = [
  "Performance-based compensation",
  "One integrated digital partner",
  "Tracked customer acquisition",
  "Completed-job focus",
  "Aligned incentives",
];

export function NoUpfrontRisk() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Performance-Based Partnership
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our success is tied to yours.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            Traditional agencies are typically paid upfront or through recurring retainers. OREAGLE&apos;s model ties compensation to measurable, attributable business outcomes.
          </p>
        </Reveal>

        {/* Side-by-Side Comparison: Traditional Agency vs OREAGLE */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Traditional Agency */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Traditional Agency
                </span>

                <ul className="mt-6 space-y-4">
                  {TRADITIONAL.map((item) => (
                    <li key={item} className="flex items-center gap-3.5 text-sm text-zinc-400">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-500 border border-white/10">
                        <X className="size-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* OREAGLE Model (Highlighted Gold Card) */}
          <Reveal delay={0.15}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-accent/40 bg-surface/80 p-8 shadow-2xl shadow-accent/10 backdrop-blur-md">
              {/* Subtle Ambient Gold Glow in Background */}
              <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/10 blur-3xl" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    OREAGLE
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/20 px-3 py-1 text-[10px] font-bold text-accent">
                    <Handshake className="size-3" />
                    Aligned Model
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  {OREAGLE_MODEL.map((item) => (
                    <li key={item} className="flex items-center gap-3.5 text-sm font-semibold text-foreground">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-zinc-950 shadow-md">
                        <Check className="size-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Strong Closing Callout Banner */}
        <Reveal delay={0.2} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/15 via-surface/90 to-accent/10 p-8 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 shrink-0 text-accent" />
                <p className="font-display text-base font-bold text-foreground sm:text-lg">
                  You focus on delivering great service. We focus on building the system that brings customers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Commercial Terms Footnote */}
        <Reveal delay={0.25} className="mt-5 text-center sm:text-left">
          <p className="text-xs text-zinc-400">
            Commercial terms and eligibility are subject to the final partnership agreement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
