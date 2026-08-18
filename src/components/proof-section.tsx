"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PILOT_STATUS = [
  { label: "Tracking", active: true },
  { label: "Attribution", active: true },
  { label: "Verification", active: true },
  { label: "Case Study", active: false },
];

const MEASURED_METRICS = [
  { name: "Leads", desc: "Tracked phone calls & enquiries" },
  { name: "Bookings", desc: "Confirmed service appointments" },
  { name: "Completed Customers", desc: "Delivered & paid customer jobs" },
  { name: "Attributable Revenue", desc: "Verified customer revenue" },
  { name: "Conversion Rate", desc: "Enquiry-to-customer ratio" },
  { name: "Verified Attribution", desc: "100% source confirmation" },
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
            We show results. We don&apos;t invent them.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE is currently building and testing its first customer-acquisition partnership. We&apos;re tracking the full journey — from first enquiry to completed, paid job — so we can publish verified performance data when the pilot is complete.
          </p>
        </Reveal>

        {/* Locked Pilot Case Study Panel */}
        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-surface/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            {/* Ambient Backlight */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/15 blur-3xl" />

            {/* Top Status Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-accent/20 text-accent border border-accent/30">
                  <Lock className="size-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    LIVE PILOT IN PROGRESS
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Initial Growth Partnership Test
                  </h3>
                </div>
              </div>

              {/* Status Indicators (● Tracking ● Attribution ● Verification ○ Case Study) */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-2.5">
                {PILOT_STATUS.map((status) => (
                  <div key={status.label} className="flex items-center gap-1.5 text-xs font-semibold">
                    <span
                      className={`size-2 rounded-full ${
                        status.active
                          ? "bg-accent shadow-sm shadow-accent/50 animate-pulse"
                          : "border border-zinc-600 bg-transparent"
                      }`}
                    />
                    <span className={status.active ? "text-accent" : "text-zinc-500"}>
                      {status.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Brand Statement */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-6">
              <p className="font-display text-lg font-bold text-foreground sm:text-xl">
                No inflated numbers. No made-up case studies. Just verified results.
              </p>
            </div>

            {/* Measured Metrics Grid */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Currently Being Measured & Verified:
              </span>
              <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {MEASURED_METRICS.map((metric) => (
                  <div
                    key={metric.name}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-surface/60 p-4"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{metric.name}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{metric.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Footnote */}
            <div className="mt-8 border-t border-white/10 pt-6 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="size-4 text-accent shrink-0" />
              <span>Verified results will replace this preview as the pilot progresses.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
