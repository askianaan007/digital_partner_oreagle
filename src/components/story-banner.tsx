"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const STORY_IMAGES = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
];

export function StoryBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STORY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black mb-8 sm:mb-12 border-0 outline-none overflow-hidden select-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* CSS Grid Stacking Container - Hugs Natural Image Height with Zero Extra Background Padding */}
        <div className="grid grid-cols-1 grid-rows-1 w-full overflow-hidden bg-black border-0 outline-none">
          {STORY_IMAGES.map((imgSrc, index) => {
            const isActive = currentIndex === index;
            return (
              <motion.img
                key={imgSrc}
                src={imgSrc}
                alt={`OREAGLE Flow Step ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="col-start-1 row-start-1 w-full h-auto block select-none border-0 outline-none shadow-none pointer-events-none"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
