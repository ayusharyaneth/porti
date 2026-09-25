'use client';

import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/next';

export default function ClientLayout({
    children,
    fontClassName,
}: {
    children: React.ReactNode;
    fontClassName: string;
}) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    // Reset scroll on navigation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <html lang="en" className="dark">
            <body className={`${fontClassName} min-h-screen bg-background text-foreground selection:bg-primary/30 antialiased overflow-x-hidden`}>
                {loading ? (
                    <Preloader onComplete={() => setLoading(false)} />
                ) : (
                    <>
                        <CustomCursor />
                        <AnimatePresence mode="wait">
                            {children}
                        </AnimatePresence>
                    </>
                )}
                <Analytics />
            </body>
        </html>
    );
}
