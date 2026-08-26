"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Star,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Sparkles,
  ArrowRight,
  Laptop,
} from "lucide-react";
import { HeroCanvasBackground } from "@/components/hero-canvas";

const SCENARIOS = [
  {
    id: "cleaning",
    category: "Cleaning",
    headerTitle: "TURNING SEARCHES INTO BOOKINGS",
    searchQuery: "house cleaning near me",
    businessName: "Sparkle Clean NYC",
    rating: "4.9",
    reviews: "120+ reviews",
    domain: "sparkleclean.com",
    tagline: "Professional Cleaning",
    cta: "Book Now",
    eventTitle: "NEW BOOKING",
    eventDetails: "Deep Cleaning · Manhattan, NY",
    value: "280",
    resultBadge: "Revenue Generated",
    outcomeText: "From search to booked cleaning.",
  },
  {
    id: "plumbing",
    category: "Plumbing",
    headerTitle: "TURNING SEARCHES INTO SERVICE CALLS",
    searchQuery: "plumber near me",
    businessName: "PrimeFlow Plumbing",
    rating: "4.9",
    reviews: "95+ reviews",
    domain: "primeflowplumbing.com",
    tagline: "24/7 Emergency Plumbing",
    cta: "Request Service",
    eventTitle: "NEW SERVICE REQUEST",
    eventDetails: "Emergency Plumbing · Brooklyn, NY",
    value: "425",
    resultBadge: "New Customer",
    outcomeText: "From emergency search to service request.",
  },
  {
    id: "hvac",
    category: "HVAC",
    headerTitle: "TURNING SEARCHES INTO LEADS",
    searchQuery: "AC repair NYC",
    businessName: "MetroAir HVAC",
    rating: "4.8",
    reviews: "150+ reviews",
    domain: "metroairhvac.com",
    tagline: "Heating & Cooling",
    cta: "Get a Quote",
    eventTitle: "NEW LEAD",
    eventDetails: "AC Repair · Queens, NY",
    value: "650",
    resultBadge: "Lead Generated",
    outcomeText: "From local search to qualified lead.",
  },
  {
    id: "landscaping",
    category: "Landscaping",
    headerTitle: "TURNING SEARCHES INTO NEW CUSTOMERS",
    searchQuery: "landscaper near me",
    businessName: "GreenLine Landscaping",
    rating: "4.9",
    reviews: "80+ reviews",
    domain: "greenlinelandscape.com",
    tagline: "Lawn & Garden Service",
    cta: "Get Estimate",
    eventTitle: "NEW QUOTE REQUEST",
    eventDetails: "Lawn & Garden · Staten Island, NY",
    value: "520",
    resultBadge: "Customer Acquired",
    outcomeText: "From discovery to quote request.",
  },
  {
    id: "auto",
    category: "Auto Detail",
    headerTitle: "TURNING SEARCHES INTO APPOINTMENTS",
    searchQuery: "car detailing near me",
    businessName: "Blackline Auto Detail",
    rating: "5.0",
    reviews: "210+ reviews",
    domain: "blacklineautodetail.com",
    tagline: "Full Interior & Exterior Detail",
    cta: "Book Appointment",
    eventTitle: "NEW BOOKING",
    eventDetails: "Full Detail · Manhattan, NY",
    value: "195",
    resultBadge: "Revenue Generated",
    outcomeText: "From search to booked appointment.",
  },
];

interface HeroProps {
  startAnimation?: boolean;
}

export function Hero({ startAnimation = true }: HeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SCENARIOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const activeScenario = SCENARIOS[activeIdx];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-16"
    >
      {/* Ambient Lighting & Background Setup */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0c0f]">
        {/* Subtle Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_40%,#14161b_0%,#0c0d10_60%,#08090b_100%)]" />

        {/* 3D Hero Canvas Background */}
        <HeroCanvasBackground />

        {/* Soft Golden Volumetric Lighting Aura Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: startAnimation ? 0.14 : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[200px]"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Outcome-Driven Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles className="size-3.5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                DIGITAL GROWTH PARTNER
              </span>
            </motion.div>

            {/* Main H1 Headline */}
            <h1 className="font-display mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block"
              >
                You run the business.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-accent font-bold mt-1"
              >
                We bring the customers.
              </motion.span>
            </h1>

            {/* One Short Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg"
            >
              We build and manage your website, SEO, social media, and digital growth — with no upfront fee.
            </motion.p>

            {/* Differentiator Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-3.5 inline-flex items-center gap-2.5 rounded-2xl border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-200 backdrop-blur-sm"
            >
              <span className="flex size-2 rounded-full bg-accent animate-ping" />
              <span>You pay us when our work generates business for you.</span>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#how-it-works"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-xl shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>See How It Works</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/10"
              >
                See If We&apos;re a Fit
              </a>
            </motion.div>

            {/* Micro Trust Line Underneath CTAs */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-4 text-xs font-medium tracking-wide text-zinc-400/90"
            >
              Website <span className="text-accent/60 mx-1">•</span> SEO <span className="text-accent/60 mx-1">•</span> Social <span className="text-accent/60 mx-1">•</span> Lead Generation
            </motion.p>
          </div>

          {/* RIGHT COLUMN: Clean Hands-Free Morphing Scenario Loop */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={startAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#14161c]/95 via-[#0e1014]/98 to-[#090a0c]/98 p-5 lg:p-5.5 backdrop-blur-2xl shadow-2xl shadow-black/90"
            >
              {/* Ambient Background Glows */}
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 size-56 rounded-full bg-emerald-500/10 blur-3xl" />

              {/* Dynamic Header */}
              <div className="border-b border-white/10 pb-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScenario.headerTitle}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-md bg-accent/15 border border-accent/30 text-accent">
                      <TrendingUp className="size-3" />
                    </div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">
                      {activeScenario.headerTitle}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 3-STAGE DYNAMIC MORPHING VISUAL JOURNEY */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-3.5 space-y-2.5"
                >

                  {/* 1. GOOGLE SEARCH CARD */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md shadow-md">
                    <div className="flex items-center justify-between rounded-lg bg-black/60 px-2.5 py-1.5 border border-white/10 text-[11px]">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <Search className="size-3 text-accent" />
                        <span className="font-medium text-zinc-200 text-[11px]">
                          {activeScenario.searchQuery}
                        </span>
                      </div>
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        Google Search
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-foreground">
                          {activeScenario.businessName}
                        </h4>
                        <div className="mt-0.5 flex items-center gap-1 text-amber-400">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] font-bold text-zinc-200">
                            {activeScenario.rating}
                          </span>
                          <span className="text-[9px] text-zinc-400">
                            ({activeScenario.reviews})
                          </span>
                        </div>
                      </div>

                      <span className="shrink-0 rounded border border-accent/40 bg-accent/15 px-2 py-0.5 text-[9px] font-bold text-accent shadow-sm">
                        YOUR BUSINESS
                      </span>
                    </div>
                  </div>

                  {/* Connector Arrow 1 */}
                  <div className="flex justify-center -my-1">
                    <ArrowRight className="size-3 text-accent/60 rotate-90" />
                  </div>

                  {/* 2. REAL WEBSITE PREVIEW CARD */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <Laptop className="size-3 text-accent" />
                        <span className="font-mono text-[10px] text-zinc-300">
                          {activeScenario.domain}
                        </span>
                      </div>
                      <span className="text-[9px] font-semibold text-zinc-400">
                        Your Website
                      </span>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-black/60 p-2 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-200">
                          {activeScenario.businessName}
                        </h4>
                        <p className="text-[9px] text-zinc-400">{activeScenario.tagline}</p>
                      </div>

                      <span className="rounded-md bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-2.5 py-1 text-[10px] font-bold text-zinc-950 shadow-sm">
                        {activeScenario.cta}
                      </span>
                    </div>
                  </div>

                  {/* Connector Arrow 2 */}
                  <div className="flex justify-center -my-1">
                    <ArrowRight className="size-3 text-accent/60 rotate-90" />
                  </div>

                  {/* 3. NEW CUSTOMER ACQUIRED RESULT CARD */}
                  <div className="relative overflow-hidden rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-accent/10 to-black/80 p-3 shadow-lg shadow-emerald-950/50">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="size-3.5 text-emerald-400" />
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                            {activeScenario.eventTitle}
                          </span>
                        </div>
                        <h4 className="mt-0.5 text-xs font-bold text-foreground">
                          {activeScenario.eventDetails}
                        </h4>
                        <span className="inline-block mt-1 text-[9px] font-medium text-zinc-400 uppercase tracking-wider bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                          EXAMPLE BOOKING
                        </span>
                      </div>

                      {/* Revenue / Value Badge */}
                      <div className="text-right shrink-0 rounded-lg bg-black/60 border border-emerald-500/30 p-2 shadow-inner">
                        <div className="flex items-center justify-end text-base font-bold text-accent font-display">
                          <DollarSign className="size-3.5 -mr-1 text-accent" />
                          {activeScenario.value}
                        </div>
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-400">
                          {activeScenario.resultBadge}
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Sub-line Underneath Card */}
              <div className="mt-3 border-t border-white/10 pt-2 text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeScenario.outcomeText}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-zinc-300 font-semibold"
                  >
                    {activeScenario.outcomeText}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[9px] text-zinc-400 mt-0.5 font-medium">
                  We turn online searches into measurable revenue.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
