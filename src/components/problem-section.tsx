"use client";

import { motion } from "framer-motion";
import { Search, MailX, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const THREE_PROBLEMS = [
  {
    number: "01",
    title: "Hard to Find",
    description: "Customers are searching, but your business is not consistently visible where they look.",
    icon: Search,
  },
  {
    number: "02",
    title: "Lost Enquiries",
    description: "Calls, forms and potential bookings can disappear without a structured conversion process.",
    icon: MailX,
  },
  {
    number: "03",
    title: "No Clear Attribution",
    description: "You may know you are spending money online, but not exactly which activity produced paying customers.",
    icon: HelpCircle,
  },
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
            Great service doesn&apos;t automatically bring customers.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            You can deliver excellent work and still struggle to consistently attract customers online.
          </p>
        </Reveal>

        {/* 3 Major Problem Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {THREE_PROBLEMS.map((prob, i) => (
            <Reveal key={prob.number} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/70 p-7 backdrop-blur-md transition-all hover:border-red-500/40 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold tracking-wider text-red-400 bg-red-950/40 px-3 py-1 rounded-xl border border-red-500/20">
                      {prob.number}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-red-400 border border-white/10">
                      <prob.icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="font-display mt-6 text-xl font-bold text-foreground group-hover:text-red-400 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                    {prob.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Finishing Gap Statement */}
        <Reveal delay={0.25} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-r from-accent/20 via-surface/90 to-accent/10 p-8 text-center backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="size-6 text-accent shrink-0" />
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">
                That&apos;s the gap OREAGLE solves.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
