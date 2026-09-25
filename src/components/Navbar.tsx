'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Home, User, Globe, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Social', href: '/social', icon: Globe },
    { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('/');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const scrollToSection = (href: string) => {
        setActiveTab(href);
        if (href.startsWith('/#')) {
            const element = document.querySelector(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-[50] flex justify-center px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: isVisible ? 0 : -100,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-1.5 md:gap-2 bg-background/80 backdrop-blur-xl border border-border/50 px-3 py-2 rounded-2xl shadow-2xl pointer-events-auto"
                >
                    {navItems.map((item) => {
                        const isActive = activeTab === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith('/#')) {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    } else {
                                        setActiveTab(item.href);
                                    }
                                }}
                                className={cn(
                                    "relative p-2 md:p-2.5 rounded-xl transition-all group",
                                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-primary rounded-xl"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5" />
                                </span>
                            </Link>
                        );
                    })}

                    <div className="w-px h-6 bg-border mx-1" />

                    <button
                        onClick={toggleTheme}
                        className="relative p-2 md:p-2.5 rounded-xl hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all overflow-hidden w-10 h-10 flex items-center justify-center"
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.div
                                key={isDark ? "dark" : "light"}
                                initial={{ y: -20, opacity: 0, rotate: 90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: -90 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="absolute"
                            >
                                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </motion.div>
                        </AnimatePresence>
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="relative p-2 md:p-2.5 rounded-xl hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all overflow-hidden w-10 h-10 flex items-center justify-center"
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.div
                                key={isMobileMenuOpen ? "close" : "open"}
                                initial={{ y: -20, opacity: 0, rotate: 90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: -90 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="absolute"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </motion.nav>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop to close on click outside */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-transparent z-[60]"
                        />

                        {/* Menu Container */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0, y: -20, scale: 0.95, x: "-50%" },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    x: "-50%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3,
                                        staggerChildren: 0.05,
                                        delayChildren: 0.1
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20,
                                    scale: 0.95,
                                    x: "-50%",
                                    transition: { duration: 0.2 }
                                }
                            }}
                            className="fixed top-24 left-1/2 w-[90vw] md:w-[400px] bg-card border border-foreground/10 rounded-3xl p-6 shadow-2xl z-[70] flex flex-col gap-6 max-h-[80vh] overflow-y-auto"
                        >
                            {/* Navigation Links */}
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'About', href: '/about' },
                                    { name: 'Skills', href: '/skills' },
                                    { name: 'Achievements', href: '/achievements' },
                                    { name: 'Portfolio', href: '/portfolio' },
                                    { name: 'Social', href: '/social' },
                                    { name: 'Contact', href: '/contact' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="group flex items-center justify-between"
                                        >
                                            <span className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                                                {item.name}
                                            </span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Footer Area */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                                className="pt-6 border-t border-foreground/5 flex justify-between items-end"
                            >
                                <span className="text-muted-foreground/40 italic font-medium text-sm">Ayush XD</span>

                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
