'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChartLine, Code, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const skillsData = [
    {
        category: "QUANTITATIVE",
        icon: ChartLine,
        color: "from-emerald-500 to-teal-500",
        description: "Deep statistical analysis and risk modeling for volatile markets.",
        items: [
            { name: "Technical Analysis", spec: "Advanced", level: 95 },
            { name: "Risk Management", spec: "Systemic", level: 90 },
            { name: "Market Psychology", spec: "Behavioral", level: 92 }
        ]
    },
    {
        category: "DEVELOPMENT",
        icon: Code,
        color: "from-blue-500 to-indigo-500",
        description: "Building robust, scalable applications with modern tech stacks.",
        items: [
            { name: "Python / Quant", spec: "Logic", level: 88 },
            { name: "Next.js / React", spec: "Interface", level: 94 },
            { name: "TypeScript", spec: "Architecture", level: 85 }
        ]
    },
    {
        category: "INFRASTRUCTURE",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        description: "Architecting secure and efficient data distribution systems.",
        items: [
            { name: "PostgreSQL", spec: "Database", level: 80 },
            { name: "API Design", spec: "Integration", level: 90 },
            { name: "Cloud Ops", spec: "Scale", level: 75 }
        ]
    }
];

export default function Skills() {
    const ref = useRef(null);

    return (
        <main ref={ref} className="relative min-h-screen bg-background text-foreground transition-colors overflow-hidden">
            <PageTransition />

            <Navbar />

            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
                    >
                        <h1 className="text-[14vw] sm:text-[12vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase italic">
                            Technical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600">
                                Arsenal.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0, duration: 1 }}
                        className="mt-8 text-muted-foreground text-base sm:text-lg font-medium leading-relaxed border-l-2 border-emerald-500/30 pl-6 sm:pl-8 max-w-2xl"
                    >
                        Deep statistical analysis and risk modeling for volatile markets.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.6 + (index * 0.1) }}
                            className="group relative bg-card/30 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-border/50 hover:bg-primary/5 transition-colors duration-500 overflow-hidden"
                        >
                            <div className="relative z-10 space-y-12">
                                <div className="flex justify-between items-start">
                                    <div className={cn("p-4 rounded-2xl bg-gradient-to-br bg-opacity-10 text-foreground shadow-2xl", category.color)}>
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-[0.4em] text-muted-foreground uppercase">
                                        NODE: 0{index + 1}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xs font-black tracking-[0.5em] text-emerald-500 uppercase mb-4">
                                        {category.category}
                                    </h3>
                                    <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-12">
                                        {category.description}
                                    </p>

                                    <div className="space-y-10">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="space-y-4">
                                                <div className="flex justify-between items-end">
                                                    <div className="space-y-1">
                                                        <p className="text-[8px] uppercase tracking-widest font-black text-muted-foreground">
                                                            {item.spec}
                                                        </p>
                                                        <h4 className="text-lg font-black tracking-tight uppercase italic">
                                                            {item.name}
                                                        </h4>
                                                    </div>
                                                    <span className="text-xs font-black text-emerald-500">
                                                        {item.level}%
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                                                        className={cn("h-full bg-gradient-to-r", category.color)}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
