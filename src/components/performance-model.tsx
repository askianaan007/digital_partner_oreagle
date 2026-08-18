"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, CheckCircle2, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CommissionCalculator } from "@/components/commission-calculator";

const TRADITIONAL_FLOW = [
  "Upfront fee",
  "Services",
  "Campaigns",
  "Reporting",
];

const OREAGLE_FLOW = [
  "Build system",
  "Generate customers",
  "Track source",
  "Completed job",
  "Verify revenue",
  "Performance-based compensation",
];

export function PerformanceModel() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <section id="performance-model" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Performance Model
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            You grow. We earn from measurable results.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            Our model is designed to align compensation with measurable customer acquisition.
          </p>
        </Reveal>

        {/* Traditional Model vs OREAGLE Model Comparison */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Traditional Model Flow */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2">
                  <Layers className="size-5 text-zinc-400" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Traditional Model
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {TRADITIONAL_FLOW.map((step, idx) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-zinc-300 font-medium">
                        {step}
                      </span>
                      {idx < TRADITIONAL_FLOW.length - 1 && (
                        <ArrowRight className="size-3 text-zinc-500 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* OREAGLE Model Flow */}
          <Reveal delay={0.15}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-accent/40 bg-surface/80 p-8 shadow-2xl backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    OREAGLE Model
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {OREAGLE_FLOW.map((step, idx) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent font-semibold">
                        {step}
                      </span>
                      {idx < OREAGLE_FLOW.length - 1 && (
                        <ArrowRight className="size-3 text-accent/60 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Supporting Line & Toggle Button */}
        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-3xl border border-white/10 bg-surface/70 p-7 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-accent shrink-0" />
              <p className="font-display text-base font-bold text-foreground sm:text-lg">
                Your success and our success should move in the same direction.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowCalculator((prev) => !prev)}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-6 py-3.5 text-xs font-bold text-accent transition-all hover:bg-accent hover:text-zinc-950 shadow-lg shadow-accent/10"
            >
              <span>{showCalculator ? "Hide Calculator" : "See How the Performance Model Works"}</span>
              <ChevronDown
                className={`size-4 transition-transform duration-300 ${
                  showCalculator ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </Reveal>

        {/* Progressive Disclosure: Interactive Commission Calculator */}
        <AnimatePresence>
          {showCalculator && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 overflow-hidden"
            >
              <CommissionCalculator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
