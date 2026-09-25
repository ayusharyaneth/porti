'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {

    return (
        <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-emerald-500/30 font-sans overflow-x-hidden">
            <PageTransition />

            <Navbar />

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            <h1 className="text-[15vw] lg:text-[7vw] font-black leading-[0.8] tracking-tighter uppercase relative z-10">
                                Let&apos;s <br />
                                <span className="text-primary">Connect</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.7 }}
                            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg leading-relaxed"
                        >
                            Have a question, collaboration idea, or just want to chat about markets? Drop me a message.
                        </motion.p>
                    </div>

                    {/* Right Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.9 }}
                        className="relative p-8 md:p-10 rounded-[2rem] bg-card border border-foreground/5 shadow-2xl overflow-hidden"
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-foreground mb-2">Send a message</h2>
                                <p className="text-muted-foreground">I usually respond within 24 hours.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-secondary/5 border border-foreground/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-foreground placeholder:text-muted-foreground"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-secondary/5 border border-foreground/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-foreground placeholder:text-muted-foreground"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                                    <div className="relative group">
                                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="How can I help you?"
                                            className="w-full bg-secondary/5 border border-foreground/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-foreground placeholder:text-muted-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <textarea
                                            rows={4}
                                            placeholder="Your detailed message..."
                                            className="w-full bg-secondary/5 border border-foreground/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                                        />
                                    </div>
                                </div>

                                <button className="w-full group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                                    Send Message
                                    <Send className="w-4 h-4 fill-current group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

        </main>
    );
}
