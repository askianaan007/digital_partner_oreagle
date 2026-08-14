"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Search,
  Megaphone,
  Users,
  Target,
  LineChart,
  type LucideIcon,
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  angle: number;
};

const NODES: Node[] = [
  { id: "website", label: "Website", sub: "Your digital foundation", icon: Globe, angle: -90 },
  { id: "search", label: "Search", sub: "Get discovered", icon: Search, angle: -30 },
  { id: "social", label: "Social", sub: "Build visibility", icon: Megaphone, angle: 30 },
  { id: "leads", label: "Leads", sub: "Capture demand", icon: Users, angle: 90 },
  { id: "conversion", label: "Conversion", sub: "Turn interest into customers", icon: Target, angle: 150 },
  { id: "analytics", label: "Analytics", sub: "Measure what works", icon: LineChart, angle: 210 },
];

const RADIUS = 40;

function nodePosition(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(rad),
    y: 50 + RADIUS * Math.sin(rad),
  };
}

function connectionPath(x: number, y: number, index: number) {
  const dx = x - 50;
  const dy = y - 50;
  const midX = 50 + dx * 0.5;
  const midY = 50 + dy * 0.5;
  const perpX = -dy;
  const perpY = dx;
  const len = Math.hypot(perpX, perpY) || 1;
  const bend = index % 2 === 0 ? 5 : -5;
  const ctrlX = midX + (perpX / len) * bend;
  const ctrlY = midY + (perpY / len) * bend;
  return `M 50 50 Q ${ctrlX} ${ctrlY} ${x} ${y}`;
}

const RESULT_FLOW = ["Attention", "Leads", "Customers", "Growth"];

export function GrowthMindMap() {
  const [active, setActive] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const activeNode = NODES.find((n) => n.id === active) ?? null;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full max-w-[560px]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 14%, transparent), transparent 75%)",
          }}
        />

        <div className="relative aspect-square w-full">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {NODES.map((node, i) => {
              const { x, y } = nodePosition(node.angle);
              const d = connectionPath(x, y, i);
              const isActive = active === node.id;
              const dimmed = active !== null && !isActive;
              return (
                <g key={node.id}>
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth={isActive ? 0.6 : 0.35}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: dimmed ? 0.18 : isActive ? 0.9 : 0.4,
                    }}
                    transition={{
                      pathLength: {
                        duration: reduceMotion ? 0 : 0.9,
                        delay: reduceMotion ? 0 : 0.3 + i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: { duration: 0.3 },
                    }}
                  />
                  {!reduceMotion && (
                    <circle cx="50" cy="50" r="1.1" fill="var(--accent)">
                      <animateMotion
                        dur="3.2s"
                        begin={`${1.4 + i * 0.4}s`}
                        repeatCount="indefinite"
                        path={d}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 z-10 flex size-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent bg-accent/15 text-center backdrop-blur-sm"
          >
            <span className="font-display text-[clamp(0.65rem,1.4vw,0.9rem)] font-semibold leading-tight text-foreground">
              Digital
              <br />
              Growth
            </span>
          </motion.div>

          {NODES.map((node, i) => {
            const { x, y } = nodePosition(node.angle);
            const isActive = active === node.id;
            const dimmed = active !== null && !isActive;
            return (
              <motion.button
                key={node.id}
                type="button"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: dimmed ? 0.45 : 1,
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{
                  opacity: {
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : 0.6 + i * 0.12,
                  },
                  scale: { duration: 0.25 },
                }}
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive((prev) => (prev === node.id ? null : node.id))}
                aria-label={`${node.label}: ${node.sub}`}
                aria-pressed={isActive}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                className="absolute z-10 flex w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 rounded-2xl border border-border bg-surface/80 px-2 py-2.5 text-center backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:gap-2 sm:px-3 sm:py-3"
              >
                <span
                  className={`flex size-7 items-center justify-center rounded-full sm:size-9 ${
                    isActive ? "bg-accent text-accent-ink" : "bg-accent/10 text-accent"
                  }`}
                >
                  <node.icon className="size-3.5 sm:size-4" />
                </span>
                <span className="text-[10px] font-medium leading-tight text-foreground sm:text-xs">
                  {node.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex h-10 items-center justify-center text-center">
        <motion.p
          key={activeNode?.id ?? "idle"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-muted"
        >
          {activeNode ? activeNode.sub : "Hover or tap a node to explore the system"}
        </motion.p>
      </div>

      <div className="mt-6 flex w-full max-w-sm items-center justify-between gap-1">
        {RESULT_FLOW.map((stage, i) => (
          <div key={stage} className="flex flex-1 items-center gap-1">
            <span className="flex-1 whitespace-nowrap text-center text-[10px] uppercase tracking-wide text-muted sm:text-[11px]">
              {stage}
            </span>
            {i < RESULT_FLOW.length - 1 && (
              <span className="relative h-px flex-1 shrink-0 bg-border">
                {!reduceMotion && (
                  <motion.span
                    className="absolute -top-[3px] size-1.5 rounded-full bg-accent"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
