"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Wrench, TrendingUp, Search, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FOUR_PILLARS = [
  {
    title: "REAL SERVICE",
    subtitle: "You already know how to deliver the service.",
    icon: Wrench,
  },
  {
    title: "GROWTH CAPACITY",
    subtitle: "You can handle additional customers.",
    icon: TrendingUp,
  },
  {
    title: "DIGITAL OPPORTUNITY",
    subtitle: "Your online customer acquisition can be improved.",
    icon: Search,
  },
  {
    title: "MEASURABLE DEMAND",
    subtitle: "Your service generates enquiries, calls, bookings or sales that can be tracked.",
    icon: CalendarCheck,
  },
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
            Built for businesses ready for more customers.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE is designed for businesses that already deliver a real service and have the capacity to handle additional demand.
          </p>
        </Reveal>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/70 p-7 backdrop-blur-md transition-all hover:border-accent/40 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                      0{i + 1}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                      <pillar.icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="font-display mt-6 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                    {pillar.subtitle}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Pilot Note & CTA */}
        <Reveal delay={0.25} className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/15 via-surface/80 to-black/50 p-7 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="size-6 text-accent shrink-0" />
              <p className="font-display text-sm sm:text-base font-bold text-foreground">
                Currently validating initial growth partnerships with local service businesses.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-lg shadow-accent/20 transition-all hover:bg-white hover:scale-105 active:scale-95"
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
