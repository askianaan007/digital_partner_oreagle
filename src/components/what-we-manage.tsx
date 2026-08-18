"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Search,
  Megaphone,
  PhoneCall,
  LineChart,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const SYSTEM_PIPELINE = [
  { stage: "BUILD", label: "Website + Booking" },
  { stage: "GET FOUND", label: "Local Search" },
  { stage: "ATTRACT", label: "Lead Generation" },
  { stage: "TRACK", label: "Attribution" },
  { stage: "OPTIMIZE", label: "Analytics" },
  { stage: "MANAGE", label: "Ongoing Management" },
];

const SERVICES = [
  {
    stageTag: "BUILD",
    number: "01",
    icon: LayoutTemplate,
    title: "01 — Website + Booking",
    description: "Turn online visitors into real enquiries.",
    items: [
      "Mobile-first website",
      "Service & location pages",
      "Booking / enquiry flow",
      "Reviews & trust signals",
    ],
  },
  {
    stageTag: "GET FOUND",
    number: "02",
    icon: Search,
    title: "02 — Local Search",
    description: "Get discovered when customers are looking for your service.",
    items: [
      "Google Business Profile optimization",
      "Local search visibility",
      "Service-area pages",
      "Review acquisition",
    ],
  },
  {
    stageTag: "ATTRACT",
    number: "03",
    icon: Megaphone,
    title: "03 — Lead Generation",
    description: "Put your business in front of the right customers.",
    items: [
      "Search campaigns",
      "Local & map campaigns",
      "Social campaigns",
      "Seasonal campaigns",
    ],
  },
  {
    stageTag: "TRACK",
    number: "04",
    icon: PhoneCall,
    title: "04 — Tracking & Attribution",
    description: "Know where your customers actually come from.",
    items: [
      "Call tracking",
      "Form & UTM tracking",
      "Campaign attribution",
      "Lead-to-customer tracking",
    ],
  },
  {
    stageTag: "OPTIMIZE",
    number: "05",
    icon: LineChart,
    title: "05 — Analytics & Optimization",
    description: "Turn real data into better performance.",
    items: [
      "Conversion optimization",
      "Landing page testing",
      "Analytics reporting",
      "Ongoing improvements",
    ],
  },
  {
    stageTag: "MANAGE",
    number: "06",
    icon: RefreshCw,
    title: "06 — Ongoing Management",
    description: "Your digital system stays current, monitored, and improving.",
    items: [
      "Website updates",
      "Performance monitoring",
      "Digital reporting",
      "System maintenance",
    ],
  },
];

export function WhatWeManage() {
  return (
    <section id="what-we-manage" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            What We Manage
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One digital growth partner. Not five separate vendors.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE acts as your outsourced digital growth team — building, managing, and optimizing the digital system that turns visibility into customers.
          </p>
        </Reveal>

        {/* Mental Model System Pipeline Bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/80 p-3 backdrop-blur-md min-w-max">
              {SYSTEM_PIPELINE.map((item, idx) => (
                <div key={item.stage} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3.5 py-2 border border-white/10">
                    <span className="text-[11px] font-bold tracking-wider text-accent uppercase">
                      {item.stage}
                    </span>
                    <span className="text-xs text-foreground/80 font-medium">
                      {item.label}
                    </span>
                  </div>
                  {idx < SYSTEM_PIPELINE.length - 1 && (
                    <ArrowRight className="size-3.5 text-accent/60 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 6 Integrated System Stage Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {service.stageTag}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-accent border border-white/10">
                      <service.icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs font-medium text-foreground/85"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-accent/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
