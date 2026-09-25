'use client';

import { motion } from 'framer-motion';
import ParticleScene from './ParticleScene';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white_40%,transparent)]">
                <ParticleScene />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-6 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
                        AYUSH <span className="text-primary">XD</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground font-medium mb-12 leading-relaxed px-4">
                        Student by day, trader by passion.<br />
                        Building wealth through discipline & analysis.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/social"
                                className="group inline-flex items-center justify-center rounded-full px-8 h-12 uppercase tracking-widest text-xs font-bold transition-all bg-primary text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                            >
                                Connect with me
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
