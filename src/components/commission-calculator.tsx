"use client";

import { useMemo, useState } from "react";
import {
  calculatePerformanceModel,
  formatCurrency,
  formatPercent,
  TierBreakdown,
} from "@/lib/commission";

const PRESETS = [10000, 50000, 100000, 250000, 500000, 1000000];
const MAX_REVENUE = 1000000;

export function CommissionCalculator() {
  const [revenue, setRevenue] = useState(50000);

  const result = useMemo(() => {
    // 50 completed jobs with variable average customer value to match total revenue input
    const averageValue = revenue > 0 ? revenue / 50 : 0;
    return calculatePerformanceModel({
      completedJobs: 50,
      averageCustomerValue: averageValue,
      attributionRate: 1.0, // 100% attributable for simple slider illustration
      advertisingSpend: 0,
    });
  }, [revenue]);

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
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-accent"
          />
        </div>

        {/* Quick Presets */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs text-zinc-500 font-medium">Quick presets:</span>
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setRevenue(preset)}
              className={`rounded-full px-3 py-1 text-xs font-mono transition-colors cursor-pointer ${
                revenue === preset
                  ? "bg-accent text-zinc-950 font-bold"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {formatCurrency(preset)}
            </button>
          ))}
        </div>
      </div>

      {/* Primary KPI Results Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <p className="text-xs font-medium text-zinc-400">Total Customer Revenue</p>
          <p className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            {formatCurrency(result.totalCustomerRevenue)}
          </p>
        </div>

        <div className="rounded-2xl border border-accent/40 bg-accent/10 p-4">
          <p className="text-xs font-medium text-accent">OREAGLE Performance Fee</p>
          <p className="font-display mt-2 text-2xl font-bold text-accent sm:text-3xl">
            {formatCurrency(result.oreagleFee)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <p className="text-xs font-medium text-zinc-400">Effective Rate</p>
          <p className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            {formatPercent(result.effectiveFeeRate)}
          </p>
        </div>
      </div>

      {/* Progressive Tier Breakdown Details */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
          Progressive Tier Calculation Breakdown
        </h4>
        <div className="mt-4 space-y-2.5">
          {result.tierBreakdown.map((bracket: TierBreakdown) => (
            <div
              key={bracket.label}
              className="flex items-center justify-between gap-4 text-xs sm:text-sm"
            >
              <span className="text-zinc-400">
                Tier {bracket.label}{" "}
                <span className="font-semibold text-accent">@ {bracket.rate * 100}%</span>
              </span>
              <span className="font-mono text-foreground">
                {formatCurrency(bracket.tierAttributableRevenue)} →{" "}
                <span className="font-semibold text-accent">{formatCurrency(bracket.fee)}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-zinc-400">
        Illustrative performance calculator demonstrating progressive tier economics (0–$10k @ 5%, $10k–$25k @ 7.5%, $25k+ @ 10%). Commercial terms subject to final partnership agreement.
      </p>
    </div>
  );
}
