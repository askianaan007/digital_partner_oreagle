"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Eye,
  PhoneCall,
  UserCheck,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const CORE_SYSTEM_STEPS = [
  {
    step: "01",
    title: "Your Business",
    subtitle: "You deliver the service.",
    icon: Building2,
  },
  {
    step: "02",
    title: "Digital Presence",
    subtitle: "Website, landing pages and business information.",
    icon: Globe,
  },
  {
    step: "03",
    title: "Visibility",
    subtitle: "Search, local discovery and relevant campaigns.",
    icon: Eye,
  },
  {
    step: "04",
    title: "Leads",
    subtitle: "Calls, forms and booking requests.",
    icon: PhoneCall,
  },
  {
    step: "05",
    title: "Customers",
    subtitle: "Qualified enquiries become completed jobs or sales.",
    icon: UserCheck,
  },
  {
    step: "06",
    title: "Verified Revenue",
    subtitle: "Completed, paid customer revenue is tracked.",
    icon: ShieldCheck,
  },
  {
    step: "07",
    title: "Growth",
    subtitle: "Use the data to improve the system.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            The Core System
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From being discovered to getting paid.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            We connect your digital presence to a measurable customer-acquisition system.
          </p>
        </Reveal>

        {/* Unified Horizontal System Process Flow Header Bar */}
        <Reveal delay={0.1} className="mt-10 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-md min-w-max">
            {CORE_SYSTEM_STEPS.map((s, idx) => (
              <div key={s.step} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-zinc-300">
                  <span className="text-accent font-mono font-bold mr-1">{s.step}.</span>
                  {s.title}
                </span>
                {idx < CORE_SYSTEM_STEPS.length - 1 && (
                  <ArrowRight className="size-3 text-accent/50 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* 7 Connected Visual System Step Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_SYSTEM_STEPS.map((stepItem, i) => (
            <Reveal key={stepItem.step} delay={i * 0.07} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative flex h-full flex-col justify-between rounded-3xl border p-6 backdrop-blur-md transition-all ${
                  i === CORE_SYSTEM_STEPS.length - 1
                    ? "border-accent bg-accent/20 shadow-xl shadow-accent/10"
                    : "border-white/10 bg-surface/70 hover:border-accent/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-mono">
                      STEP {stepItem.step}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                      <stepItem.icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {stepItem.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                    {stepItem.subtitle}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
