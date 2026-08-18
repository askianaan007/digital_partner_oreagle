"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Activity } from "lucide-react";
import { Reveal } from "@/components/reveal";

const MEASURED_METRICS = [
  { label: "Leads", desc: "Form & web enquiries" },
  { label: "Calls", desc: "Tracked phone calls" },
  { label: "Bookings", desc: "Scheduled service jobs" },
  { label: "Completed Jobs", desc: "Delivered services" },
  { label: "Attributable Revenue", desc: "Verified paid revenue" },
  { label: "Conversion Rate", desc: "Enquiry to paid ratio" },
];

export function ProofSection() {
  return (
    <section id="proof" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Proof
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            We&apos;re building the proof — and tracking everything.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE is currently validating its first customer-acquisition partnership. We&apos;re measuring the journey from enquiry to completed paid work. Verified results will replace this section as the pilot progresses.
          </p>
        </Reveal>

        {/* Pilot Case Study Locked Panel */}
        <Reveal delay={0.15} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-surface/60 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
            {/* Status Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Pilot In Progress
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-400">
                <span className="flex items-center gap-1.5"><Activity className="size-3.5 text-accent" /> Tracking</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Activity className="size-3.5 text-accent" /> Attribution</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Activity className="size-3.5 text-accent" /> Verification</span>
              </div>
            </div>

            {/* 6 Metrics Grid */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Currently Being Measured:
                </span>
                <span className="text-[11px] font-semibold text-accent/90">
                  Live Attribution Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {MEASURED_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-4 transition-all hover:border-accent/40"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="size-2 rounded-full bg-accent/80" />
                        <Lock className="size-3.5 text-zinc-500" />
                      </div>
                      <h4 className="font-display mt-3 text-sm font-bold text-foreground">
                        {metric.label}
                      </h4>
                      <p className="mt-1 text-[11px] text-zinc-400">
                        {metric.desc}
                      </p>
                    </div>
                    <span className="mt-4 text-[10px] font-mono text-accent">
                      [ Measuring ]
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Note */}
            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="font-semibold text-accent">Verified results</span> will replace this preview as the pilot completes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
