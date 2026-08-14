export type CommissionBracket = {
  label: string;
  rate: number;
  min: number;
  max: number | null;
};

export const COMMISSION_BRACKETS: CommissionBracket[] = [
  { label: "$0 – $1,000", rate: 0.01, min: 0, max: 1000 },
  { label: "$1,000 – $5,000", rate: 0.02, min: 1000, max: 5000 },
  { label: "$5,000+", rate: 0.03, min: 5000, max: null },
];

export type BracketBreakdown = {
  label: string;
  rate: number;
  amountInBracket: number;
  commission: number;
};

export type CommissionResult = {
  revenue: number;
  breakdown: BracketBreakdown[];
  totalCommission: number;
  clientRetains: number;
  effectiveRate: number;
};

export function calculateCommission(revenue: number): CommissionResult {
  const safeRevenue = Math.max(0, revenue);

  const breakdown: BracketBreakdown[] = COMMISSION_BRACKETS.map((bracket) => {
    const bracketCeiling = bracket.max ?? Infinity;
    const amountInBracket = Math.max(
      0,
      Math.min(safeRevenue, bracketCeiling) - bracket.min
    );
    return {
      label: bracket.label,
      rate: bracket.rate,
      amountInBracket,
      commission: amountInBracket * bracket.rate,
    };
  });

  const totalCommission = breakdown.reduce((sum, b) => sum + b.commission, 0);

  return {
    revenue: safeRevenue,
    breakdown,
    totalCommission,
    clientRetains: safeRevenue - totalCommission,
    effectiveRate: safeRevenue > 0 ? totalCommission / safeRevenue : 0,
  };
}
