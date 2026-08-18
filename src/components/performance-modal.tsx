"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  calculatePerformanceModel,
  SUPPORTED_CURRENCIES,
  formatCurrency,
  formatPercent,
  type PerformanceModelInputs,
} from "@/lib/commission";

interface PerformanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_INPUTS: PerformanceModelInputs = {
  completedJobs: 100,
  averageCustomerValue: 300,
  attributionRate: 0.3,
  advertisingSpend: 1500,
  currency: "USD",
  includeRefunds: false,
  refundRate: 0.05,
};

export function PerformanceModal({ isOpen, onClose }: PerformanceModalProps) {
  const modalId = useId();
  const [inputs, setInputs] = useState<PerformanceModelInputs>(DEFAULT_INPUTS);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showCalculationDetails, setShowCalculationDetails] = useState(false);
  const [showExampleScenario, setShowExampleScenario] = useState(false);

  // Advanced Inputs State
  const [grossMarginRate, setGrossMarginRate] = useState<number>(0.6);
  const [fulfillmentCostPerJob, setFulfillmentCostPerJob] = useState<number>(0);

  const results = calculatePerformanceModel({
    ...inputs,
    grossMarginRate: showAdvanced ? grossMarginRate : undefined,
    fulfillmentCostPerJob: showAdvanced ? fulfillmentCostPerJob : undefined,
  });

  const currencySymbol = results.currencySymbol;

  const handleReset = () => {
    setInputs(DEFAULT_INPUTS);
    setShowAdvanced(false);
    setShowCalculationDetails(false);
    setShowExampleScenario(false);
    setGrossMarginRate(0.6);
    setFulfillmentCostPerJob(0);
  };

  const handleFitClick = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${modalId}-title`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#0b0c0f] shadow-2xl text-foreground max-h-[92vh] flex flex-col my-auto"
          >
            {/* 1. MODAL HEADER */}
            <div className="relative border-b border-white/10 p-5 sm:p-7 bg-surface/50 backdrop-blur-md shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="size-4 sm:size-5" />
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 pr-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Performance Model Calculator
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-zinc-400">Currency:</span>
                    <select
                      value={inputs.currency ?? "USD"}
                      onChange={(e) => setInputs((prev) => ({ ...prev, currency: e.target.value }))}
                      className="rounded-lg border border-white/15 bg-black/80 px-2.5 py-1 text-xs font-semibold text-accent outline-none"
                    >
                      {Object.entries(SUPPORTED_CURRENCIES).map(([code, cur]) => (
                        <option key={code} value={code}>
                          {cur.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowExampleScenario((prev) => !prev)}
                    className="text-[11px] font-semibold text-accent hover:underline hidden sm:inline-block"
                  >
                    View Example
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="size-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <h2 id={`${modalId}-title`} className="font-display mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                See what you&apos;d pay — and what you&apos;d keep.
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                Enter a few numbers to see an example of how the OREAGLE performance model works.
              </p>
              <p className="mt-2 text-[11px] text-zinc-400 italic">
                Illustrative only. Final terms are agreed before a partnership begins.
              </p>
            </div>

            {/* MODAL BODY */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
              
              {/* Optional Example Scenario Box */}
              <AnimatePresence>
                {showExampleScenario && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 text-xs leading-relaxed text-zinc-200">
                      <span className="font-bold text-accent uppercase block mb-1">
                        Illustrative Standard Scenario:
                      </span>
                      100 completed jobs × {currencySymbol}300 average value = {currencySymbol}30,000 total revenue.
                      <br />
                      30% generated by OREAGLE = {currencySymbol}9,000 revenue from OREAGLE customers.
                      <br />
                      5% performance rate = {currencySymbol}450 OREAGLE fee.
                      <br />
                      You keep {currencySymbol}8,550 after OREAGLE fee. If advertising is {currencySymbol}1,500, you keep {currencySymbol}7,050 after advertising.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 2-COLUMN LAYOUT: Inputs (Left) vs Results (Right) */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                
                {/* 2. INPUT SECTION (LEFT) */}
                <div className="lg:col-span-5 space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
                    Your business
                  </h3>

                  {/* Input 1: Completed jobs per month */}
                  <div>
                    <label htmlFor="completedJobs" className="text-xs font-semibold text-zinc-200 block mb-1">
                      Completed jobs per month
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="completedJobs"
                        type="number"
                        min="0"
                        value={inputs.completedJobs || ""}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            completedJobs: parseInt(e.target.value, 10) || 0,
                          }))
                        }
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                      />
                      <span className="absolute right-4 text-xs font-semibold text-zinc-400 pointer-events-none">
                        jobs
                      </span>
                    </div>
                  </div>

                  {/* Input 2: Average job value */}
                  <div>
                    <label htmlFor="avgValue" className="text-xs font-semibold text-zinc-200 block mb-1">
                      Average job value ({currencySymbol})
                    </label>
                    <input
                      id="avgValue"
                      type="number"
                      min="0"
                      value={inputs.averageCustomerValue || ""}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          averageCustomerValue: parseFloat(e.target.value) || 0,
                        }))
                      }
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>

                  {/* Input 3: Customers generated by OREAGLE */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="attrRate" className="text-xs font-semibold text-zinc-200">
                        Customers generated by OREAGLE
                      </label>
                      <span className="text-xs font-mono font-bold text-accent">
                        {formatPercent(inputs.attributionRate)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        id="attrRate"
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={inputs.attributionRate}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            attributionRate: parseFloat(e.target.value),
                          }))
                        }
                        className="flex-1 accent-accent cursor-pointer"
                      />
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={Math.round(inputs.attributionRate * 100)}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setInputs((prev) => ({
                            ...prev,
                            attributionRate: isNaN(val) ? 0 : Math.min(1, Math.max(0, val / 100)),
                          }));
                        }}
                        className="w-16 rounded-xl border border-white/15 bg-black/60 px-2 py-1 text-xs text-center text-accent font-bold outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  {/* Input 4: Advertising spend */}
                  <div>
                    <label htmlFor="adSpend" className="text-xs font-semibold text-zinc-200 block mb-1">
                      Advertising spend ({currencySymbol})
                    </label>
                    <input
                      id="adSpend"
                      type="number"
                      min="0"
                      value={inputs.advertisingSpend || ""}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          advertisingSpend: parseFloat(e.target.value) || 0,
                        }))
                      }
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>

                  {/* 3. ADVANCED OPTIONS (Compact Expandable) */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAdvanced((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline cursor-pointer"
                    >
                      <span>Advanced options</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-300 ${
                          showAdvanced ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {showAdvanced && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4"
                        >
                          {/* Option Toggle: Include Refunds/Cancellations */}
                          <div className="flex items-center justify-between">
                            <label htmlFor="refundToggle" className="text-xs text-zinc-300">
                              Include refunds / cancellations
                            </label>
                            <input
                              id="refundToggle"
                              type="checkbox"
                              checked={inputs.includeRefunds ?? false}
                              onChange={(e) =>
                                setInputs((prev) => ({
                                  ...prev,
                                  includeRefunds: e.target.checked,
                                }))
                              }
                              className="size-4 accent-accent cursor-pointer"
                            />
                          </div>

                          <div className="border-t border-white/10 pt-3 space-y-3">
                            <div>
                              <label className="text-[11px] text-zinc-300 block mb-1">
                                Gross Margin % ({formatPercent(grossMarginRate)})
                              </label>
                              <input
                                type="range"
                                min="0.1"
                                max="1.0"
                                step="0.05"
                                value={grossMarginRate}
                                onChange={(e) => setGrossMarginRate(parseFloat(e.target.value))}
                                className="w-full accent-accent cursor-pointer"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] text-zinc-300 block mb-1">
                                Fulfillment cost per job ({currencySymbol})
                              </label>
                              <input
                                type="number"
                                min="0"
                                value={fulfillmentCostPerJob}
                                onChange={(e) => setFulfillmentCostPerJob(parseFloat(e.target.value) || 0)}
                                className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-1.5 text-xs text-foreground outline-none"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 5. RESULTS — THE MAIN FOCUS (RIGHT) */}
                <div className="lg:col-span-7 space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
                    Estimated results
                  </h3>

                  {/* Clean Visual Streamlined Flow */}
                  <div className="space-y-3">
                    {/* Step 1: Revenue from OREAGLE customers */}
                    <div className="rounded-2xl border border-white/15 bg-surface/60 p-4 flex items-center justify-between backdrop-blur-md">
                      <div>
                        <span className="text-xs font-semibold text-zinc-300 block">
                          Revenue from OREAGLE customers
                        </span>
                        <span className="text-[11px] text-zinc-400 block">
                          of {formatCurrency(results.totalCustomerRevenue, currencySymbol)} total revenue
                        </span>
                      </div>
                      <span className="font-display text-xl sm:text-2xl font-bold text-white">
                        {formatCurrency(results.eligibleAttributableRevenue, currencySymbol)}
                      </span>
                    </div>

                    {/* Arrow Divider */}
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="size-4 text-accent/60" />
                    </div>

                    {/* Step 2: OREAGLE fee */}
                    <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-accent block">
                          OREAGLE fee
                        </span>
                        <span className="text-[11px] text-accent/80 block">
                          {formatPercent(results.effectiveFeeRate)} effective fee rate
                        </span>
                      </div>
                      <span className="font-display text-xl sm:text-2xl font-bold text-accent">
                        -{formatCurrency(results.oreagleFee, currencySymbol)}
                      </span>
                    </div>

                    {/* Arrow Divider */}
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="size-4 text-accent/60" />
                    </div>

                    {/* Step 3: You keep */}
                    <div className="rounded-2xl border border-white/15 bg-surface/60 p-4 flex items-center justify-between backdrop-blur-md">
                      <div>
                        <span className="text-xs font-semibold text-zinc-200 block">
                          You keep
                        </span>
                        <span className="text-[11px] text-zinc-400 block">
                          after the OREAGLE fee ({formatPercent(results.revenueRetainedRate)} retained)
                        </span>
                      </div>
                      <span className="font-display text-xl sm:text-2xl font-bold text-emerald-400">
                        {formatCurrency(results.revenueAfterFee, currencySymbol)}
                      </span>
                    </div>

                    {/* Advertising Spend Row */}
                    <div className="flex items-center justify-between px-4 py-2 text-xs text-zinc-400">
                      <span>Advertising spend:</span>
                      <span className="font-mono font-semibold text-zinc-300">
                        -{formatCurrency(inputs.advertisingSpend, currencySymbol)}
                      </span>
                    </div>
                  </div>

                  {/* 20. HIGHLIGHTED HERO RESULT CARD (Largest Typography) */}
                  <div className="relative overflow-hidden rounded-3xl border border-accent/50 bg-gradient-to-br from-accent/20 via-surface/90 to-black/60 p-6 backdrop-blur-xl shadow-2xl text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent block mb-1">
                      Final Estimated Revenue Remaining
                    </span>

                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground block tracking-tight">
                      {formatCurrency(results.revenueAfterAdvertising, currencySymbol)}
                    </span>

                    <span className="text-xs font-semibold text-emerald-400 block mt-2">
                      AFTER ADVERTISING
                    </span>
                  </div>

                  {/* 11. CALCULATION DETAILS (Compact Expandable) */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowCalculationDetails((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline cursor-pointer"
                    >
                      <span>How is this calculated?</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-300 ${
                          showCalculationDetails ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {showCalculationDetails && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs font-mono text-zinc-300"
                        >
                          <div className="border-b border-white/10 pb-2 space-y-1">
                            <span className="text-[11px] font-bold text-accent font-sans uppercase block">
                              Detailed Math Breakdown:
                            </span>
                            <div>
                              Total Revenue: {inputs.completedJobs} jobs × {formatCurrency(inputs.averageCustomerValue, currencySymbol)} = {formatCurrency(results.totalCustomerRevenue, currencySymbol)}
                            </div>
                            <div>
                              OREAGLE Generated Revenue: {formatCurrency(results.totalCustomerRevenue, currencySymbol)} × {formatPercent(inputs.attributionRate)} = {formatCurrency(results.rawAttributableRevenue, currencySymbol)}
                            </div>
                            {inputs.includeRefunds && (
                              <div className="text-amber-400">
                                Less Refunds (5%): -{formatCurrency(results.refundDeduction, currencySymbol)} = {formatCurrency(results.eligibleAttributableRevenue, currencySymbol)} eligible
                              </div>
                            )}
                          </div>

                          <div className="border-b border-white/10 pb-2 space-y-1">
                            <span className="text-[11px] font-bold text-accent font-sans uppercase block">
                              Progressive Fee Tiers Applied:
                            </span>
                            {results.tierBreakdown.map((t) => (
                              <div key={t.label} className="flex justify-between">
                                <span>{t.label} @ {formatPercent(t.rate)}:</span>
                                <span className="text-accent font-bold">
                                  {formatCurrency(t.tierAttributableRevenue, currencySymbol)} × {formatPercent(t.rate)} = {formatCurrency(t.fee, currencySymbol)}
                                </span>
                              </div>
                            ))}
                            <div className="flex justify-between font-bold text-accent pt-1">
                              <span>Total OREAGLE Fee:</span>
                              <span>{formatCurrency(results.oreagleFee, currencySymbol)}</span>
                            </div>
                          </div>

                          <div className="space-y-1 font-sans text-xs">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Effective Fee Rate:</span>
                              <span className="text-accent font-bold">{formatPercent(results.effectiveFeeRate)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Revenue Retained Rate:</span>
                              <span className="text-emerald-400 font-bold">{formatPercent(results.revenueRetainedRate)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Fee Per Attributable Customer:</span>
                              <span className="text-accent font-bold">{formatCurrency(results.feePerCustomer, currencySymbol)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Remaining Per Attributable Customer:</span>
                              <span className="text-emerald-400 font-bold">{formatCurrency(results.remainingPerCustomer, currencySymbol)}</span>
                            </div>
                            <div className="flex justify-between text-zinc-400 pt-1 border-t border-white/10">
                              <span>Viability Indicator:</span>
                              <span className="text-accent font-bold">{results.viabilityStatus}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>

            {/* 17. BOTTOM MODAL ACTION CTA BAR */}
            <div className="border-t border-white/10 p-5 sm:p-6 bg-surface/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <span className="text-xs text-zinc-300 font-medium text-center sm:text-left">
                Want to see if this could work for your business?
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handleFitClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-xs font-bold text-zinc-950 shadow-xl shadow-accent/20 hover:bg-white transition-all cursor-pointer"
                >
                  <span>See If We&apos;re a Fit</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
