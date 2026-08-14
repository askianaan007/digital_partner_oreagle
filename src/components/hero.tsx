"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GrowthMindMap } from "@/components/growth-mind-map";

const HEADLINE = ["Your business.", "Built to grow online."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const line = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_78%_45%,#121312_0%,#0d0e0e_55%,#080909_100%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute right-0 top-1/2 size-[42rem] -translate-y-1/2 rounded-full bg-accent blur-[160px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-10 lg:px-8">
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-widest text-accent"
          >
            Digital Growth Partner
          </motion.span>

          <h1 className="font-display mt-8 max-w-lg text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            <motion.span
              variants={container}
              initial="hidden"
              animate="show"
              className="block"
            >
              {HEADLINE.map((text) => (
                <span key={text} className="block overflow-hidden pb-1">
                  <motion.span variants={line} className="block">
                    {text}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-md text-lg text-muted"
          >
            We build, manage and optimize the digital systems that help
            businesses get discovered, generate leads, convert customers and
            grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Talk About Your Business
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 text-xs uppercase tracking-widest text-muted"
          >
            Build <span className="text-accent">•</span> Acquire{" "}
            <span className="text-accent">•</span> Convert{" "}
            <span className="text-accent">•</span> Optimize
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <GrowthMindMap />
        </motion.div>
      </div>
    </section>
  );
}
