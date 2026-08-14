"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const REGIONS = [
  { name: "Westchester", area: "westchester", active: false },
  { name: "Bronx", area: "bronx", active: false },
  { name: "Nearby NJ", area: "nj", active: false },
  { name: "Manhattan", area: "manhattan", active: false },
  { name: "Nassau County", area: "nassau", active: false },
  { name: "Staten Island", area: "staten", active: false },
  { name: "Brooklyn", area: "brooklyn", active: true },
  { name: "Queens", area: "queens", active: true },
] as const;

export function ServiceArea() {
  return (
    <section id="service-area" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Service area
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Initial focus: Brooklyn &amp; Queens.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              We&apos;re starting deliberately narrow — proving the system in
              one metro before expanding. Once the model is validated, we
              expand outward.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Bronx", "Manhattan", "Staten Island", "Nassau County", "Westchester", "Nearby New Jersey"].map(
                (place) => (
                  <span
                    key={place}
                    className="rounded-full border border-dashed border-border px-3.5 py-1.5 text-xs text-muted"
                  >
                    {place}
                  </span>
                )
              )}
            </div>
            <p className="mt-4 text-xs text-muted">
              Expanding after the model is proven.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-surface/40 p-4 sm:p-6">
              <div
                className="grid grid-cols-4 grid-rows-3 gap-2"
                style={{
                  gridTemplateAreas:
                    `". bronx . westchester" "staten manhattan queens nassau" ". brooklyn . nj"`,
                }}
              >
                {REGIONS.map((region, i) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    style={{ gridArea: region.area }}
                    className={
                      region.active
                        ? "relative flex aspect-square flex-col items-center justify-center rounded-xl border border-accent bg-accent/15 p-2 text-center"
                        : "flex aspect-square flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background/30 p-2 text-center"
                    }
                  >
                    {region.active && (
                      <motion.span
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 rounded-xl border border-accent"
                      />
                    )}
                    <span
                      className={
                        region.active
                          ? "relative text-[11px] font-medium text-accent sm:text-xs"
                          : "relative text-[11px] text-muted sm:text-xs"
                      }
                    >
                      {region.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-center text-[11px] text-muted">
                Illustrative regional overview — not to scale.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
