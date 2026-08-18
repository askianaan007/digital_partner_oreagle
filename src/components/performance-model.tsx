import { Reveal } from "@/components/reveal";
import { CommissionCalculator } from "@/components/commission-calculator";
import { COMMISSION_BRACKETS } from "@/lib/commission";

const INTENSITY = ["bg-accent/30", "bg-accent/60", "bg-accent"];

export function PerformanceModel() {
  return (
    <section id="performance-model" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Performance Model
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            You grow. We earn from the result.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            No traditional upfront website or marketing fee. OREAGLE&apos;s compensation is calculated on attributable, completed and paid revenue generated through the system.
          </p>
        </Reveal>

        {/* Tier Cards Overview */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {COMMISSION_BRACKETS.map((bracket, i) => (
              <div
                key={bracket.label}
                className="rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{bracket.label}</span>
                  <span className="font-display text-2xl font-bold text-accent">
                    {bracket.rate * 100}%
                  </span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${INTENSITY[i]}`} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Marginal progressive description */}
        <Reveal delay={0.15} className="mt-6">
          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-zinc-300">
            This is a <span className="font-semibold text-accent">marginal, progressive</span> model, not a flat rate — each bracket only applies to the revenue within it. For example, on $50,000 of monthly attributable revenue, the first $1,000 is billed at 1% ($10), the next $4,000 at 2% ($80), and the remaining $45,000 at 3% ($1,350) — totaling $1,440 (effective rate of 2.88%).
          </p>
        </Reveal>

        {/* Interactive Calculator */}
        <Reveal delay={0.2} className="mt-10">
          <CommissionCalculator />
        </Reveal>
      </div>
    </section>
  );
}
