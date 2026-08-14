"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Ready to build a customer acquisition system?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            Tell us about your cleaning business, your service area, and
            where your customers currently come from.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:scale-105"
          >
            See If We&apos;re a Fit
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:atomycoders@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            <Mail className="size-4" />
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
