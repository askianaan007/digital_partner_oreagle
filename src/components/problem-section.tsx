"use client";

import { motion } from "framer-motion";
import {
  EyeOff,
  MailX,
  TrendingDown,
  Users,
  HelpCircle,
  BarChart2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const COMMON_GAPS = [
  { icon: EyeOff, text: "Low online visibility" },
  { icon: MailX, text: "Missed enquiries" },
  { icon: TrendingDown, text: "Inconsistent leads" },
  { icon: Users, text: "Referral dependence" },
  { icon: HelpCircle, text: "No clear attribution" },
  { icon: AlertTriangle, text: "Unpredictable growth" },
  { icon: BarChart2, text: "Uncertainty in spend" },
  { icon: Sparkles, text: "No structured conversion" },
];

const WITHOUT_FLOW = ["Invisible", "Inconsistent", "Untracked", "Unpredictable"];
const WITH_FLOW = ["Discovered", "Captured", "Converted", "Measured", "Optimized"];

const WITHOUT_POINTS = [
  "Low online visibility across local search",
  "Missed customer enquiries & calls",
  "Inconsistent, unpredictable lead volume",
  "Heavy dependence on word-of-mouth alone",
  "No clear attribution of what generates revenue",
  "Unpredictable business growth & cashflow",
];

const WITH_POINTS = [
  "High local search visibility & digital presence",
  "Streamlined lead capture & enquiry routing",
  "Consistent flow of qualified customer leads",
  "Outsourced, full-funnel digital management",
  "100% measurable attribution on performance",
  "Predictable, scalable customer growth",
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            The Problem
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Great service doesn&apos;t guarantee growth.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            Your business can deliver excellent work and still struggle to consistently attract new customers.
          </p>
        </Reveal>

        {/* Common Gaps Grid */}
        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {COMMON_GAPS.map((point, i) => (
            <Reveal key={point.text} delay={(i % 4) * 0.08}>
              <div className="flex h-full items-center gap-3.5 rounded-xl border border-white/10 bg-surface/60 p-4 backdrop-blur-sm transition-colors hover:border-white/20">
                <point.icon className="size-4.5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground/90">{point.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Visual Side-by-Side Comparison: Without System vs With OREAGLE */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Column 1: WITHOUT A SYSTEM */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-red-500/20 bg-red-950/10 p-8 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2.5">
                  <XCircle className="size-5 text-red-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                    Without a System
                  </span>
                </div>

                {/* Progression Pipeline Flow */}
                <div className="mt-6 flex flex-wrap items-center gap-1.5 rounded-2xl border border-red-500/15 bg-black/40 px-4 py-3">
                  {WITHOUT_FLOW.map((step, idx) => (
                    <div key={step} className="flex items-center gap-1.5 text-xs font-medium text-red-300/80">
                      <span>{step}</span>
                      {idx < WITHOUT_FLOW.length - 1 && (
                        <ArrowRight className="size-3 text-red-500/50" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="mt-8 space-y-3.5">
                  {WITHOUT_POINTS.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red-400/60" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Column 2: WITH OREAGLE */}
          <Reveal delay={0.15}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-accent/40 bg-surface/80 p-8 shadow-2xl shadow-accent/10 backdrop-blur-md">
              {/* Subtle Ambient Gold Glow in Background */}
              <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/10 blur-3xl" />

              <div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    With OREAGLE
                  </span>
                </div>

                {/* Progression Pipeline Flow */}
                <div className="mt-6 flex flex-wrap items-center gap-1.5 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3">
                  {WITH_FLOW.map((step, idx) => (
                    <div key={step} className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                      <span>{step}</span>
                      {idx < WITH_FLOW.length - 1 && (
                        <ArrowRight className="size-3 text-accent/70" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs font-medium leading-relaxed text-zinc-300">
                  We build and manage the digital system that turns customer attention into measurable business outcomes.
                </p>

                {/* Bullet Points */}
                <div className="mt-6 space-y-3.5">
                  {WITH_POINTS.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm font-medium text-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Summary Banner */}
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs font-semibold text-accent">
                <span>Visibility</span>
                <ArrowRight className="size-3 text-accent/60" />
                <span>Leads</span>
                <ArrowRight className="size-3 text-accent/60" />
                <span>Customers</span>
                <ArrowRight className="size-3 text-accent/60" />
                <span>Measurable Growth</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
