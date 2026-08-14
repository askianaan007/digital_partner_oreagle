"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cpu,
  Users,
  Target,
  CheckCircle2,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    icon: Building2,
    title: "You run the cleaning business",
    description: "You handle the physical work — the jobs, the crew, the customer on-site.",
  },
  {
    icon: Cpu,
    title: "We build the digital system",
    description: "Website, booking flow, local SEO, and tracking — built and connected.",
  },
  {
    icon: Users,
    title: "Customers find you",
    description: "Search, maps, and campaigns bring qualified local traffic in.",
  },
  {
    icon: Target,
    title: "Leads are tracked",
    description: "Every call, form, and booking is attributed back to its source.",
  },
  {
    icon: CheckCircle2,
    title: "Jobs are completed",
    description: "Tracked leads convert into booked, completed cleaning jobs.",
  },
  {
    icon: ShieldCheck,
    title: "Revenue is verified",
    description: "Completed, paid jobs are confirmed against the tracking data.",
  },
  {
    icon: Handshake,
    title: "We share in the result",
    description: "Our commission applies only to verified, attributable revenue.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            How it works
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One system. One measurable outcome.
          </h2>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-6 h-px bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-6 h-px bg-accent"
          />

          <div className="grid grid-cols-7 gap-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
                  <step.icon className="size-5" />
                </div>
                <span className="font-display mt-4 text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="relative mt-16 flex flex-col lg:hidden">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <div key={step.title} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent"
                  >
                    <step.icon className="size-5" />
                  </motion.div>
                  {!isLast && (
                    <motion.span
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                      style={{ transformOrigin: "top" }}
                      className="w-px flex-1 bg-border"
                    />
                  )}
                </div>
                <div className="pb-10 last:pb-0">
                  <span className="font-display text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
