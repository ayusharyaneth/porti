'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const projects = [
    {
        title: "Degen Analytics",
        category: "Trading Tools",
        description: "Real-time on-chain data visualization for DEX markets with high-frequency updates.",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1000",
        tags: ["React", "Rust", "Solana API"],
        link: "#",
        github: "#"
    },
    {
        title: "Quantum Bridge",
        category: "Infrastructure",
        description: "Cross-chain liquidity aggregator focused on low-latency execution and minimal slippage.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        tags: ["Next.js", "Solidity", "Tailwind"],
        link: "#",
        github: "#"
    },
    {
        title: "Vortex UI",
        category: "Design System",
        description: "A futuristic component library built for rapid deployment of high-performance web apps.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        tags: ["TypeScript", "Framer Motion", "Radix"],
        link: "#",
        github: "#"
    }
];

export default function Portfolio() {

    return (
        <main className="min-h-screen bg-background pt-32 overflow-hidden">
            <PageTransition />

            <Navbar />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
                    >
                        <h1 className="text-[14vw] sm:text-[12vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase italic">
                            Portfolio <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600">
                                Works.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0, duration: 1 }}
                        className="mt-8 text-muted-foreground text-base sm:text-lg font-medium leading-relaxed border-l-2 border-emerald-500/30 pl-6 sm:pl-8 max-w-2xl"
                    >
                        A curated selection of digital products, focusing on performance, aesthetics, and user-centric architecture.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-20 sm:gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 + 1.6 }
                                }
                            }}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 },
                                    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-card/50 border border-border/50">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>

                            <motion.div
                                className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''} space-y-8`}
                            >
                                <div className="space-y-4">
                                    <motion.h3
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        className="text-4xl font-black uppercase tracking-tighter italic"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]"
                                    >
                                        {project.category}
                                    </motion.p>
                                </div>

                                <motion.p
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="text-muted-foreground font-medium leading-relaxed"
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary/50 border border-border/50 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="pt-8 flex gap-6"
                                >
                                    <Link href={project.link} className="flex items-center gap-2 text-foreground hover:text-emerald-500 transition-colors group/link">
                                        <span className="text-xs font-black uppercase tracking-widest">Live View</span>
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </Link>
                                    <Link href={project.github} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/link">
                                        <Github className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase tracking-widest">Source</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
