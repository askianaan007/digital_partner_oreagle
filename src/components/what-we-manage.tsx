"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  MapPin,
  Megaphone,
  PhoneCall,
  LineChart,
  RefreshCw,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Website + Booking",
    description:
      "A mobile-first, conversion-focused website that turns visitors into requests.",
    items: [
      "Service & location pages",
      "Booking / request flow",
      "Reviews & trust signals",
      "FAQs built for your services",
    ],
  },
  {
    number: "02",
    icon: MapPin,
    title: "Local SEO + Google Business Profile",
    description:
      "Getting your business found where local customers actually search.",
    items: [
      "Google Business Profile optimization",
      "Local search visibility",
      "Service-area pages",
      "Review acquisition",
    ],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Lead Generation",
    description: "Paid and organic campaigns built for your service area.",
    items: [
      "Search campaigns",
      "Local & map campaigns",
      "Social campaigns",
      "Seasonal campaigns",
    ],
  },
  {
    number: "04",
    icon: PhoneCall,
    title: "Call Tracking + Attribution",
    description: "Every lead traced back to the source that produced it.",
    items: [
      "Call tracking",
      "Form & UTM tracking",
      "Campaign attribution",
      "Completed-job tracking",
    ],
  },
  {
    number: "05",
    icon: LineChart,
    title: "Analytics + Conversion Optimization",
    description: "Continuous, data-driven improvement of what converts.",
    items: [
      "Conversion optimization",
      "Landing page testing",
      "Analytics reporting",
      "Ongoing improvements",
    ],
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Ongoing Maintenance",
    description: "The system stays live, current, and monitored — always.",
    items: [
      "Website updates",
      "Performance monitoring",
      "Digital reporting",
      "System upkeep",
    ],
  },
];

export function WhatWeManage() {
  return (
    <section id="what-we-manage" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            What we manage
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One digital growth partner. Not five separate vendors.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            AtomyCoders operates as your outsourced digital growth
            department — one integrated system instead of five disconnected
            tools.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <service.icon className="size-5" />
                  </div>
                  <span className="font-display text-sm text-muted/60">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-lg font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-foreground/80"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
