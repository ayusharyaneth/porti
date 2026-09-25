'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition() {
    const [showLanding, setShowLanding] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLanding(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showLanding && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, scale: 1, letterSpacing: "0.5em" }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-base md:text-3xl font-black uppercase tracking-[0.5em] text-center px-4"
                    >
                        Landing You There
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
