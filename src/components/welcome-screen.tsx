"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
  onDismiss?: () => void;
}

export function WelcomeScreen({ onDismiss }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
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
          <div className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_potrait.png"
                alt="OREAGLE"
                className="h-10 sm:h-16 md:h-20 w-auto brightness-0 invert opacity-100 object-contain transition-all"
              />
            </div>

            <button
              onClick={handleDismiss}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-md transition-all hover:border-accent hover:bg-black/80 active:scale-95 cursor-pointer"
            >
              <span>Skip Intro</span>
              <ArrowRight className="size-3 text-accent" />
            </button>
          </div>

          {/* Center Title & Messaging with Soft Black Fade Backdrop */}
          <div className="relative z-10 mx-auto max-w-2xl px-4 text-center my-auto">
            <div className="rounded-3xl bg-black/40 border border-white/10 p-5 sm:p-8 backdrop-blur-md shadow-2xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-accent"
              >
                PERFORMANCE-BASED CUSTOMER ACQUISITION
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="font-display mt-2 sm:mt-3 text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl"
              >
                You run the business.
                <br />
                We grow it online.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-3 text-xs sm:text-base text-zinc-200/90 max-w-lg mx-auto leading-relaxed drop-shadow"
              >
                You focus on delivering your service. We build and manage the digital system that brings you customers.
              </motion.p>
            </div>
          </div>

          {/* Bottom Bar Call to Action */}
          <div className="relative z-10 flex flex-col items-center gap-2 px-4 pb-6 sm:pb-10">
            <button
              onClick={handleDismiss}
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-zinc-950 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-xl shadow-accent/20 cursor-pointer"
            >
              <span>Enter Experience</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-zinc-400 uppercase">
              CLICK OR WAIT FOR VIDEO TO COMPLETE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
