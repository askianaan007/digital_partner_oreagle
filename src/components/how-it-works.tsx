"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Check,
  Globe,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Users,
  Star,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const ROTATING_SCENARIOS = [
  {
    id: "cleaning",
    query: "house cleaning near me",
    business: "Sparkle Clean NYC",
    rating: "4.9",
    tagline: "Professional Cleaning Services",
    location: "Manhattan, NY",
    price: "$280",
  },
  {
    id: "plumbing",
    query: "plumber near me",
    business: "PrimeFlow Plumbing",
    rating: "4.9",
    tagline: "24/7 Emergency Plumbing",
    location: "Brooklyn, NY",
    price: "$425",
  },
  {
    id: "hvac",
    query: "AC repair NYC",
    business: "MetroAir HVAC",
    rating: "4.8",
    tagline: "Heating & Cooling Experts",
    location: "Queens, NY",
    price: "$650",
  },
  {
    id: "landscaping",
    query: "landscaper near me",
    business: "GreenLine Landscaping",
    rating: "4.9",
    tagline: "Lawn & Garden Service",
    location: "Staten Island, NY",
    price: "$520",
  },
  {
    id: "auto",
    query: "car detailing near me",
    business: "Blackline Auto Detail",
    rating: "5.0",
    tagline: "Full Interior & Exterior Detail",
    location: "Manhattan, NY",
    price: "$195",
  },
];

export function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ROTATING_SCENARIOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const scenario = ROTATING_SCENARIOS[activeIdx];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        <div className="absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Positioning Header */}
        <Reveal className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="size-3.5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              THE COMPLETE DIGITAL SYSTEM
            </span>
          </div>

          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            We handle the digital side.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-300/90 sm:text-lg max-w-2xl">
            From getting discovered to generating measurable results, we build and manage the digital system behind your growth.
          </p>
        </Reveal>

        {/* CONTINUOUS PIPELINE CONNECTOR HEADER BAR */}
        <Reveal delay={0.1} className="mt-12 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-md min-w-max mx-auto shadow-inner">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/30">
              <span className="text-xs font-mono font-bold text-accent">01</span>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">GET FOUND</span>
            </div>
            <ArrowRight className="size-3.5 text-accent/60 shrink-0" />

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/30">
              <span className="text-xs font-mono font-bold text-accent">02</span>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">GET CHOSEN</span>
            </div>
            <ArrowRight className="size-3.5 text-accent/60 shrink-0" />

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/30">
              <span className="text-xs font-mono font-bold text-accent">03</span>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">GET THE CUSTOMER</span>
            </div>
            <ArrowRight className="size-3.5 text-accent/60 shrink-0" />

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-xs font-mono font-bold text-emerald-400">04</span>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">KNOW WHAT WORKS</span>
            </div>
            <ArrowRight className="size-3.5 text-emerald-400/80 shrink-0" />

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 shadow-sm">
              <Users className="size-3.5 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">MORE CUSTOMERS</span>
            </div>
          </div>
        </Reveal>

        {/* 4 CONNECTED DIGITAL JOURNEY SYSTEM CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          
          {/* STAGE 01 — GET FOUND */}
          <Reveal delay={0.1} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12141a]/90 p-5.5 backdrop-blur-xl transition-all hover:border-accent/40 shadow-xl"
            >
              <div>
                {/* Visual Interface 01: Google Search Mockup */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-3.5 shadow-inner min-h-[145px] flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-300 border border-white/10">
                    <Search className="size-3 text-accent shrink-0" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={scenario.query}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="font-mono text-[10px] truncate text-zinc-200"
                      >
                        {scenario.query}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1 text-[11px] mt-2">
                    <div className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-0.5 text-zinc-400">
                      <span>Other Business</span>
                      <Check className="size-3 text-zinc-500" />
                    </div>
                    <div className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-0.5 text-zinc-400">
                      <span>Other Business</span>
                      <Check className="size-3 text-zinc-500" />
                    </div>
                    <div className="flex items-center justify-between rounded border border-accent/40 bg-accent/15 px-2 py-1 text-zinc-100 font-semibold shadow-sm">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={scenario.business}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="truncate text-[11px]"
                        >
                          {scenario.business}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-[9px] font-bold text-accent bg-accent/20 px-1.5 py-0.5 rounded shrink-0">
                        YOUR BUSINESS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage Header */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/30">
                    01 — GET FOUND
                  </span>
                  <Search className="size-4 text-accent/80" />
                </div>

                <h3 className="font-display mt-3 text-base font-bold text-foreground">
                  Google · SEO · Local Search
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  Be visible where potential customers are actively searching for your service.
                </p>

                {/* Supporting Check Items */}
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Google Search</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Local SEO</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Search Visibility</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Reveal>

          {/* STAGE 02 — GET CHOSEN */}
          <Reveal delay={0.2} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12141a]/90 p-5.5 backdrop-blur-xl transition-all hover:border-accent/40 shadow-xl"
            >
              <div>
                {/* Visual Interface 02: Website & Reputation Mockup */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-3.5 shadow-inner min-h-[145px] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={scenario.business}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs font-bold text-zinc-200 truncate"
                      >
                        {scenario.business}
                      </motion.span>
                    </AnimatePresence>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="size-3 fill-amber-400" />
                      <span className="text-[10px] font-bold text-zinc-300">{scenario.rating}</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={scenario.tagline}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[10px] text-zinc-400 mt-1"
                    >
                      {scenario.tagline}
                    </motion.p>
                  </AnimatePresence>

                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="rounded bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-2.5 py-1 text-[10px] font-bold text-zinc-950 shadow-sm">
                      Get a Quote
                    </span>
                    <span className="text-[9px] text-zinc-400 font-mono">Trusted Digital Presence</span>
                  </div>
                </div>

                {/* Stage Header */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/30">
                    02 — GET CHOSEN
                  </span>
                  <Globe className="size-4 text-accent/80" />
                </div>

                <h3 className="font-display mt-3 text-base font-bold text-foreground">
                  Website · Social · Content
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  Turn attention into trust with a digital presence built to convert.
                </p>

                {/* Supporting Check Items */}
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>High-Converting Website</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Social Presence</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Trust & Reputation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Reveal>

          {/* STAGE 03 — GET THE CUSTOMER */}
          <Reveal delay={0.3} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12141a]/90 p-5.5 backdrop-blur-xl transition-all hover:border-accent/40 shadow-xl"
            >
              <div>
                {/* Visual Interface 03: Lead Capture Mockup */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-3.5 shadow-inner min-h-[145px] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="size-3 text-accent" />
                      NEW CUSTOMER
                    </span>
                    <span className="text-[9px] text-zinc-500 font-mono">Just Now</span>
                  </div>

                  <div className="mt-1.5">
                    <h4 className="text-xs font-semibold text-zinc-200">Service Request</h4>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={scenario.location}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[10px] text-zinc-400 mt-0.5"
                      >
                        Quote Requested · {scenario.location}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between pt-1 border-t border-white/10">
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Request Received
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={scenario.price}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs font-bold text-accent font-mono"
                      >
                        {scenario.price}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Stage Header */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/30">
                    03 — GET THE CUSTOMER
                  </span>
                  <PhoneCall className="size-4 text-accent/80" />
                </div>

                <h3 className="font-display mt-3 text-base font-bold text-foreground">
                  Leads · Calls · Bookings
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  Turn interest into real enquiries, quotes, and bookings.
                </p>

                {/* Supporting Check Items */}
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Lead Capture</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Quote Requests</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                    <span>Booking Flows</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Reveal>

          {/* STAGE 04 — KNOW WHAT WORKS (Green Accent) */}
          <Reveal delay={0.4} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/30 via-[#12141a]/90 to-[#0b0c0f]/95 p-5.5 backdrop-blur-xl transition-all hover:border-emerald-400 shadow-xl shadow-emerald-950/20"
            >
              <div>
                {/* Visual Interface 04: Prominent EXAMPLE PERFORMANCE Mockup */}
                <div className="rounded-2xl border border-emerald-500/30 bg-black/60 p-3.5 shadow-inner min-h-[145px] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-emerald-500/20 pb-1.5">
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 tracking-wider uppercase">
                      EXAMPLE PERFORMANCE
                    </span>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <TrendingUp className="size-2.5" />
                      Growth
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1 text-center mt-2">
                    <div className="rounded bg-white/5 p-1.5">
                      <span className="block text-[9px] text-zinc-400">Leads</span>
                      <span className="text-xs font-bold text-zinc-200">34</span>
                    </div>
                    <div className="rounded bg-white/5 p-1.5">
                      <span className="block text-[9px] text-zinc-400">Customers</span>
                      <span className="text-xs font-bold text-zinc-200">12</span>
                    </div>
                    <div className="rounded bg-emerald-500/15 border border-emerald-500/30 p-1.5">
                      <span className="block text-[9px] text-emerald-400 font-bold">Revenue</span>
                      <span className="text-xs font-bold text-emerald-400">$8,450</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-zinc-500 text-center mt-1.5 italic">
                    Illustrative performance model
                  </p>
                </div>

                {/* Stage Header */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    04 — KNOW WHAT WORKS
                  </span>
                  <ShieldCheck className="size-4 text-emerald-400" />
                </div>

                <h3 className="font-display mt-3 text-base font-bold text-foreground">
                  Analytics · Attribution · Revenue
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  Know which digital channels actually generate customers and revenue.
                </p>

                {/* Supporting Check Items */}
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>Revenue Tracking</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>Lead Analytics</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>Performance Insights</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Reveal>

        </div>

        {/* INTEGRATED SYSTEM OUTCOME NODE: MORE CUSTOMERS */}
        <Reveal delay={0.5} className="mt-10 text-center">
          <div className="inline-flex flex-col items-center justify-center rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-[#12141a]/95 to-emerald-950/40 px-6 py-3.5 backdrop-blur-xl shadow-lg shadow-emerald-950/30">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                MORE CUSTOMERS
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 mt-1 font-medium">
              A complete digital system working together.
            </p>
          </div>
        </Reveal>

        {/* BOTTOM STATEMENT PILL */}
        <Reveal delay={0.55} className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-md shadow-lg">
            <span className="size-2 rounded-full bg-accent animate-ping" />
            <span>You run the business. We handle the digital side.</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
