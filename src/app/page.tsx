'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Socials from '@/components/Socials';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors overflow-hidden">
      <Navbar />
      <ScrollToTop />

      <div className="relative z-10">
        <Hero />
        <Timeline />
        <Socials />
      </div>

      <Footer />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_0.5px,transparent_0.5px)] opacity-[0.03] [background-size:24px_24px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>
    </main>
  );
}
