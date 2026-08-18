"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Globe,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const JOURNEY_STAGES = [
  {
    tag: "SEARCH",
    desc: "Customer looks for your service.",
    icon: Search,
  },
  {
    tag: "DISCOVERY",
    desc: "They find your business.",
    icon: MapPin,
  },
  {
    tag: "WEBSITE",
    desc: "They understand what you offer.",
    icon: Globe,
  },
  {
    tag: "ENQUIRY",
    desc: "They call, submit a form or request a booking.",
    icon: PhoneCall,
  },
  {
    tag: "BOOKING",
    desc: "The opportunity becomes a real appointment.",
    icon: CalendarCheck,
  },
  {
    tag: "COMPLETED JOB",
    desc: "The customer receives the service.",
    icon: CheckCircle2,
  },
  {
    tag: "PAID REVENUE",
    desc: "The result becomes measurable.",
    icon: DollarSign,
  },
];

export function CustomerJourneySection() {
  return (
    <section id="customer-journey" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Customer Journey
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            See what happens after someone finds you.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            From search to paid revenue — nothing gets lost between marketing activity and business outcome.
          </p>
        </Reveal>

        {/* Journey Stages Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_STAGES.map((stage, i) => (
            <Reveal key={stage.tag} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group flex h-full flex-col justify-between rounded-3xl border p-6 backdrop-blur-md transition-all ${
                  i === JOURNEY_STAGES.length - 1
                    ? "border-emerald-500/50 bg-emerald-950/20 shadow-xl"
                    : "border-white/10 bg-surface/70 hover:border-accent/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      0{i + 1} • {stage.tag}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                      <stage.icon className="size-4.5" />
                    </div>
                  </div>

                  <p className="mt-5 text-xs leading-relaxed font-medium text-foreground">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Highlighted Banner Statement */}
        <Reveal delay={0.25} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-r from-accent/20 via-surface/90 to-accent/10 p-8 text-center backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="size-6 text-accent shrink-0" />
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Connect marketing activity to measurable business outcomes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
