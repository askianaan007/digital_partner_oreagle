"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const CanvasBackground = dynamic(() => import("./canvas-background"), {
  ssr: false,
});

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

export function InteractiveBackground() {
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

  if (reduceMotion) return null;

  return <CanvasBackground isMobile={isMobile} />;
}
