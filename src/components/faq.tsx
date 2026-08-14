"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FAQS = [
  {
    q: "Do I have to pay for the website upfront?",
    a: "No. There's no traditional upfront website or marketing fee. The website is built and managed as part of a performance-based partnership.",
  },
  {
    q: "How exactly do you make money?",
    a: "We earn a small, progressive commission — 1% to 3%, scaling with your monthly attributable revenue — on completed, paid jobs that our system generates and tracks. If the system doesn't produce jobs, we don't get paid.",
  },
  {
    q: "How do you know which jobs came from you?",
    a: "Every call, form, and booking is tracked back to its source — Google, ads, social, website, or landing pages — so it can be attributed to a completed job.",
  },
  {
    q: "What happens if a customer calls my normal phone?",
    a: "We set up tracked numbers for campaigns and the website. How calls to your existing line factor into attribution is agreed on directly with you before we start.",
  },
  {
    q: "What happens if I cannot handle more jobs?",
    a: "Tell us your current capacity. We pace lead volume to what you can realistically handle so leads aren't generated and wasted.",
  },
  {
    q: "Do I have to pay for advertising?",
    a: "Ad spend is kept separate and transparent from our commission. Budget and channels are agreed on based on your goals and capacity.",
  },
  {
    q: "What happens if a customer cancels or gets refunded?",
    a: "Our commission applies only to completed, paid jobs. Canceled or refunded jobs are not counted.",
  },
  {
    q: "Can I see the tracking data?",
    a: "Yes. You get visibility into tracked leads, bookings, completed jobs, and revenue tied to the system.",
  },
  {
    q: "Who owns the website and domain?",
    a: "Ownership terms are set out clearly in the partnership agreement before work begins — we're glad to walk through the options with you directly.",
  },
  {
    q: "What happens if I want to stop?",
    a: "Terms for ending the partnership are defined in the agreement, with the goal of a fair, low-friction exit for both sides.",
  },
  {
    q: "Do you guarantee a specific number of jobs?",
    a: "No — nobody honestly can. What we guarantee is a tracked, managed acquisition system built to generate and prove qualified leads.",
  },
  {
    q: "Do you work only with cleaning companies?",
    a: "Right now, yes. We're focused on Brooklyn & Queens cleaning businesses — mattress, carpet, couch, and upholstery — to prove the model before expanding to other local-service categories.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions cleaning-business owners actually ask.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
