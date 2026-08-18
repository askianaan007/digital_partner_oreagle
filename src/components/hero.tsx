"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { HeroCanvasBackground } from "@/components/hero-canvas";

const PROCESS_STEPS = [
  "BUSINESS",
  "GET FOUND",
  "GET LEADS",
  "GET CUSTOMERS",
  "GROW",
];

interface HeroProps {
  startAnimation?: boolean;
}

export function Hero({ startAnimation = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-73px)] items-center justify-center overflow-hidden pt-24 pb-13 lg:pt-28 lg:pb-17"
    >
      {/* Ambient Lighting & Background Setup */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        {/* Subtle Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_40%,#14161b_0%,#0c0d10_60%,#08090b_100%)]" />

        {/* Unique 3D Hero Canvas Background */}
        <HeroCanvasBackground />

        {/* Soft Golden Volumetric Lighting Aura Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: startAnimation ? 0.12 : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[190px]"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Eyebrow, Headline, Subtext, Tags, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                PERFORMANCE-BASED CUSTOMER ACQUISITION
              </span>
            </motion.div>

            {/* Primary H1 Headline */}
            <h1 className="font-display mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                We turn your online presence into a{" "}
                <span className="block text-accent font-bold mt-1 sm:mt-2">
                  <span className="whitespace-nowrap">customer acquisition</span> system.
                </span>
              </motion.span>
            </h1>

            {/* Supporting Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg"
            >
              We build and manage the digital system that helps customers find your business, become leads, and turn into measurable revenue.
            </motion.p>

            {/* Short Sub-tag Line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-accent/90 backdrop-blur-xs"
            >
              <ShieldCheck className="size-4 shrink-0 text-accent" />
              <span>Website • Search • Leads • Tracking • Optimization</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#how-it-works"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-8 py-4 text-sm font-semibold text-zinc-950 shadow-xl shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>See How It Works</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/10"
              >
                See If We&apos;re a Fit
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: OREAGLE Mascot & 5-Step Customer Acquisition Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={startAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-b from-surface/90 via-black/85 to-surface/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
            >
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-accent/20 blur-3xl" />

              {/* OREAGLE Mascot Emblem Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/15 border border-accent/30 shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.png"
                      alt="OREAGLE Mascot"
                      className="h-7 w-auto brightness-0 invert opacity-100"
                    />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-foreground block">
                      OREAGLE Acquisition Engine
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5 mt-0.5">
                      <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                      Live Flow System
                    </span>
                  </div>
                </div>
              </div>

              {/* 5-Stage Animated Visual Customer Acquisition Journey */}
              <div className="mt-6 space-y-2.5">
                {PROCESS_STEPS.map((step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all ${idx === PROCESS_STEPS.length - 1
                      ? "border-accent/60 bg-accent/20 text-accent font-bold shadow-lg shadow-accent/10"
                      : "border-white/10 bg-black/40 text-zinc-200"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-bold text-accent">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-semibold tracking-wider uppercase">
                        {step}
                      </span>
                    </div>
                    <ArrowRight className={`size-3.5 ${idx === PROCESS_STEPS.length - 1 ? "text-accent" : "text-zinc-500"}`} />
                  </motion.div>
                ))}
              </div>

              {/* Visual Summary Badge */}
              <div className="mt-6 border-t border-white/10 pt-4 text-center">
                <p className="text-[11px] font-semibold text-zinc-400">
                  <span className="text-accent">Managed Digital System</span> • Discovery to Revenue
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
