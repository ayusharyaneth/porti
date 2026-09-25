'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Target, Trophy, Cpu, Users, Activity, ArrowUpRight, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const stats = [
    {
        label: "Trade Volume",
        value: 12.5,
        suffix: "M+",
        description: "Total volume processed across liquid markets.",
        icon: Activity,
        color: "from-emerald-500 to-teal-500",
        detail: "+15% from last quarter"
    },
    {
        label: "Success Rate",
        value: 74,
        suffix: "%",
        description: "Average win rate on high-conviction setups.",
        icon: Target,
        color: "from-blue-500 to-indigo-500",
        detail: "Consistently above target"
    },
    {
        label: "Network",
        value: 50,
        suffix: "K+",
        description: "Community reach across social platforms.",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        detail: "Growing daily"
    }
];

const milestones = [
    {
        title: "Top 1% Trader Status",
        org: "Prop Firm Verified",
        date: "2023",
        desc: "Achieved elite status within the top tier of active traders globally, demonstrating consistent risk management and execution.",
        icon: Trophy,
        tag: "Elite",
        category: "Performance"
    },
    {
        title: "Algorithmic Breakthrough",
        org: "Custom Systems",
        date: "2024",
        desc: "Developed a proprietary HFT logic that reduced latency by 40%, optimizing entry signals in volatile market conditions.",
        icon: Cpu,
        tag: "System",
        category: "Technical"
    },
    {
        title: "Community Growth",
        org: "Social Presence",
        date: "2024",
        desc: "Hit 50,000+ followers across major platforms for market insights, building a trusted brand in the trading space.",
        icon: Users,
        tag: "Social",
        category: "Impact"
    },
    {
        title: "Alpha Achievement",
        org: "Private Fund",
        date: "2024",
        desc: "Delivered consistent 15% monthly alpha over a 6-month period, outperforming market benchmarks significantly.",
        icon: Award,
        tag: "Alpha",
        category: "Strategy"
    }
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number, suffix: string, decimals?: number }) {
    const [displayValue, setDisplayValue] = useState(0);
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });

    useEffect(() => {
        springValue.set(value);
    }, [springValue, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(latest);
        });
    }, [springValue]);

    return (
        <span>
            {displayValue.toFixed(decimals)}{suffix}
        </span>
    );
}

export default function Achievements() {

    return (
        <main className="relative min-h-screen bg-background text-foreground transition-colors overflow-hidden">
            <PageTransition />

            <Navbar />

            {/* Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[140px] animate-pulse [animation-delay:2s]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-24 md:pb-40">
                <div className="mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
                    >
                        <h1 className="text-[18vw] sm:text-[14vw] lg:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-6 md:mb-8">
                            Levelling <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-blue-600">
                                Up.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.0, duration: 1 }}
                        className="relative lg:max-w-xl"
                    >
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary to-transparent hidden lg:block" />
                        <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-12">
                            Success in the markets isn&apos;t about being right—it&apos;s about being disciplined. Every milestone here is a testament to that philosophy.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-40">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.6 + (index * 0.1), duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="h-full bg-card border border-border p-8 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] overflow-hidden group-hover:border-primary/30 transition-all duration-700 shadow-sm">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-12 sm:mb-20 lg:mb-24">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary/50 border border-border text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-muted-foreground">
                                            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                            Live
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-2 leading-none">
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                                        </h3>
                                        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-primary mb-4 sm:mb-8">
                                            {stat.label}
                                        </p>
                                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-[280px]">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-12 md:mb-20"
                    >
                        Key Exhibits
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="h-full bg-card/20 border border-border/40 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] backdrop-blur-sm hover:bg-primary/5 hover:border-primary/20 transition-all duration-700">
                                    <div className="flex justify-between items-start mb-8 md:mb-10">
                                        <div className="text-primary/30 group-hover:text-primary group-hover:rotate-12 transition-all duration-500">
                                            <item.icon className="w-8 h-8 md:scale-100 scale-75" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase">
                                                {item.date}
                                            </span>
                                            <span className="text-[8px] md:text-[9px] font-bold text-primary/40 uppercase mt-1">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="text-xl md:text-3xl font-black tracking-tight uppercase group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                                        </div>
                                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
                                            {item.org}
                                        </p>
                                        <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed group-hover:text-foreground transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
