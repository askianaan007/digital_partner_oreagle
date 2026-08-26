"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const HOW_WE_WORK_STAGES = [
  {
    step: "01",
    tag: "BUILD",
    title: "Your Digital Foundation",
    description: "We build the digital infrastructure your business needs to be discovered, trusted, and contacted.",
    icon: Wrench,
    items: ["Website", "SEO", "Social Presence", "Lead Systems"],
    isHighlight: false,
  },
  {
    step: "02",
    tag: "MANAGE",
    title: "Your Customer Acquisition",
    description: "We continuously manage the channels and systems that turn online attention into customer enquiries.",
    icon: RefreshCw,
    items: ["Search", "Content", "Conversion", "Tracking"],
    isHighlight: false,
  },
  {
    step: "03",
    tag: "GENERATE",
    title: "Real Business",
    description: "Our system is built to generate real enquiries, quote requests, calls, and booked jobs for your business.",
    icon: TrendingUp,
    items: ["Enquiries", "Quotes", "Bookings", "Customers"],
    isHighlight: false,
  },
  {
    step: "04",
    tag: "SHARE",
    title: "Performance-Based",
    description: "Our incentives are aligned: when our work generates business, we share in the result.",
    icon: ShieldCheck,
    items: ["Shared Growth", "Transparent Attribution", "Zero Upfront Fee"],
    isHighlight: true,
  },
];

export function WhatWeManage() {
  return (
    <section id="how-we-work" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Positioning Header */}
        <Reveal className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="size-3.5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              HOW WE WORK
            </span>
          </div>

          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            We build it. We manage it. <span className="text-accent block sm:inline">You pay for results.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-300/90 sm:text-lg max-w-2xl">
            No upfront fee for the digital work we take on. We build and manage the system, then earn a percentage of the business directly generated through our work.
          </p>
        </Reveal>

        {/* Pipeline Step Progression Bar Header */}
        <Reveal delay={0.1} className="mt-12 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-md min-w-max mx-auto shadow-inner">
            {HOW_WE_WORK_STAGES.map((stage, idx) => (
              <div key={stage.step} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${
                  stage.isHighlight
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                    : "border-accent/30 bg-accent/10 text-accent"
                }`}>
                  <span className="text-xs font-mono font-bold">{stage.step}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">{stage.tag}</span>
                </div>
                {idx < HOW_WE_WORK_STAGES.length - 1 && (
                  <ArrowRight className="size-3.5 text-accent/60 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* 4 Visual Business Model Stage Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_WORK_STAGES.map((stage, i) => (
            <Reveal key={stage.step} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative flex h-full flex-col justify-between rounded-3xl border p-6 backdrop-blur-xl transition-all shadow-xl ${
                  stage.isHighlight
                    ? "border-emerald-500/40 bg-gradient-to-b from-emerald-950/30 via-[#12141a]/90 to-[#0b0c0f]/95 shadow-emerald-950/20 hover:border-emerald-400"
                    : "border-white/10 bg-[#12141a]/80 hover:border-accent/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${
                      stage.isHighlight
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-accent/30 bg-accent/10 text-accent"
                    }`}>
                      {stage.step} — {stage.tag}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                      <stage.icon className={`size-4.5 ${stage.isHighlight ? "text-emerald-400" : "text-accent"}`} />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {stage.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                        <CheckCircle2 className={`size-3.5 shrink-0 ${stage.isHighlight ? "text-emerald-400" : "text-accent"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Defensible Guarantee Badge */}
        <Reveal delay={0.45} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-md shadow-lg">
            <Sparkles className="size-4 text-accent shrink-0" />
            <span>No traditional monthly retainer. Our compensation is tied to the business we generate.</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
