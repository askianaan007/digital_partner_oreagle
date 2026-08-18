"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const JOURNEY_STEPS = [
  "Customer Enquiry",
  "Booking",
  "Completed Job",
  "Verified Revenue",
  "Published Result",
];

const FUTURE_METRICS = [
  "Customers generated",
  "Completed jobs",
  "Attributed revenue",
  "Conversion rate",
];

export function ProofSection() {
  return (
    <section id="proof" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-0">
        {/* 1. SECTION HEADING */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Proof
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            We&apos;re building the proof — honestly.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE is currently validating its first customer-acquisition partnership. We&apos;re tracking the journey from customer enquiry to completed paid work. Verified results will be published as the pilot progresses.
          </p>
        </Reveal>

        {/* 4. MAIN STATUS CARD */}
        <Reveal delay={0.15} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface/70 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {/* Status Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Pilot In Progress
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Pilot currently in progress
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              We&apos;re collecting and verifying real customer-acquisition data. Once the results are verified, this section will show the actual numbers.
            </p>

            {/* 3. SIMPLE PROGRESS STORY FLOW */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-4">
                Full Journey Being Measured:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {JOURNEY_STEPS.map((step, idx) => (
                  <div key={step} className="flex flex-col sm:flex-row items-center gap-2">
                    <div className="flex-1 w-full rounded-2xl border border-white/10 bg-black/40 p-3 text-left transition-all hover:border-accent/40">
                      <span className="text-[10px] font-mono font-bold text-accent block">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-zinc-200 mt-0.5 block">
                        {step}
                      </span>
                    </div>
                    {idx < JOURNEY_STEPS.length - 1 && (
                      <ArrowRight className="size-3.5 text-accent/60 shrink-0 rotate-90 sm:rotate-0 my-1 sm:my-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. FUTURE VERIFIED METRICS PREVIEW */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-4">
                When Verified, We&apos;ll Show:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FUTURE_METRICS.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5"
                  >
                    <CheckCircle2 className="size-4 text-accent shrink-0" />
                    <span className="text-xs font-medium text-zinc-200">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 6. TRUST MESSAGE (Centered) */}
        <Reveal delay={0.25} className="mt-10 text-center">
          <p className="font-display text-base sm:text-lg font-semibold text-zinc-300 drop-shadow">
            &ldquo;No fabricated case studies. No invented ROI. Just verified results.&rdquo;
          </p>
        </Reveal>

        {/* 7. SECTION CTA (Centered) */}
        <Reveal delay={0.3} className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs sm:text-sm font-medium text-zinc-400">
              Want to be part of the next proof?
            </span>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 shadow-xl shadow-accent/20 transition-all hover:bg-white hover:scale-105 active:scale-95"
            >
              <span>See If We&apos;re a Fit</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
