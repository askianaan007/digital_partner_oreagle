import { Reveal } from "@/components/reveal";
import { CommissionCalculator } from "@/components/commission-calculator";
import { COMMISSION_BRACKETS } from "@/lib/commission";

const INTENSITY = ["bg-accent/20", "bg-accent/55", "bg-accent"];

export function PerformanceModel() {
  return (
    <section id="performance-model" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Performance model
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Why pay an agency before the system works?
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            No traditional upfront website or marketing fee. Our compensation
            is tied to attributable, completed and paid jobs generated
            through the system.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {COMMISSION_BRACKETS.map((bracket, i) => (
              <div
                key={bracket.label}
                className="rounded-xl border border-border bg-surface/60 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{bracket.label}</span>
                  <span className="font-display text-xl font-semibold text-foreground">
                    {bracket.rate * 100}%
                  </span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div className={`h-full rounded-full ${INTENSITY[i]}`} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            This is a <span className="text-foreground">marginal, progressive</span>{" "}
            model, not a cliff rate — each bracket only applies to the revenue
            within it. Example: on $8,000 of tracked completed revenue, the
            first $1,000 is billed at 1% ($10), the next $4,000 at 2% ($80),
            and the remaining $3,000 at 3% ($90) — a total of $180.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <CommissionCalculator />
        </Reveal>
      </div>
    </section>
  );
}
