import { X, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TRADITIONAL = [
  "Upfront fee",
  "Monthly retainer",
  "Pay before results",
  "Separate vendors",
  "Generic deliverables",
];

const OURS = [
  "Performance-based",
  "One digital partner",
  "Tracked acquisition",
  "Completed-job focus",
  "Aligned incentives",
];

export function NoUpfrontRisk() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            No upfront risk
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Your risk and our incentives are aligned.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface/40 p-7">
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Traditional agency
              </span>
              <ul className="mt-6 space-y-4">
                {TRADITIONAL.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted">
                    <X className="size-4 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-accent/30 bg-surface/60 p-7">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Our model
              </span>
              <ul className="mt-6 space-y-4">
                {OURS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="size-4 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
