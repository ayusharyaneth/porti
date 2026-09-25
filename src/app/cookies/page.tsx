'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ShieldCheck, Fingerprint, Lock, Globe, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Cookies() {

    const protocols = [
        {
            id: "01",
            title: "Authentication Token",
            type: "Essential",
            icon: Fingerprint,
            description: "Maintains secure session state and validates user identity across the distributed system architecture. Strictly non-persistent after session termination."
        },
        {
            id: "02",
            title: "Preferences Schema",
            type: "Functional",
            icon: Database,
            description: "Stores interface configuration vectors including theme mode, reduced motion settings, and regional localization parameters."
        },
        {
            id: "03",
            title: "Analytics Telemetry",
            type: "Performance",
            icon: Globe,
            description: "Aggregates anonymized performance metrics to optimize load balancing and render latency. No PII (Personally Identifiable Information) is indexed."
        },
        {
            id: "04",
            title: "Security Handshake",
            type: "Essential",
            icon: Lock,
            description: "Cryptographic nonce tokens used to prevent Cross-Site Request Forgery (CSRF) and validate origin integrity."
        },
        {
            id: "05",
            title: "Load Distribution",
            type: "System",
            icon: Server,
            description: "Traffic routing markers ensuring high-availability access to the nearest edge node location."
        }
    ];

    return (
        <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden transition-colors duration-500">
            <PageTransition />

            <Navbar />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-50" />
            </div>

            <div className="relative pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mb-24 md:mb-32"
                >


                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground mb-8 uppercase leading-[0.9]">
                        Cookies <br />
                        <span className="text-primary italic">Policy</span>
                    </h1>

                    <div className="h-[1px] w-full bg-gradient-to-r from-primary to-transparent opacity-20 mb-8" />

                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        Data governance protocols defining the local storage mechanisms of the <span className="text-foreground">Ayush XD</span> network.
                    </p>
                </motion.div>

                {/* Protocol Modules */}
                <div className="space-y-4">
                    {protocols.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.6 + (i * 0.1), duration: 0.5 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 md:p-10 rounded-2xl border border-border bg-card/20 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                    <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-secondary flex items-center justify-center border border-border group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-primary" />
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-mono">
                                                {item.type}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[10px] font-black text-primary/20 font-mono">{item.id}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>

        </main>
    );
}
