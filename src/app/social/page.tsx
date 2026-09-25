'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Zap } from 'lucide-react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/content';
import { useEffect, useState } from 'react';

export default function Social() {

    const socials = SOCIAL_LINKS;

    return (
        <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-emerald-500/30 font-sans overflow-x-hidden">
            <PageTransition />

            <Navbar />

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <h1 className="text-[15vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
                            Let&apos;s <br />
                            <span className="text-emerald-500">Connect.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                        className="md:mb-6 md:text-right border-l-2 md:border-l-0 md:border-r-2 border-emerald-500/30 pl-6 md:pl-0 md:pr-6"
                    >
                        <p className="text-muted-foreground text-lg md:text-xl italic font-medium max-w-xs">
                            Available for collaborations and technical discussions.
                        </p>
                    </motion.div>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 + (index * 0.1) }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-foreground/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/5">
                                    <social.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{social.name}</h3>
                                    <p className="text-muted-foreground font-medium">{social.handle}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Direct Comms Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative p-8 md:p-12 rounded-[2.5rem] bg-card border border-foreground/5 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full opacity-20" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-black text-foreground mb-2">Direct Comms</h2>
                            <p className="text-muted-foreground font-medium max-w-md">
                                Ready to start something amazing? Drop a message and let&apos;s discuss your next big idea.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="w-full md:w-auto group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                Initiate Contact
                                <Zap className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                            </Link>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Response Time: &lt; 24 Hours</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main >
    );
}
