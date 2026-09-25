'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Clock, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {

    return (
        <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary/30 font-sans overflow-x-hidden">
            <PageTransition />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="relative z-10 text-center select-none"
                >
                    <div className="relative inline-flex flex-col items-center justify-center mb-12">
                        <h1 className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-foreground leading-[0.8] relative z-10">
                            WHO IS
                        </h1>
                        <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter text-foreground/5 leading-[0.8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full whitespace-nowrap">
                            AYUSH
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                        Student by day, <span className="text-foreground font-bold">Trader</span> & <span className="text-foreground font-bold">Developer</span> by night.
                        Obsessed with the intersection of financial markets and algorithmic systems.
                    </p>
                </motion.div>

                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Bio Section */}
            {/* Bio & Philosophy Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left Side: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 md:sticky md:top-32"
                    >
                        <div className="flex items-center gap-4">
                            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                                More Than <br />
                                <span className="text-muted-foreground">Just Code.</span>
                            </h2>
                            <div className="relative flex h-6 w-6 self-start mt-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
                                <span className="relative inline-flex rounded-full h-6 w-6 border-2 border-primary/50 bg-primary/10 items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed font-medium text-lg border-l-2 border-foreground/10 pl-6">
                            <p>
                                My journey started with a simple curiosity about how money moves. That curiosity evolved into an obsession
                                with <span className="text-foreground font-bold">market mechanics</span>.
                            </p>
                            <p>
                                I realized early on that the same logic that powers software can decipher financial chaos. I don't just write
                                code; I write <span className="text-foreground font-bold">systems that adapt</span>.
                            </p>
                            <p>
                                Whether it's optimizing a React render cycle or backtesting a volatility strategy, the goal is always the same:
                                <br /><span className="text-primary font-bold">Efficiency & Edge</span>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Philosophy Cards Stack */}
                    <div className="space-y-6">
                        {[
                            {
                                icon: TrendingUp,
                                label: "Marketing Experience",
                                value: "4+ Years",
                                desc: "Driving Growth & Engagement"
                            },
                            {
                                icon: Clock,
                                label: "Hours Traded",
                                value: "5000+",
                                desc: "Continuous market analysis"
                            },
                            {
                                icon: Shield,
                                label: "Win Rate",
                                value: "+46.54%",
                                desc: "Proven statistical edge over 5k+ trades"
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="p-8 rounded-3xl bg-secondary/5 border border-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <card.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-foreground/5 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        {card.label}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-black text-foreground mb-2">{card.value}</h3>
                                <p className="text-muted-foreground font-medium">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Integration */}
            <div className="border-t border-border/50">
                <Timeline />
            </div>

        </main>
    );
}
