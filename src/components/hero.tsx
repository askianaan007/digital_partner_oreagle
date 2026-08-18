"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { GrowthScene } from "@/components/growth-scene";

const HEADLINE_LINES = ["Your business.", "Built to grow", "online."];

const FLOW_STEPS = [
  "Website",
  "Visibility",
  "Leads",
  "Booking",
  "Attribution",
  "Growth",
];

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
      className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Ambient Lighting & Background Setup */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        {/* Subtle Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_75%_42%,#14161b_0%,#0c0d10_55%,#08090b_100%)]" />

        {/* Soft Golden Volumetric Lighting Aura behind 3D Scene */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: startAnimation ? 0.16 : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute right-0 top-1/2 size-[44rem] -translate-y-1/2 rounded-full bg-accent blur-[170px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.88fr_1fr] lg:gap-10 lg:px-8">
        {/* Left Column: Typography, Business Positioning & CTAs */}
        <div className="flex flex-col">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Performance-Based Digital Growth Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display mt-6 max-w-lg text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.65rem]">
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
                    className={idx === 2 ? "block text-accent" : "block"}
                  >
                    {text}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          {/* Supporting Text based on Master Business Context */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            You run your physical business. We build, manage, and optimize the
            complete digital customer-acquisition system that gets you discovered,
            generates leads, converts customers, and drives revenue.
          </motion.p>

          {/* Value Model Highlight Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-4 flex items-center gap-2 text-xs font-medium text-accent/90"
          >
            <ShieldCheck className="size-4 shrink-0 text-accent" />
            <span>No traditional upfront fee • Earned on attributable performance</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Talk About Your Business
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-xs transition-colors hover:border-accent/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See How It Works
            </a>
          </motion.div>

          {/* System Pipeline Journey Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 pt-4 border-t border-border/40"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted/90">
              {FLOW_STEPS.map((step, idx) => (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className={
                      idx === FLOW_STEPS.length - 1
                        ? "text-accent font-semibold"
                        : "text-foreground/90"
                    }
                  >
                    {step}
                  </span>
                  {idx < FLOW_STEPS.length - 1 && (
                    <ArrowRight className="size-3 text-accent/60" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium 3D Animated Growth System Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={startAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex justify-center lg:justify-end"
        >
          <GrowthScene />
        </motion.div>
      </div>
    </section>
  );
}
