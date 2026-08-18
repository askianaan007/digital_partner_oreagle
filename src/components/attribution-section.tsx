"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const CHANNELS = [
  "Google Search",
  "Google Maps",
  "Social Campaigns",
  "Service Website",
  "Direct Enquiries",
];

const JOURNEY_NODES = [
  {
    id: "discovery",
    label: "Discovery",
    sublabel: "Google / Maps / Social",
    icon: Search,
  },
  {
    id: "lead",
    label: "Lead",
    sublabel: "Call / Form / Enquiry",
    icon: PhoneCall,
  },
  {
    id: "booking",
    label: "Booking",
    sublabel: "Scheduled / Confirmed",
    icon: CalendarCheck,
  },
  {
    id: "completed",
    label: "Completed Job",
    sublabel: "Service Delivered",
    icon: CheckCircle2,
  },
  {
    id: "paid",
    label: "Paid Revenue",
    sublabel: "Payment Processed",
    icon: DollarSign,
  },
  {
    id: "attribution",
    label: "Verified Attribution",
    sublabel: "Confirmed Source",
    icon: ShieldCheck,
  },
];

const SAMPLE_RECORD = {
  recordId: "REC-84920",
  source: "Google Search (Local Search Campaign)",
  leadType: "Phone Call (Verified 04:12 Duration)",
  booking: "Appointment Confirmed & Scheduled",
  completedJob: "Service Delivered & Signed",
  paidRevenue: "$480.00",
  attributionStatus: "Confirmed & Attributable",
  eligibleRevenue: "$480.00",
};

export function AttributionSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isFullGlow, setIsFullGlow] = useState(false);

  // Animated continuous journey loop through nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => {
        const next = (prev + 1) % JOURNEY_NODES.length;
        // Trigger brief full path illumination when reaching Paid Revenue (step 4 / 5)
        if (next === 4 || next === 5) {
          setIsFullGlow(true);
          setTimeout(() => setIsFullGlow(false), 1400);
        }
        return next;
      });
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="attribution" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Attribution
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From first click to paid job. Nothing gets lost.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            OREAGLE connects marketing activity to real customer outcomes — tracking the journey from where a customer finds you to when the job is completed and paid.
          </p>
        </Reveal>

        {/* Source Channel Pills */}
        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mr-1">
              Source Channels:
            </span>
            {CHANNELS.map((channel) => (
              <span
                key={channel}
                className="rounded-full border border-white/10 bg-surface/80 px-4 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur-sm"
              >
                {channel}
              </span>
            ))}
          </div>
        </Reveal>

        {/* SINGLE GLOWING GOLD PATH JOURNEY VISUALIZATION */}
        <Reveal delay={0.15} className="mt-14">
          <div
            className={`relative overflow-hidden rounded-3xl border transition-all duration-700 ${
              isFullGlow
                ? "border-accent bg-accent/15 shadow-2xl shadow-accent/30"
                : "border-white/10 bg-surface/60 shadow-xl"
            } p-6 sm:p-10 backdrop-blur-md`}
          >
            {/* Ambient Lighting Flash on Full Path Illumination */}
            <AnimatePresence>
              {isFullGlow && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.25 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pointer-events-none absolute inset-0 bg-accent blur-2xl"
                />
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Live Customer Journey Tracker
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono">
                Stage {activeStepIndex + 1} of {JOURNEY_NODES.length}
              </span>
            </div>

            {/* Glowing Journey Nodes Pipeline */}
            <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {JOURNEY_NODES.map((node, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx <= activeStepIndex || isFullGlow;

                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setActiveStepIndex(idx)}
                    whileHover={{ scale: 1.03 }}
                    className={`cursor-pointer relative flex flex-col justify-between rounded-2xl border p-4 transition-all duration-500 ${
                      isActive
                        ? "border-accent bg-accent/20 shadow-lg shadow-accent/20 ring-1 ring-accent/40"
                        : isPassed
                        ? "border-accent/40 bg-black/40"
                        : "border-white/10 bg-black/20 opacity-60"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? "bg-accent text-zinc-950 font-bold"
                              : isPassed
                              ? "bg-accent/20 text-accent"
                              : "bg-white/5 text-zinc-400"
                          }`}
                        >
                          <node.icon className="size-4.5" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
                      </div>

                      <h4 className="font-display mt-4 text-sm font-semibold text-foreground">
                        {node.label}
                      </h4>
                      <p className="mt-1 text-[11px] text-zinc-400 leading-tight">
                        {node.sublabel}
                      </p>
                    </div>

                    {/* Active Pulsing Status Dot */}
                    {isActive && (
                      <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase text-accent">
                        <motion.span
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="size-1.5 rounded-full bg-accent"
                        />
                        <span>Active</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ILLUSTRATIVE TRACKING VIEW (REAL-WORLD SAMPLE RECORD) */}
        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Illustrative Tracking View
                </span>
                <h4 className="font-display text-lg font-bold text-foreground mt-0.5">
                  Verified Customer Record ({SAMPLE_RECORD.recordId})
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="size-3.5" />
                Verified & Attributable
              </span>
            </div>

            {/* Record Table / Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Source</span>
                <p className="font-semibold text-sm text-foreground mt-1">{SAMPLE_RECORD.source}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Lead Type</span>
                <p className="font-semibold text-sm text-foreground mt-1">{SAMPLE_RECORD.leadType}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Booking Status</span>
                <p className="font-semibold text-sm text-foreground mt-1">{SAMPLE_RECORD.booking}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Completed Job</span>
                <p className="font-semibold text-sm text-foreground mt-1">{SAMPLE_RECORD.completedJob}</p>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">Paid Revenue</span>
                <p className="font-display font-bold text-lg text-emerald-300 mt-1">{SAMPLE_RECORD.paidRevenue}</p>
              </div>

              <div className="rounded-2xl border border-accent/40 bg-accent/10 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">OREAGLE Eligible Revenue</span>
                <p className="font-display font-bold text-lg text-accent mt-1">{SAMPLE_RECORD.eligibleRevenue}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* COMMERCIAL COMPLIANCE FOOTNOTE CALLOUT BOX */}
        <Reveal delay={0.25} className="mt-8">
          <div className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-5 backdrop-blur-md">
            <ShieldCheck className="size-5 shrink-0 text-accent mt-0.5" />
            <p className="text-xs leading-relaxed text-zinc-300">
              <span className="font-semibold text-accent">Commercial Agreement Terms:</span> Commission applies only to eligible, attributable, completed and paid jobs under the agreed partnership terms.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
