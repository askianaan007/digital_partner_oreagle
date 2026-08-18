"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { HeroCanvasBackground } from "@/components/hero-canvas";

const HEADLINE_LINES = ["You run the business.", "We grow it online."];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const lineVariants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface HeroProps {
  startAnimation?: boolean;
}

export function Hero({ startAnimation = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-73px)] items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
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
          animate={{ opacity: startAnimation ? 0.15 : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[180px]"
        />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Performance Based Digital Growth Partner
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="font-display mt-8 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[4.5rem]">
          <motion.span
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "show" : "hidden"}
            className="block"
          >
            {HEADLINE_LINES.map((text, idx) => (
              <span key={text} className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineVariants}
                  className={idx === 1 ? "block text-accent font-semibold" : "block"}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        {/* Supporting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg md:text-xl"
        >
          You focus on delivering your service. We build and manage the digital system that gets you discovered and turns attention into customers.
        </motion.p>

        {/* Value Model Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-accent/90 backdrop-blur-xs sm:text-sm"
        >
          <ShieldCheck className="size-4 shrink-0 text-accent" />
          <span>No traditional upfront fee • Earned on attributable performance</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-7 py-4 text-sm font-semibold text-zinc-950 shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>See If We&apos;re a Fit</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-3.5" />
            </span>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/10"
          >
            See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
