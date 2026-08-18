export interface PerformanceTier {
  threshold: number; // Tier upper limit (e.g. 10000)
  rate: number;      // e.g. 0.05
  label: string;     // e.g. "0 – $10,000"
}

export const DEFAULT_PERFORMANCE_TIERS: PerformanceTier[] = [
  { threshold: 10000, rate: 0.05, label: "0 – $10,000" },
  { threshold: 25000, rate: 0.075, label: "$10,000 – $25,000" },
  { threshold: Infinity, rate: 0.10, label: "Above $25,000" },
];

export const SUPPORTED_CURRENCIES: Record<string, { symbol: string; name: string }> = {
  USD: { symbol: "$", name: "USD ($)" },
  EUR: { symbol: "€", name: "EUR (€)" },
  GBP: { symbol: "£", name: "GBP (£)" },
  AED: { symbol: "AED ", name: "AED (AED)" },
  LKR: { symbol: "Rs. ", name: "LKR (LKR)" },
};

export interface PerformanceModelInputs {
  completedJobs: number;
  averageCustomerValue: number;
  attributionRate: number; // 0.0 to 1.0 (e.g. 0.30)
  advertisingSpend: number;
  currency?: string; // "USD", "EUR", etc.
  includeRefunds?: boolean;
  refundRate?: number; // 0.05 (5%)
  performanceTiers?: PerformanceTier[];
  // Advanced Business Economics
  grossMarginRate?: number; // e.g. 0.60
  fulfillmentCostPerJob?: number;
}

export interface TierBreakdown {
  label: string;
  rate: number;
  tierAttributableRevenue: number;
  fee: number;
}

export interface PerformanceModelResults {
  currencySymbol: string;
  totalCustomerRevenue: number;
  rawAttributableRevenue: number;
  refundDeduction: number;
  eligibleAttributableRevenue: number;
  oreagleFee: number;
  tierBreakdown: TierBreakdown[];
  effectiveFeeRate: number;
  revenueAfterFee: number;
  revenueAfterAdvertising: number;
  revenueRetainedRate: number;
  attributableJobs: number;
  feePerCustomer: number;
  remainingPerCustomer: number;
  viabilityStatus: "Strong margin room" | "Potentially viable" | "Review economics";
  viabilityDesc: string;
  // Advanced economics calculations
  estimatedContributionBeforeOreagle?: number;
  estimatedContributionAfterOreagle?: number;
  estimatedContributionAfterAdvertising?: number;
}

export function formatCurrency(amount: number, symbol: string = "$"): string {
  const safeAmount = isNaN(amount) || !isFinite(amount) ? 0 : Math.round(amount);
  const formatted = Math.abs(safeAmount).toLocaleString("en-US");
  return safeAmount < 0 ? `-${symbol}${formatted}` : `${symbol}${formatted}`;
}

export function formatPercent(rate: number): string {
  const safeRate = isNaN(rate) || !isFinite(rate) ? 0 : rate;
  return `${(safeRate * 100).toFixed(1)}%`;
}

/**
 * Pure Calculation Engine for OREAGLE Performance Model Economics
 */
export function calculatePerformanceModel(
  inputs: PerformanceModelInputs
): PerformanceModelResults {
  // Sanitize and bound all inputs to prevent NaN or broken math
  const safeJobs = Math.max(0, isNaN(inputs.completedJobs) ? 0 : inputs.completedJobs);
  const safeValue = Math.max(0, isNaN(inputs.averageCustomerValue) ? 0 : inputs.averageCustomerValue);
  const safeAttr = Math.max(0, Math.min(1, isNaN(inputs.attributionRate) ? 0 : inputs.attributionRate));
  const safeAd = Math.max(0, isNaN(inputs.advertisingSpend) ? 0 : inputs.advertisingSpend);
  const safeCurrency = inputs.currency && SUPPORTED_CURRENCIES[inputs.currency] ? inputs.currency : "USD";
  const symbol = SUPPORTED_CURRENCIES[safeCurrency].symbol;

  const tiers = inputs.performanceTiers && inputs.performanceTiers.length > 0
    ? inputs.performanceTiers
    : DEFAULT_PERFORMANCE_TIERS;

  // 1. Total Monthly Customer Revenue
  const totalCustomerRevenue = safeJobs * safeValue;

  // 2. Attributable Revenue
  const rawAttributableRevenue = totalCustomerRevenue * safeAttr;

  // 3. Refund / Cancellation Deduction
  const refundRate = inputs.includeRefunds ? Math.max(0, inputs.refundRate ?? 0.05) : 0;
  const refundDeduction = rawAttributableRevenue * refundRate;
  const eligibleAttributableRevenue = Math.max(0, rawAttributableRevenue - refundDeduction);

  // 4. Progressive Tiered Fee Calculation
  let remainingRevToTier = eligibleAttributableRevenue;
  let previousThreshold = 0;
  let oreagleFee = 0;
  const tierBreakdown: TierBreakdown[] = [];

  for (const tier of tiers) {
    if (remainingRevToTier <= 0 && eligibleAttributableRevenue > 0) break;

    const tierCapacity = tier.threshold - previousThreshold;
    const tierAttributableRevenue = Math.max(
      0,
      Math.min(remainingRevToTier, tierCapacity)
    );

    const fee = tierAttributableRevenue * tier.rate;

    if (tierAttributableRevenue > 0 || eligibleAttributableRevenue === 0) {
      tierBreakdown.push({
        label: tier.label,
        rate: tier.rate,
        tierAttributableRevenue,
        fee,
      });
    }

    oreagleFee += fee;
    remainingRevToTier -= tierAttributableRevenue;
    previousThreshold = tier.threshold;

    if (tier.threshold === Infinity) break;
  }

  // 5. Financial Summary Outputs
  const revenueAfterFee = Math.max(0, eligibleAttributableRevenue - oreagleFee);
  const revenueAfterAdvertising = revenueAfterFee - safeAd;
  const effectiveFeeRate = eligibleAttributableRevenue > 0 ? oreagleFee / eligibleAttributableRevenue : 0;
  const revenueRetainedRate = eligibleAttributableRevenue > 0 ? revenueAfterFee / eligibleAttributableRevenue : 1.0;

  // 6. Economics Per Attributable Customer
  const attributableJobs = safeJobs * safeAttr;
  const feePerCustomer = attributableJobs > 0 ? oreagleFee / attributableJobs : 0;
  const remainingPerCustomer = safeValue - feePerCustomer;

  // 7. Business Viability Indicator Logic
  let viabilityStatus: "Strong margin room" | "Potentially viable" | "Review economics" = "Potentially viable";
  let viabilityDesc = "The model appears balanced with healthy remaining revenue.";

  const totalCostOnAttributable = oreagleFee + safeAd;
  const costRatio = eligibleAttributableRevenue > 0 ? totalCostOnAttributable / eligibleAttributableRevenue : 0;

  if (eligibleAttributableRevenue === 0) {
    viabilityStatus = "Review economics";
    viabilityDesc = "Enter attributable customer revenue to evaluate partnership viability.";
  } else if (costRatio > 0.45) {
    viabilityStatus = "Review economics";
    viabilityDesc = "Performance fee and advertising consume a high share (>45%) of attributable revenue. Review customer value or ad budget.";
  } else if (costRatio < 0.20 && revenueAfterAdvertising > 0) {
    viabilityStatus = "Strong margin room";
    viabilityDesc = "Excellent margin retention. Acquisition cost and performance fee represent <20% of generated revenue.";
  }

  // 8. Advanced Contribution (Optional)
  let estimatedContributionBeforeOreagle: number | undefined;
  let estimatedContributionAfterOreagle: number | undefined;
  let estimatedContributionAfterAdvertising: number | undefined;

  if (inputs.grossMarginRate !== undefined || inputs.fulfillmentCostPerJob !== undefined) {
    const marginRate = inputs.grossMarginRate ?? 0.60;
    const fulfillmentCost = inputs.fulfillmentCostPerJob ?? 0;
    const directFulfillment = safeJobs * fulfillmentCost;
    
    estimatedContributionBeforeOreagle = (totalCustomerRevenue * marginRate) - directFulfillment;
    estimatedContributionAfterOreagle = estimatedContributionBeforeOreagle - oreagleFee;
    estimatedContributionAfterAdvertising = estimatedContributionAfterOreagle - safeAd;
  }

  return {
    currencySymbol: symbol,
    totalCustomerRevenue,
    rawAttributableRevenue,
    refundDeduction,
    eligibleAttributableRevenue,
    oreagleFee,
    tierBreakdown,
    effectiveFeeRate,
    revenueAfterFee,
    revenueAfterAdvertising,
    revenueRetainedRate,
    attributableJobs,
    feePerCustomer,
    remainingPerCustomer,
    viabilityStatus,
    viabilityDesc,
    estimatedContributionBeforeOreagle,
    estimatedContributionAfterOreagle,
    estimatedContributionAfterAdvertising,
  };
}
