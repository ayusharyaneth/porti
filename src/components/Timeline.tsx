'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

import { TIMELINE_DATA } from '@/lib/content';

const timelineData = TIMELINE_DATA;

export default function Timeline() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="about" ref={ref} className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold tracking-tight mb-16 text-center md:text-left leading-[1.1]"
                    >
                        From Curious Student <br className="hidden md:block" />
                        to <span className="text-primary italic">Disciplined Trader</span>
                    </motion.h2>

                    <div className="relative">
                        {/* Vertical Lines */}
                        <div className="absolute left-1 md:left-2 top-0 bottom-0 w-[2px] bg-primary/10" />
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute left-1 md:left-2 top-0 bottom-0 w-[2px] bg-primary"
                        />

                        <div className="space-y-20">
                            {timelineData.map((item, index) => (
                                <div key={index} className="group relative pl-10 md:pl-24">
                                    {/* Dot */}
                                    <div className="absolute left-0 md:left-1 top-2 -translate-x-1/2 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                            className={cn(
                                                "w-4 h-4 rounded-full border-2 border-primary bg-background z-10",
                                                index === 0 || index === timelineData.length - 1 ? "bg-primary shadow-[0_0_15px_rgba(16,185,129,0.3)]" : ""
                                            )}
                                        />
                                    </div>

                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className="space-y-8"
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-5xl sm:text-7xl md:text-9xl font-black text-primary/[0.15] dark:text-primary/[0.12] absolute -top-8 md:-top-16 left-4 md:left-12 pointer-events-none tracking-tighter transition-all duration-500 group-hover:text-primary/[0.25] group-hover:translate-x-4"
                                        >
                                            {item.year}
                                        </motion.span>

                                        <div className="space-y-4 relative z-10">
                                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
                                                {item.content}
                                            </p>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="inline-block relative z-10"
                                        >
                                            <div className="px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
                                                <p className="text-primary font-semibold italic text-xs md:text-sm tracking-wide">
                                                    "{item.quote}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
