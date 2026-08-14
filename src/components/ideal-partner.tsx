import {
  Rocket,
  Building,
  UsersRound,
  UserCheck,
  TrendingDown,
  MapPin,
  Sparkles,
  PackagePlus,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const CRITERIA = [
  { icon: Rocket, text: "Newly opened or early-stage" },
  { icon: Building, text: "Independent business" },
  { icon: UsersRound, text: "1–10 employees / crews" },
  { icon: UserCheck, text: "Owner accessible" },
  { icon: TrendingDown, text: "Weak digital acquisition today" },
  { icon: MapPin, text: "Serves Brooklyn or Queens" },
  { icon: Sparkles, text: "Mattress, carpet, couch or upholstery cleaning" },
  { icon: PackagePlus, text: "Can handle additional job volume" },
];

const SCORES = [
  {
    range: "35+",
    label: "Priority",
    intensity: "bg-accent border-accent",
    text: "text-accent-ink",
  },
  {
    range: "25–34",
    label: "Good",
    intensity: "bg-accent/60 border-accent/60",
    text: "text-accent-ink",
  },
  {
    range: "15–24",
    label: "Secondary",
    intensity: "bg-accent/25 border-accent/40",
    text: "text-foreground",
  },
  {
    range: "<15",
    label: "Not a fit",
    intensity: "bg-surface border-border",
    text: "text-muted",
  },
];

export function IdealPartner() {
  return (
    <section id="who-we-work-with" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Who we work with
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for businesses that are ready for more jobs.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CRITERIA.map((c, i) => (
            <Reveal key={c.text} delay={(i % 4) * 0.08}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                <c.icon className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-foreground/90">{c.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            How we prioritize fit
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SCORES.map((score) => (
              <div
                key={score.label}
                className={`rounded-xl border p-5 text-center ${score.intensity}`}
              >
                <p className={`font-display text-xl font-semibold ${score.text}`}>
                  {score.range}
                </p>
                <p className={`mt-1 text-xs ${score.text} opacity-90`}>
                  {score.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
