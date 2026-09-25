'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'bg-[#1DA1F2]' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'bg-[#0077B5]' },
    { name: 'GitHub', icon: Github, href: '#', color: 'bg-[#333]' },
    { name: 'Telegram', icon: Send, href: '#', color: 'bg-[#0088cc]' },
];

export default function Socials() {
    return (
        <section id="socials" className="py-8 md:py-12 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    <div className="text-center mb-8 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.3em] font-mono mb-2"
                        >
                            Get in Touch
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter"
                        >
                            Let&apos;s <span className="text-primary italic font-serif">Connect</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground max-w-md mx-auto text-sm md:text-base"
                        >
                            Follow my journey and stay updated with my latest trades and insights.
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                        {socialLinks.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 } }}
                                whileHover={{ scale: 1.1, y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className={cn(
                                    "absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                                    item.name === "GitHub" ? "bg-foreground" : item.color
                                )} />
                                <div className={cn(
                                    "relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl border border-border bg-card/50 backdrop-blur-md transition-all duration-500 group-hover:border-transparent group-hover:text-white",
                                    item.name === "Twitter" && "group-hover:bg-[#1DA1F2]",
                                    item.name === "LinkedIn" && "group-hover:bg-[#0077B5]",
                                    item.name === "GitHub" && "group-hover:bg-foreground group-hover:text-background",
                                    item.name === "Telegram" && "group-hover:bg-[#0088CC]"
                                )}>
                                    <div className="transform transition-transform duration-500 group-hover:scale-110">
                                        <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                </div>
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    {item.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
