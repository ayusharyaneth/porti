'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
                >
                    <button
                        onClick={scrollToTop}
                        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full shadow-2xl hover:border-primary/50 transition-colors"
                    >
                        <svg
                            viewBox="0 0 48 48"
                            className="absolute inset-0 w-full h-full -rotate-90 p-1"
                        >
                            <circle
                                cx="24"
                                cy="24"
                                r="20"
                                className="stroke-primary/10 fill-none stroke-2 w-full h-full"
                            />
                            <motion.circle
                                cx="24"
                                cy="24"
                                r="20"
                                className="stroke-primary fill-none stroke-2"
                                style={{ pathLength: scaleX }}
                            />
                        </svg>
                        <div className="relative z-10 text-primary group-hover:-translate-y-1 transition-transform">
                            <ArrowUp className="w-6 h-6" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
