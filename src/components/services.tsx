"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  LineChart,
  Smartphone,
  Rocket,
  Shield,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: Palette,
    title: "Brand & Design",
    description:
      "Identity systems, UI/UX design, and design systems that scale across every touchpoint.",
  },
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "Full-stack web and app development built on modern, performant, maintainable architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    description:
      "Native-feeling cross-platform apps that stay fast, responsive, and delightful on any device.",
  },
  {
    icon: LineChart,
    title: "Growth & Analytics",
    description:
      "Data-driven experimentation, SEO, and funnel optimization to compound your growth.",
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description:
      "Go-to-market planning, positioning, and launch execution that gets you noticed.",
  },
  {
    icon: Shield,
    title: "Infrastructure & Security",
    description:
      "Scalable cloud infrastructure with security and reliability baked in from day one.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            What we do
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to ship, launch, and scale.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-6"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(240px circle at var(--x,50%) var(--y,50%), color-mix(in srgb, var(--accent) 15%, transparent), transparent 70%)",
                  }}
                />
                <div className="relative flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <service.icon className="size-5" />
                </div>
                <h3 className="font-display relative mt-5 text-lg font-medium">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
