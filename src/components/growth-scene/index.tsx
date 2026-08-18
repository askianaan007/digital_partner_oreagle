"use client";

import { Component, type ReactNode, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GrowthSceneFallback } from "./fallback";

const CanvasScene = dynamic(() => import("./canvas-scene"), {
  ssr: false,
  loading: () => <GrowthSceneFallback />,
});

class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_QUERY = "(max-width: 768px)";

function subscribeReduceMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCE_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function subscribeMobile(callback: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

const getServerSnapshotFalse = () => false;

export function GrowthScene() {
  const reduceMotion = useSyncExternalStore(
    subscribeReduceMotion,
    () => window.matchMedia(REDUCE_MOTION_QUERY).matches,
    getServerSnapshotFalse,
  );
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia(MOBILE_QUERY).matches,
    getServerSnapshotFalse,
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex aspect-square w-full max-w-[600px] items-center justify-center"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 12%, transparent), transparent 75%)",
        }}
      />
      {reduceMotion ? (
        <GrowthSceneFallback />
      ) : (
        <SceneErrorBoundary fallback={<GrowthSceneFallback />}>
          <div className="h-full w-full">
            <CanvasScene isMobile={isMobile} />
          </div>
        </SceneErrorBoundary>
      )}
    </motion.div>
  );
}
