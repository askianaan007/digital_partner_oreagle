"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Check,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const ROTATING_EXAMPLES = [
  { query: "house cleaning near me", business: "Sparkle Clean NYC" },
  { query: "plumber near me", business: "PrimeFlow Plumbing" },
  { query: "AC repair near me", business: "MetroAir HVAC" },
  { query: "landscaper near me", business: "GreenLine Landscaping" },
  { query: "car detailing near me", business: "Blackline Auto Detail" },
];

export function ProblemSection() {
  const [exampleIdx, setExampleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExampleIdx((prev) => (prev + 1) % ROTATING_EXAMPLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentExample = ROTATING_EXAMPLES[exampleIdx];

  return (
    <section id="problem" className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        <div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 backdrop-blur-md">
            <AlertCircle className="size-3.5 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              THE PROBLEM
            </span>
          </div>

          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            Being good at what you do <span className="text-red-400 block sm:inline">isn&apos;t enough.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-300/90 sm:text-lg max-w-2xl">
            Customers need to find you, trust you, and take action. Without the right digital system, good businesses lose opportunities every day.
          </p>
        </Reveal>

        {/* Connected Mental Model Header */}
        <Reveal delay={0.1} className="mt-10">
          <div className="hidden md:flex items-center justify-center gap-8 max-w-3xl mx-auto text-xs font-medium text-zinc-400 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-accent font-bold">01</span>
              <span>Search Discovery</span>
            </div>
            <ArrowRight className="size-3 text-zinc-600" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-accent font-bold">02</span>
              <span>Enquiry Conversion</span>
            </div>
            <ArrowRight className="size-3 text-zinc-600" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400 font-bold">03</span>
              <span>Revenue Visibility</span>
            </div>
          </div>
        </Reveal>

        {/* 3 Visual Problem Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* CARD 01: SEARCH DISCOVERY -> HARD TO FIND */}
          <Reveal delay={0.15} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12141a]/80 p-6 backdrop-blur-xl transition-all hover:border-accent/40 shadow-xl"
            >
              <div>
                {/* Visual SERP Mockup Header */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner min-h-[140px] flex flex-col justify-between">
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-zinc-300 border border-white/10">
                    <Search className="size-3.5 text-accent" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentExample.query}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.25 }}
                        className="font-mono text-[11px] truncate text-zinc-200"
                      >
                        {currentExample.query}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div className="mt-2.5 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1 text-zinc-400">
                      <span>Other Business</span>
                      <Check className="size-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1 text-zinc-400">
                      <span>Other Business</span>
                      <Check className="size-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-red-500/30 bg-red-500/10 px-2 py-1 text-red-300 font-semibold">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentExample.business}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentExample.business}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-[10px] font-bold text-red-400">Not Visible</span>
                    </div>
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                    01 — SEARCH DISCOVERY
                  </span>
                </div>

                <h3 className="font-display mt-4 text-xl font-bold text-foreground">
                  HARD TO FIND
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  Customers are searching for services like yours, but your business isn&apos;t consistently visible where they look.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* CARD 02: ENQUIRY CONVERSION -> MISSED OPPORTUNITIES */}
          <Reveal delay={0.25} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12141a]/80 p-6 backdrop-blur-xl transition-all hover:border-accent/40 shadow-xl"
            >
              <div>
                {/* Visual Unanswered Inquiry Card */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner min-h-[140px] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[11px] font-bold text-zinc-200 uppercase tracking-wider">
                      NEW INQUIRY
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">10:42 AM</span>
                  </div>

                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
                    <p className="text-xs text-zinc-200 font-medium">
                      Customer requested a quote
                    </p>
                    <div className="mt-2 flex items-center justify-between pt-2 border-t border-red-500/20">
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                        <AlertCircle className="size-3" />
                        UNANSWERED / LOST
                      </span>
                      <span className="text-[10px] font-semibold text-zinc-400">No conversion</span>
                    </div>
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                    02 — ENQUIRY CONVERSION
                  </span>
                </div>

                <h3 className="font-display mt-4 text-xl font-bold text-foreground">
                  MISSED OPPORTUNITIES
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  People visit, call, or enquire — but too many potential customers leave without taking the next step.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* CARD 03: REVENUE VISIBILITY -> UNCLEAR RESULTS */}
          <Reveal delay={0.35} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12141a]/80 p-6 backdrop-blur-xl transition-all hover:border-emerald-500/40 shadow-xl"
            >
              <div>
                {/* Visual Analytics Spend Flow */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner min-h-[140px] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs pb-1.5 border-b border-white/10">
                    <span className="font-semibold text-zinc-200">$2,000 Spent Online</span>
                    <TrendingDown className="size-3.5 text-red-400" />
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-center mt-2.5">
                    <div className="rounded-lg bg-white/5 p-2">
                      <span className="block text-[10px] text-zinc-400">Leads</span>
                      <span className="text-xs font-bold text-zinc-200">34</span>
                    </div>
                    <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-2 text-red-300">
                      <span className="block text-[10px] text-red-400">Customers</span>
                      <span className="text-xs font-bold text-red-400">?</span>
                    </div>
                    <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-2 text-red-300">
                      <span className="block text-[10px] text-red-400">Revenue</span>
                      <span className="text-xs font-bold text-red-400">?</span>
                    </div>
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    03 — REVENUE VISIBILITY
                  </span>
                </div>

                <h3 className="font-display mt-4 text-xl font-bold text-foreground">
                  UNCLEAR RESULTS
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  You may be investing time and money online without knowing what actually turns into customers.
                </p>
              </div>
            </motion.div>
          </Reveal>

        </div>

        {/* REFINED SOLUTION BRIDGE CARD WITH NUMBERED JOURNEY STEPS */}
        <Reveal delay={0.45} className="mt-14 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/10 via-surface to-accent/10 p-7 backdrop-blur-xl shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3">
              <Sparkles className="size-3.5" />
              <span>THESE PROBLEMS ARE CONNECTED</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground max-w-xl mx-auto leading-snug">
              We connect the entire customer journey.
            </h3>

            {/* Micro 4-Step Numbered Journey Flow (01 Search -> 02 Enquiry -> 03 Customer -> 04 Revenue) */}
            <div className="my-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              <div className="flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/15 px-3 py-1.5 text-accent shadow-sm">
                <span className="font-mono font-bold text-[10px] text-accent/80">01</span>
                <span>Search</span>
              </div>
              <ArrowRight className="size-3 text-accent/60" />
              <div className="flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/15 px-3 py-1.5 text-accent shadow-sm">
                <span className="font-mono font-bold text-[10px] text-accent/80">02</span>
                <span>Enquiry</span>
              </div>
              <ArrowRight className="size-3 text-accent/60" />
              <div className="flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/15 px-3 py-1.5 text-accent shadow-sm">
                <span className="font-mono font-bold text-[10px] text-accent/80">03</span>
                <span>Customer</span>
              </div>
              <ArrowRight className="size-3 text-accent/60" />
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 text-emerald-400 shadow-sm font-bold">
                <span className="font-mono font-bold text-[10px] text-emerald-400/80">04</span>
                <span>Revenue</span>
              </div>
            </div>

            <p className="text-sm text-zinc-300/90 max-w-lg mx-auto leading-relaxed">
              From being found online to becoming a paying customer, we manage the digital journey in between.
            </p>

            <div className="mt-6">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-xl shadow-accent/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>See How It Works</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
