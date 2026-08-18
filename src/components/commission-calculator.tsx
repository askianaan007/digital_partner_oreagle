"use client";

import { useMemo, useState } from "react";
import { calculateCommission } from "@/lib/commission";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const MAX_REVENUE = 20000;

export function CommissionCalculator() {
  const [revenue, setRevenue] = useState(8000);
  const result = useMemo(() => calculateCommission(revenue), [revenue]);

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
      <label htmlFor="revenue" className="block text-xs text-muted">
        Monthly attributable completed revenue
      </label>
      <div className="mt-2 flex items-center gap-4">
        <span className="font-display shrink-0 text-2xl font-semibold tabular-nums text-foreground sm:text-3xl">
          {currency.format(revenue)}
        </span>
        <input
          id="revenue"
          type="range"
          min={0}
          max={MAX_REVENUE}
          step={100}
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-border accent-accent"
          aria-valuetext={currency.format(revenue)}
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Revenue", value: currency.format(result.revenue) },
          {
            label: "OREAGLE commission",
            value: currency.format(result.totalCommission),
          },
          { label: "You retain", value: currency.format(result.clientRetains) },
          {
            label: "Effective rate",
            value: `${(result.effectiveRate * 100).toFixed(1)}%`,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-background/40 p-4"
          >
            <p className="text-[11px] uppercase tracking-wide text-muted">
              {stat.label}
            </p>
            <p className="font-display mt-1.5 text-lg font-semibold tabular-nums text-foreground">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 border-t border-border pt-6">
        {result.breakdown.map((bracket) => (
          <div
            key={bracket.label}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <span className="text-muted">
              {bracket.label}{" "}
              <span className="text-foreground/70">@ {bracket.rate * 100}%</span>
            </span>
            <span className="tabular-nums text-foreground">
              {currency.format(bracket.amountInBracket)} →{" "}
              {currency.format(bracket.commission)}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[11px] leading-relaxed text-muted">
        Illustrative calculator. Commercial terms are subject to the final
        partnership agreement.
      </p>
    </div>
  );
}
