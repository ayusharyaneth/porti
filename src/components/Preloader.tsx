'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ["CRAFTING", "ENGINEERING", "DESIGNING", "AYUSHXD"];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Percentage counter
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 30ms * 100 = 3000ms

    // Word cycler
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 750); // 750ms * 4 = 3000ms

    // Completion timeout
    const timeout = setTimeout(() => {
      setExit(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 3200); // Slight buffer after 3000ms

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center flex-col overflow-hidden"
        >
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums">
              {percent}
            </span>
            <span className="text-xl md:text-3xl font-bold text-primary italic">%</span>
          </div>

          <div className="h-8 md:h-12 overflow-hidden relative">
            <AnimatePresence mode='wait'>
              <motion.p
                key={words[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm md:text-lg font-bold tracking-[0.5em] text-muted-foreground uppercase text-center"
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-24 h-[1px] bg-foreground/10 mt-8 relative overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
