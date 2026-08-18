"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300";

const FIND_CHANNELS = [
  "Google Search",
  "Google Maps",
  "Referrals",
  "Social Media",
  "Paid Advertising",
  "Word of Mouth",
  "Repeat Customers",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  function toggleChannel(channel: string) {
    setSelectedChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 px-6 py-12 sm:px-14 sm:py-16 backdrop-blur-xl shadow-2xl">
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Contact Info */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Get in Touch
                </span>
                <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  See if we&apos;re a fit.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-zinc-300/90 sm:text-lg">
                  Tell us how your business currently gets customers. We&apos;ll look for where your digital acquisition can improve.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:atomycoders@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    <Mail className="size-4 text-accent" />
                    atomycoders@gmail.com
                  </a>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/10 p-5">
                  <ShieldCheck className="size-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    We review all submissions confidentially to evaluate digital customer-acquisition opportunities for your service area.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-3xl border border-accent/40 bg-black/50 p-8 text-center"
                  >
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/40 mb-4">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Submission Received
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">
                      Thanks for providing your details — we&apos;ll review your market and capacity and reach out if there appears to be a strong opportunity to work together.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* SECTION 1: Business Information */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                        1. Business Information
                      </h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="business" className={labelClass}>
                            Business Name
                          </label>
                          <input
                            id="business"
                            name="business"
                            type="text"
                            required
                            placeholder="Your business name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="owner" className={labelClass}>
                            Owner / Contact Name
                          </label>
                          <input
                            id="owner"
                            name="owner"
                            type="text"
                            required
                            placeholder="Your name"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                        <div>
                          <label htmlFor="email" className={labelClass}>
                            Business Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@business.com"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass}>
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="(555) 555-5555"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: Business & Market */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                        2. Business & Market
                      </h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="location" className={labelClass}>
                            Business Location / Service Area
                          </label>
                          <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            placeholder="City, region, or service area"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="services" className={labelClass}>
                            What services do you provide?
                          </label>
                          <input
                            id="services"
                            name="services"
                            type="text"
                            required
                            placeholder="List your main services"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                        <div>
                          <label htmlFor="website" className={labelClass}>
                            Current Website <span className="text-zinc-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="website"
                            name="website"
                            type="text"
                            placeholder="https://yourbusiness.com"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="gbp" className={labelClass}>
                            Google Business Profile URL <span className="text-zinc-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="gbp"
                            name="gbp"
                            type="text"
                            placeholder="Google Business Profile URL"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: Customer Acquisition */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                        3. Customer Acquisition
                      </h3>

                      <label className={labelClass}>
                        How do customers currently find you? <span className="text-zinc-500 font-normal">(Select all that apply)</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mt-2">
                        {FIND_CHANNELS.map((channel) => {
                          const isChecked = selectedChannels.includes(channel);
                          return (
                            <button
                              key={channel}
                              type="button"
                              onClick={() => toggleChannel(channel)}
                              className={`rounded-xl border px-3 py-2 text-xs font-medium text-left transition-all ${
                                isChecked
                                  ? "border-accent bg-accent/20 text-accent font-semibold"
                                  : "border-white/10 bg-black/40 text-zinc-300 hover:border-white/20"
                              }`}
                            >
                              {channel}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-4">
                        <label htmlFor="flow" className={labelClass}>
                          How would you describe your current flow of new customers?
                        </label>
                        <select id="flow" name="flow" required className={inputClass}>
                          <option value="">Select customer flow</option>
                          <option value="Very low">Very low</option>
                          <option value="Inconsistent">Inconsistent</option>
                          <option value="Steady">Steady</option>
                          <option value="Strong">Strong</option>
                          <option value="Growing">Growing</option>
                        </select>
                      </div>
                    </div>

                    {/* SECTION 4: Capacity */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                        4. Capacity
                      </h3>

                      <label htmlFor="capacity" className={labelClass}>
                        Can your business handle additional customers right now?
                      </label>
                      <select id="capacity" name="capacity" required className={inputClass}>
                        <option value="">Select capacity</option>
                        <option value="Yes — we have capacity">Yes — we have capacity</option>
                        <option value="Somewhat — limited capacity">Somewhat — limited capacity</option>
                        <option value="Not currently">Not currently</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>

                    {/* SECTION 5: Additional Information */}
                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Anything else we should know?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about your goals, current challenges, or what you'd like to improve..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-bold text-zinc-950 shadow-xl shadow-accent/20 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>See If We&apos;re a Fit</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="mt-3 text-center text-[11px] text-zinc-400">
                        We&apos;ll review your information and contact you if there appears to be a strong opportunity to work together.
                      </p>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
