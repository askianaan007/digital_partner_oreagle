"use client";

import { motion } from "framer-motion";

interface OreagleLoaderProps {
  /**
   * If true, renders fixed inset-0 overlay.
   * If false, renders relative container.
   * @default true
   */
  fullscreen?: boolean;
  /**
   * If true, background is black transparent (bg-black/85 backdrop-blur-md).
   * If false, background is solid deep black (#0b0c0f or bg-black).
   * @default true
   */
  transparent?: boolean;
  /**
   * Size of the logo loader in pixels.
   * @default 140
   */
  size?: number;
  /**
   * Additional custom CSS classes.
   */
  className?: string;
  /**
   * Optional callback triggered on backdrop or close button click.
   */
  onClose?: () => void;
}

export function OreagleLoader({
  fullscreen = true,
  transparent = true,
  size = 220,
  className = "",
  onClose,
}: OreagleLoaderProps) {
  // Coordinates matching the exact bounding box (275, 286, 278, 184) from logo.png
  const stroke1Path = "M 278 440 C 330 380, 430 325, 552 298 C 445 348, 360 395, 278 440 Z";
  const stroke2Path = "M 312 426 C 362 408, 418 392, 466 390 C 418 410, 362 424, 312 426 Z";

  // Drawing light line animation variants (3 second seamless loop)
  const lineDrawVariant1 = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 2.8,
        ease: [0.4, 0, 0.2, 1] as const,
        repeat: Infinity,
        times: [0, 0.45, 0.8, 1],
      },
    },
  };

  const lineDrawVariant2 = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 2.8,
        ease: [0.4, 0, 0.2, 1] as const,
        repeat: Infinity,
        delay: 0.2,
        times: [0, 0.45, 0.8, 1],
      },
    },
  };

  // Pure white authentic logo reveal variant
  const authenticLogoVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0, 0.95, 0],
      transition: {
        duration: 2.8,
        ease: "easeInOut" as const,
        repeat: Infinity,
        times: [0, 0.4, 0.75, 1],
      },
    },
  };

  const containerClasses = fullscreen
    ? `fixed inset-0 z-[200] flex flex-col items-center justify-center select-none ${transparent
      ? "bg-black/85 backdrop-blur-md"
      : "bg-[#0b0c0f]"
    } ${className}`
    : `relative flex flex-col items-center justify-center select-none ${transparent ? "bg-black/80 backdrop-blur-sm" : "bg-[#0b0c0f]"
    } ${className}`;

  return (
    <div className={containerClasses} onClick={onClose}>
      {fullscreen && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 z-[210] rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white cursor-pointer"
        >
          Close Loader ✕
        </button>
      )}

      <div className="relative flex items-center justify-center pointer-events-none">
        {/* Soft subtle ambient light glow behind logo */}
        <motion.div
          animate={{
            opacity: [0, 0.2, 0.5, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            times: [0, 0.4, 0.75, 1],
          }}
          className="absolute size-56 rounded-full bg-white/20 blur-3xl pointer-events-none"
        />

        {/* 100% Authentic White AtomyCoders Symbol from logo.svg */}
        <motion.div
          variants={authenticLogoVariant}
          initial="initial"
          animate="animate"
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="OREAGLE Symbol"
            style={{
              width: size,
              height: size,
              filter: "brightness(0) invert(1) drop-shadow(0 0 14px rgba(255, 255, 255, 1))",
              objectFit: "contain",
            }}
          />
        </motion.div>

        {/* Light Pen Outline Drawing Animation */}
        <svg
          width={size * 1.4}
          height={size * 1.4}
          viewBox="260 270 310 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible relative z-10"
        >
          <defs>
            <filter id="whiteGlowExact" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stroke 1 Light Pen */}
          <motion.path
            d={stroke1Path}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#whiteGlowExact)"
            variants={lineDrawVariant1}
            initial="initial"
            animate="animate"
          />

          {/* Stroke 2 Light Pen */}
          <motion.path
            d={stroke2Path}
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#whiteGlowExact)"
            variants={lineDrawVariant2}
            initial="initial"
            animate="animate"
          />
        </svg>
      </div>
    </div>
  );
}
