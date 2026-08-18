"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cpu,
  Users,
  Target,
  UserCheck,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const JOURNEY_PIPELINE = [
  "YOUR BUSINESS",
  "DIGITAL SYSTEM",
  "DISCOVERY",
  "LEADS",
  "CUSTOMERS",
  "VERIFIED REVENUE",
  "OREAGLE EARNS",
];

const STEPS = [
  {
    number: "01",
    stepTag: "YOUR BUSINESS",
    icon: Building2,
    heading: "01 — You Run the Business",
    title: "You focus on delivering great service.",
    description: "Your team handles operations, service delivery, and customer fulfillment.",
    isClimax: false,
  },
  {
    number: "02",
    stepTag: "DIGITAL SYSTEM",
    icon: Cpu,
    heading: "02 — We Build the Growth System",
    title: "We build the digital infrastructure that brings customers to you.",
    description: "Website, booking or enquiry flow, local search, campaigns, and tracking — connected into one system.",
    isClimax: false,
  },
  {
    number: "03",
    stepTag: "DISCOVERY",
    icon: Users,
    heading: "03 — Customers Find You",
    title: "We put your business where customers are already looking.",
    description: "Search, maps, and targeted campaigns generate relevant traffic and enquiries.",
    isClimax: false,
  },
  {
    number: "04",
    stepTag: "LEADS",
    icon: Target,
    heading: "04 — Every Lead Is Tracked",
    title: "We know where each enquiry came from.",
    description: "Calls, forms, bookings, and campaigns are tracked back to their source.",
    isClimax: false,
  },
  {
    number: "05",
    stepTag: "CUSTOMERS",
    icon: UserCheck,
    heading: "05 — Leads Become Customers",
    title: "Qualified enquiries turn into real jobs and completed services.",
    description: "We track the customer journey from initial enquiry through completion.",
    isClimax: false,
  },
  {
    number: "06",
    stepTag: "VERIFIED REVENUE",
    icon: ShieldCheck,
    heading: "06 — Results Are Verified",
    title: "Completed revenue is confirmed against the tracking data.",
    description: "Only verified, attributable results are used to measure performance.",
    isClimax: false,
  },
  {
    number: "07",
    stepTag: "OREAGLE EARNS",
    icon: Award,
    heading: "07 — We Earn From the Result",
    title: "Our compensation is tied to verified performance.",
    description: "Instead of relying on traditional upfront fees, our model aligns our success with the measurable results we generate.",
    isClimax: true,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            How It Works
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One system. One measurable outcome.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            We connect your physical business to a measurable digital customer-acquisition system — from discovery to completed revenue.
          </p>
        </Reveal>

        {/* Horizontal Journey Pipeline Bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/80 p-3 backdrop-blur-md min-w-max">
              {JOURNEY_PIPELINE.map((stage, idx) => (
                <div key={stage} className="flex items-center gap-2">
                  <div
                    className={
                      idx === JOURNEY_PIPELINE.length - 1
                        ? "flex items-center gap-2 rounded-xl bg-accent/20 px-3.5 py-2 border border-accent/50 shadow-md shadow-accent/10"
                        : "flex items-center gap-2 rounded-xl bg-white/5 px-3.5 py-2 border border-white/10"
                    }
                  >
                    <span
                      className={
                        idx === JOURNEY_PIPELINE.length - 1
                          ? "text-xs font-bold tracking-wider text-accent uppercase"
                          : "text-[11px] font-semibold tracking-wider text-foreground/80 uppercase"
                      }
                    >
                      {stage}
                    </span>
                  </div>
                  {idx < JOURNEY_PIPELINE.length - 1 && (
                    <ArrowRight className="size-3.5 text-accent/60 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 7-Step Journey Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            if (step.isClimax) {
              return (
                /* Step 07: Visual Climax Card */
                <Reveal key={step.heading} delay={0.2} className="sm:col-span-2 lg:col-span-3">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="relative overflow-hidden rounded-3xl border-2 border-accent/60 bg-gradient-to-r from-accent/20 via-surface/90 to-accent/10 p-8 shadow-2xl shadow-accent/20 backdrop-blur-xl"
                  >
                    {/* Ambient Golden Climax Backlight */}
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl" />

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-3">
                          <span className="rounded-md border border-accent/40 bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent shadow-sm">
                            THE OUTCOME • STEP 07
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            {step.stepTag}
                          </span>
                        </div>

                        <h3 className="font-display mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                          {step.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/20 p-5 text-accent shadow-lg">
                        <step.icon className="size-10" />
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            }

            return (
              /* Steps 01 - 06 Cards */
              <Reveal key={step.heading} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-wider text-accent/80">
                        {step.number}
                      </span>
                      <div className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-accent border border-white/10">
                        <step.icon className="size-4.5" />
                      </div>
                    </div>

                    <span className="mt-4 block text-[10px] font-bold uppercase tracking-widest text-muted">
                      {step.stepTag}
                    </span>

                    <h3 className="font-display mt-2 text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-300/90">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
