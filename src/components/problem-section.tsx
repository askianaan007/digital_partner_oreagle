"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MapPinOff,
  Search,
  CalendarX2,
  PhoneMissed,
  Users,
  Wallet,
  ShieldQuestion,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const PAIN_POINTS = [
  { icon: Globe, text: "Weak or missing website" },
  { icon: MapPinOff, text: "Poor Google Maps visibility" },
  { icon: Search, text: "Little to no local SEO" },
  { icon: CalendarX2, text: "No proper booking system" },
  { icon: PhoneMissed, text: "No call tracking" },
  { icon: Users, text: "Dependence on referrals alone" },
  { icon: Wallet, text: "Limited marketing budget" },
  { icon: ShieldQuestion, text: "Fear of paying before results" },
];

const WITHOUT = ["Random calls", "Random referrals", "No attribution", "No predictable growth"];
const WITH = ["Traffic", "Leads", "Bookings", "Completed jobs", "Measurable revenue"];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            The problem
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Good at cleaning. Not enough customers.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            Most newly opened NYC cleaning businesses lose jobs to
            invisibility, not competition.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point.text} delay={(i % 4) * 0.08}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                <point.icon className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-foreground/90">{point.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-7">
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Without a system
              </span>
              <div className="mt-6 flex flex-col gap-3">
                {WITHOUT.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-2 text-muted"
                  >
                    <ChevronRight className="size-4 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col rounded-2xl border border-accent/30 bg-surface/60 p-7">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                With our system
              </span>
              <div className="mt-6 flex flex-col gap-3">
                {WITH.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="size-4 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
