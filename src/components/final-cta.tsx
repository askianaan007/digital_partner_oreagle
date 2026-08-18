"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ready to build a customer acquisition system?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            Tell us about your business, your service area, and how customers currently find you. We&apos;ll review the opportunity and determine whether OREAGLE is a suitable fit.
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
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold text-zinc-950 shadow-xl shadow-accent/20 transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
          >
            <span>See If We&apos;re a Fit</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:atomycoders@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-accent/60 hover:bg-white/12"
          >
            <Mail className="size-4 text-accent" />
            <span>Talk to Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
