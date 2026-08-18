"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, LineChart, Handshake, Cpu, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PRINCIPLES = [
  {
    number: "01",
    title: "Outcomes over deliverables",
    description: "We focus on what the system achieves, not simply what gets delivered.",
    icon: Target,
  },
  {
    number: "02",
    title: "Tracking over assumptions",
    description: "Every stage of the customer journey should be measurable — from acquisition to completed revenue.",
    icon: LineChart,
  },
  {
    number: "03",
    title: "Partnership over projects",
    description: "We stay involved in improving the system instead of handing over a website and walking away.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Systems over one-off work",
    description: "We build reusable processes that can continuously improve as your business grows.",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Business impact over vanity metrics",
    description: "Traffic and clicks matter only when they contribute to real customer outcomes.",
    icon: TrendingUp,
  },
];

export function WhyOreagle() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Centered Top Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Why OREAGLE
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              We don&apos;t just deliver digital assets. We build a system designed to produce measurable growth.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-300/90 sm:text-lg">
              A website is only one part of the equation. OREAGLE connects your digital presence, customer acquisition, tracking, and optimization into one system — with our incentives aligned to measurable business outcomes.
            </p>
          </Reveal>
        </div>

        {/* 5 Core Differentiators Cards Grid (3 in Top Row, 2 Centered in Bottom Row) */}
        <div className="mt-16 space-y-5">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPLES.slice(0, 3).map((p, i) => (
              <Reveal key={p.number} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/70 p-7 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-surface/90 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-xl border border-accent/20">
                        {p.number}
                      </span>
                      <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                        <p.icon className="size-5" />
                      </div>
                    </div>

                    <h3 className="font-display mt-6 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {PRINCIPLES.slice(3, 5).map((p, i) => (
              <Reveal key={p.number} delay={(i + 3) * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/70 p-7 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-surface/90 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-xl border border-accent/20">
                        {p.number}
                      </span>
                      <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                        <p.icon className="size-5" />
                      </div>
                    </div>

                    <h3 className="font-display mt-6 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Full-Width Bottom Strong Callout Banner */}
        <Reveal delay={0.25} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-r from-accent/20 via-surface/90 to-accent/10 p-8 sm:p-10 shadow-2xl backdrop-blur-xl text-center">
            {/* Ambient Golden Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/30 mb-4 shadow-md">
                <Sparkles className="size-6" />
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
                You don&apos;t need another website. You need a digital system that helps your business acquire customers — and gets better over time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
