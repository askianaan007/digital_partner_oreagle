"use client";

import { motion } from "framer-motion";
import {
  Building2,
  UsersRound,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const BEST_FIT_CRITERIA = [
  { icon: Building2, text: "Established or early-stage service businesses" },
  { icon: UsersRound, text: "Owner-led or independently operated" },
  { icon: UsersRound, text: "Small teams or service crews" },
  { icon: TrendingUp, text: "Strong service with room to grow" },
  { icon: CheckCircle2, text: "Ready to handle additional customers" },
  { icon: Target, text: "Limited or inconsistent digital acquisition" },
  { icon: ShieldCheck, text: "Clear service area" },
  { icon: Sparkles, text: "Open to a performance-based partnership" },
];

const CORE_PILLARS = [
  {
    title: "Great Service",
    description: "You already know how to deliver the work.",
    icon: ShieldCheck,
  },
  {
    title: "Growth Capacity",
    description: "You have the team and capacity to take on more customers.",
    icon: TrendingUp,
  },
  {
    title: "Digital Opportunity",
    description: "Your online visibility and customer acquisition can be improved.",
    icon: Zap,
  },
  {
    title: "Measurable Demand",
    description: "Your services generate trackable enquiries, bookings, or jobs.",
    icon: Target,
  },
];

const FIT_JOURNEY = [
  "You deliver a real service",
  "You want more customers",
  "You can handle more demand",
  "Your customer journey can be tracked",
  "You're open to performance-based growth",
];

export function IdealPartner() {
  return (
    <section id="who-we-work-with" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Who We Work With
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for service businesses ready for more customers.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE is designed for businesses that already deliver a real service and are ready for a more consistent way to attract new customers.
          </p>
        </Reveal>

        {/* Best-Fit Businesses Grid */}
        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {BEST_FIT_CRITERIA.map((c, i) => (
            <Reveal key={c.text} delay={(i % 4) * 0.08}>
              <div className="flex h-full items-center gap-3.5 rounded-xl border border-white/10 bg-surface/60 p-4 backdrop-blur-sm transition-colors hover:border-white/20">
                <c.icon className="size-4.5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground/90">{c.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What Makes a Strong Fit (4 Core Pillars) */}
        <Reveal delay={0.15} className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What makes a strong fit?
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur-md"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <pillar.icon className="size-5" />
                </div>
                <h4 className="font-display mt-4 text-base font-bold text-foreground">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-300/90">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* "Are We a Fit?" Interactive Journey Flow + CTA */}
        <Reveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-black/50 p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              OREAGLE is a strong fit if...
            </h3>

            {/* Horizontal / Vertical Journey Steps */}
            <div className="mt-6 overflow-x-auto pb-2 scrollbar-none">
              <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 min-w-max">
                {FIT_JOURNEY.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
                      <CheckCircle2 className="size-4 text-accent shrink-0" />
                      <span className="text-xs font-medium text-foreground">
                        {step}
                      </span>
                    </div>
                    {idx < FIT_JOURNEY.length - 1 && (
                      <ArrowRight className="size-3.5 text-accent/60 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs text-zinc-400 font-medium">
                Ready to evaluate your customer acquisition system?
              </span>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold text-zinc-950 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
              >
                <span>See If We&apos;re a Fit</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
