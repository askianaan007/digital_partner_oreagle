"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-accent";
const labelClass = "mb-1.5 block text-xs text-muted";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 px-6 py-16 sm:px-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Get in touch
              </span>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                See if we&apos;re a fit.
              </h2>
              <p className="mt-5 max-w-md text-muted">
                A few details about your business help us confirm we can
                actually generate more jobs for you before we talk.
              </p>
              <a
                href="mailto:atomycoders@gmail.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <Mail className="size-4" />
                atomycoders@gmail.com
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-border bg-background/40 p-8 text-center"
                >
                  <CheckCircle2 className="size-10 text-accent" />
                  <h3 className="font-display mt-4 text-xl font-medium">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Thanks for reaching out — we&apos;ll review your details
                    and be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="business" className={labelClass}>
                        Business name
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        required
                        placeholder="Sparkle Clean Co."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="owner" className={labelClass}>
                        Owner / contact name
                      </label>
                      <input
                        id="owner"
                        name="owner"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@business.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
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

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="borough" className={labelClass}>
                        City / borough
                      </label>
                      <select id="borough" name="borough" required className={inputClass}>
                        <option value="">Select one</option>
                        <option value="brooklyn">Brooklyn</option>
                        <option value="queens">Queens</option>
                        <option value="other">Other NYC area</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="services" className={labelClass}>
                        Services offered
                      </label>
                      <input
                        id="services"
                        name="services"
                        type="text"
                        required
                        placeholder="Mattress, carpet, couch, upholstery"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="website" className={labelClass}>
                        Current website (if any)
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        placeholder="yourbusiness.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="gbp" className={labelClass}>
                        Google Business Profile URL
                      </label>
                      <input
                        id="gbp"
                        name="gbp"
                        type="text"
                        placeholder="g.page/your-business"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="findYou" className={labelClass}>
                        How do customers currently find you?
                      </label>
                      <input
                        id="findYou"
                        name="findYou"
                        type="text"
                        placeholder="Referrals, Google, word of mouth..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="capacity" className={labelClass}>
                        Can you handle more jobs right now?
                      </label>
                      <select id="capacity" name="capacity" required className={inputClass}>
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="somewhat">Somewhat</option>
                        <option value="no">Not yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Anything else we should know..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.02] sm:w-auto"
                  >
                    Send message
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
