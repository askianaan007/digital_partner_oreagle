"use client";

import { useMemo, useState } from "react";
import { calculateCommission } from "@/lib/commission";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const PRESETS = [10000, 50000, 100000, 250000, 500000, 1000000];
const MAX_REVENUE = 1000000;

export function CommissionCalculator() {
  const [revenue, setRevenue] = useState(50000);
  const result = useMemo(() => calculateCommission(revenue), [revenue]);

  // Format effective rate mathematically exact (e.g. 1%, 1.8%, 2.25%, 2.88%, 2.994%)
  const formattedEffectiveRate = useMemo(() => {
    if (result.revenue <= 0) return "0%";
    const ratePercentage = result.effectiveRate * 100;
    // Format up to 3 decimal places without trailing zeros
    return `${parseFloat(ratePercentage.toFixed(3))}%`;
  }, [result]);

  return (
    <div className="rounded-3xl border border-accent/30 bg-surface/80 p-6 shadow-2xl backdrop-blur-md sm:p-8">
      {/* Header & Controls */}
      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <label htmlFor="revenue" className="text-xs font-semibold uppercase tracking-wider text-accent">
            What could your monthly revenue look like?
          </label>
          <span className="text-xs text-zinc-400">
            Monthly attributable revenue
          </span>
        </div>

        {/* Value Display + Input Slider */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0">
            <input
              type="number"
              min={0}
              max={MAX_REVENUE}
              step={1000}
              value={revenue}
              onChange={(e) => setRevenue(Math.max(0, Math.min(MAX_REVENUE, Number(e.target.value))))}
              className="font-display w-44 rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-2xl font-bold text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-3xl"
            />
          </div>

          <input
            id="revenue"
            type="range"
            min={0}
            max={MAX_REVENUE}
            step={1000}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-white/10 accent-accent"
            aria-valuetext={currency.format(revenue)}
          />
        </div>

        {/* Preset Selection Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mr-1">
            Quick Select:
          </span>
          {PRESETS.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setRevenue(val)}
              className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition-all ${
                revenue === val
                  ? "border-accent bg-accent/20 text-accent font-semibold"
                  : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {currency.format(val)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Calculation Results Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Monthly Revenue
          </p>
          <p className="font-display mt-2 text-xl font-bold text-foreground sm:text-2xl">
            {currency.format(result.revenue)}
          </p>
        </div>

        <div className="rounded-2xl border border-accent/40 bg-accent/10 p-4 shadow-md shadow-accent/5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            OREAGLE Commission
          </p>
          <p className="font-display mt-2 text-xl font-bold text-accent sm:text-2xl">
            {currency.format(result.totalCommission)}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
            You Retain
          </p>
          <p className="font-display mt-2 text-xl font-bold text-emerald-300 sm:text-2xl">
            {currency.format(result.clientRetains)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Effective Rate
          </p>
          <p className="font-display mt-2 text-xl font-bold text-foreground sm:text-2xl">
            {formattedEffectiveRate}
          </p>
        </div>
      </div>

      {/* Progressive Tier Breakdown Details */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
          Progressive Calculation Breakdown
        </h4>
        <div className="mt-4 space-y-2.5">
          {result.breakdown.map((bracket) => (
            <div
              key={bracket.label}
              className="flex items-center justify-between gap-4 text-xs sm:text-sm"
            >
              <span className="text-zinc-400">
                Tier {bracket.label}{" "}
                <span className="font-semibold text-accent">@ {bracket.rate * 100}%</span>
              </span>
              <span className="font-mono text-foreground">
                {currency.format(bracket.amountInBracket)} →{" "}
                <span className="font-semibold text-accent">{currency.format(bracket.commission)}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-zinc-400">
        Illustrative calculator demonstrating progressive tier math ($0–$1k @ 1%, $1k–$5k @ 2%, $5k+ @ 3%). Commercial terms subject to final partnership agreement.
      </p>
    </div>
  );
}
