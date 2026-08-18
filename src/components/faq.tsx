"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PROMINENT_FAQS = [
  {
    q: "Do I pay for the website upfront?",
    a: "No traditional upfront website or marketing fee is required under the performance-based model. Commercial terms and eligibility are agreed before the partnership begins.",
  },
  {
    q: "How does OREAGLE make money?",
    a: "OREAGLE's compensation is tied to eligible, attributable, completed and paid customer revenue generated through the system, according to the agreed partnership terms.",
  },
  {
    q: "How do you track customers?",
    a: "We connect the customer journey across tracked channels such as calls, forms, bookings, campaigns, and other agreed sources. Attribution rules are defined before the partnership begins.",
  },
  {
    q: "Do I pay advertising costs?",
    a: "Advertising arrangements depend on the partnership structure. Any advertising budget, platform costs, or third-party expenses are agreed separately before campaigns begin.",
  },
  {
    q: "Do you guarantee customers?",
    a: "No. We do not guarantee a specific number of customers, bookings, or revenue. Our focus is building, measuring, and continuously optimizing the acquisition system.",
  },
  {
    q: "What makes OREAGLE different?",
    a: "We don't position the website, advertising, SEO, tracking, and optimization as disconnected services. We connect them into one customer acquisition system and measure the journey toward real business outcomes.",
  },
];

const ADDITIONAL_FAQS = [
  {
    q: "What happens if a customer calls my normal business number?",
    a: "If agreed tracking is in place, eligible calls can be routed or tracked so their source can be identified. Calls that cannot be reliably attributed are not automatically treated as OREAGLE-generated revenue.",
  },
  {
    q: "What happens if I cannot handle more customers?",
    a: "Growth only helps if your business can fulfill the demand. We discuss your service capacity before scaling acquisition and can adjust campaigns when capacity becomes limited.",
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
    q: "Do you work only with cleaning companies?",
    a: "No. OREAGLE is designed for service businesses that want to improve digital customer acquisition. The right fit depends on factors such as service demand, capacity, market, trackability, and willingness to work within a performance-based model.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showMore, setShowMore] = useState(false);

  const allFaqs = showMore ? [...PROMINENT_FAQS, ...ADDITIONAL_FAQS] : PROMINENT_FAQS;

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
          {allFaqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left group cursor-pointer"
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

        {/* View All Questions Button */}
        {!showMore && (
          <Reveal delay={0.2} className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold text-accent transition-all hover:bg-white/10 hover:border-accent/40 cursor-pointer"
            >
              <Plus className="size-4" />
              <span>View All Questions ({ADDITIONAL_FAQS.length} More)</span>
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
