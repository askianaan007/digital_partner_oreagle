"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
  onDismiss?: () => void;
}

export function WelcomeScreen({ onDismiss }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Disabled session caching for development so intro displays on every reload
    // const seen = sessionStorage.getItem("atomy_welcome_seen");
    // if (seen === "true") {
    //   setIsVisible(false);
    //   onDismiss?.();
    // }
  }, [onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    // sessionStorage.setItem("atomy_welcome_seen", "true");
    onDismiss?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0b0c0f] text-foreground select-none overflow-hidden"
        >
          {/* Cinematic Eagle Flight Video Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <video
              ref={videoRef}
              src="/Eagle_taking_flight_in_darkness_202608180138.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleDismiss}
              className="h-full w-full object-cover opacity-85"
            />
            {/* Cinematic Gradients & Radial Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(11,12,15,0.5)_65%,#0b0c0f_100%)]" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b0c0f] via-transparent to-[#0b0c0f]/60" />
          </div>

          {/* Top Bar Header */}
          <div className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_with_text.svg"
                alt="OREAGLE"
                className="h-18 sm:h-24 w-auto brightness-0 invert opacity-100"
              />
            </div>
            
            <button
              onClick={handleDismiss}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur-md transition-all hover:border-accent hover:bg-black/70 active:scale-95"
            >
              Skip Intro
              <ArrowRight className="size-3 text-accent" />
            </button>
          </div>

          {/* Center Title & Messaging with Soft Black Fade Backdrop */}
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <div className="rounded-2xl bg-black/30 border border-white/10 px-6 py-8 sm:p-8">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
              >
                PERFORMANCE-BASED DIGITAL GROWTH PARTNER
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="font-display mt-3 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
              >
                You run the business.
                <br />
                We grow it online.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow"
              >
                You focus on delivering your service. We build and manage the digital system that brings you customers.
              </motion.p>
            </div>
          </div>

          {/* Bottom Bar Call to Action */}
          <div className="relative z-10 flex flex-col items-center gap-3 px-6 pb-10">
            <button
              onClick={handleDismiss}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              Enter Experience
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="text-[11px] uppercase tracking-widest text-muted/70">
              CLICK OR WAIT FOR VIDEO TO COMPLETE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
