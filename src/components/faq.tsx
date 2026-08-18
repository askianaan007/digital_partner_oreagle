"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FAQS = [
  {
    q: "Do I have to pay for the website upfront?",
    a: "No traditional upfront website or marketing fee is required under the performance-based model. Commercial terms and eligibility are agreed before the partnership begins.",
  },
  {
    q: "How exactly does OREAGLE make money?",
    a: "OREAGLE's compensation is tied to eligible, attributable, completed and paid customer revenue generated through the system, according to the agreed partnership terms.",
  },
  {
    q: "How do you know which customers came from OREAGLE?",
    a: "We connect the customer journey across tracked channels such as calls, forms, bookings, campaigns, and other agreed sources. Attribution rules are defined before the partnership begins.",
  },
  {
    q: "What happens if a customer calls my normal business number?",
    a: "If agreed tracking is in place, eligible calls can be routed or tracked so their source can be identified. Calls that cannot be reliably attributed are not automatically treated as OREAGLE-generated revenue.",
  },
  {
    q: "What happens if I cannot handle more customers?",
    a: "Growth only helps if your business can fulfill the demand. We discuss your service capacity before scaling acquisition and can adjust campaigns when capacity becomes limited.",
  },
  {
    q: "Do I have to pay for advertising?",
    a: "Advertising arrangements depend on the partnership structure. Any advertising budget, platform costs, or third-party expenses are agreed separately before campaigns begin.",
  },
  {
    q: "What happens if a customer cancels or receives a refund?",
    a: "Revenue that does not meet the agreed completed-and-paid criteria is excluded or adjusted according to the partnership agreement.",
  },
  {
    q: "Can I see the tracking data?",
    a: "Yes. The goal is transparency. You should be able to understand where leads came from, how they progressed, and which eligible outcomes were attributed to the system.",
  },
  {
    q: "Who owns the website and domain?",
    a: "Ownership, access, domain registration, hosting, and handover terms should be clearly defined in the final partnership agreement.",
  },
  {
    q: "What happens if I want to stop?",
    a: "The partnership can be ended according to the agreed termination terms. Any outstanding obligations, access, assets, and tracking arrangements are handled according to the agreement.",
  },
  {
    q: "Do you guarantee a specific number of customers or jobs?",
    a: "No. We do not guarantee a specific number of customers, bookings, or revenue. Our focus is building, measuring, and continuously optimizing the acquisition system.",
  },
  {
    q: "Do you work only with cleaning companies?",
    a: "No. OREAGLE is designed for service businesses that want to improve digital customer acquisition. The right fit depends on factors such as service demand, capacity, market, trackability, and willingness to work within a performance-based model.",
  },
  {
    q: "What makes OREAGLE different from a normal marketing agency?",
    a: "We don't position the website, advertising, SEO, tracking, and optimization as disconnected services. We connect them into one customer-acquisition system and measure the journey toward real business outcomes.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            FAQ
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Questions business owners actually ask.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300/90">
            Clear answers about how our performance-based growth partnership works.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-sm font-semibold text-foreground sm:text-base group-hover:text-accent transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : "group-hover:text-accent"
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
                      <p className="pb-5 pr-8 text-xs sm:text-sm leading-relaxed text-zinc-300">
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
