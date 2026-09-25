'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-background pt-[70px] pb-[70px] overflow-hidden border-t border-border/50 transition-colors duration-300">
            {/* Marquee Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex items-center">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap text-[20vw] md:text-[12vw] font-black leading-none tracking-tighter uppercase text-foreground"
                >
                    AYUSH XD • DESIGNER • DEVELOPER • TRADER • AYUSH XD • DESIGNER • DEVELOPER • TRADER •
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center transform -rotate-12 group hover:rotate-0 transition-transform duration-500">
                            <span className="text-background font-black text-xl">A</span>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-black">
                                © {year} Ayush Xd
                            </p>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 font-bold mt-1">
                                HANDCRAFTED WITH OBSESSION
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: 'Privacy', href: '/privacy' },
                            { name: 'Terms', href: '/terms' },
                            { name: 'Cookies', href: '/cookies' }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        </footer>
    );
}
