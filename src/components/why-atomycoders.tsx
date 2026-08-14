import { Reveal } from "@/components/reveal";

const PRINCIPLES = [
  { number: "01", title: "Outcome over deliverables" },
  { number: "02", title: "Tracking over assumptions" },
  { number: "03", title: "Long-term partnership over one-time projects" },
  { number: "04", title: "Reusable systems over custom reinvention" },
  { number: "05", title: "Measured revenue impact over vanity metrics" },
];

export function WhyAtomyCoders() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Why AtomyCoders
            </span>
            <h2 className="font-display mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              We don&apos;t get paid to deliver pages. We get paid to build a
              system that works.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              A website is a component, not the product. What we actually
              sell is a working, measured customer-acquisition system — and
              we only earn when that system produces completed, paid jobs.
            </p>
          </Reveal>

          <div className="flex flex-col divide-y divide-border border-y border-border">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.08}>
                <div className="flex items-baseline gap-5 py-5">
                  <span className="font-display text-sm text-accent">
                    {p.number}
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {p.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
