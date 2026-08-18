"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  PhoneCall,
  Megaphone,
  LineChart,
  RefreshCw,
  Search,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    stageTag: "01 — GET FOUND",
    title: "Website + Search",
    icon: Search,
    items: [
      "Conversion-focused website",
      "Local search visibility",
      "Landing pages",
    ],
  },
  {
    stageTag: "02 — CAPTURE DEMAND",
    title: "Calls + Forms + Booking",
    icon: LayoutTemplate,
    items: [
      "Lead capture",
      "Enquiry flows",
      "Booking/request systems",
    ],
  },
  {
    stageTag: "03 — GENERATE LEADS",
    title: "Relevant Acquisition Channels",
    icon: Megaphone,
    items: [
      "Search campaigns",
      "Local campaigns",
      "Social campaigns",
      "Seasonal campaigns",
    ],
  },
  {
    stageTag: "04 — TRACK",
    title: "Know Where Customers Came From",
    icon: PhoneCall,
    items: [
      "Call tracking",
      "Form tracking",
      "Campaign attribution",
      "Lead tracking",
    ],
  },
  {
    stageTag: "05 — OPTIMIZE",
    title: "Turn Data Into Better Performance",
    icon: LineChart,
    items: [
      "Conversion optimization",
      "Landing-page improvements",
      "Analytics",
      "Performance review",
    ],
  },
  {
    stageTag: "06 — MANAGE",
    title: "Keep Improving",
    icon: RefreshCw,
    items: [
      "Website updates",
      "Tracking maintenance",
      "Digital reporting",
      "Ongoing optimization",
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
            One digital growth partner. One connected system.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            Instead of hiring separate providers for your website, search visibility, lead generation, tracking and optimization, OREAGLE manages the connected digital system.
          </p>
        </Reveal>

        {/* 6 Connected System Stage Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.stageTag} delay={(i % 3) * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-6 backdrop-blur-md transition-all hover:border-accent/40 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {service.stageTag}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-accent border border-white/10">
                      <service.icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs font-medium text-zinc-300"
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
