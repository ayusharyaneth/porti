import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Ayush XD | Algo-Trader & Full Stack Developer',
    template: '%s | Ayush XD'
  },
  description: 'Portfolio of Ayush, a high-frequency algorithmic trader and full-stack developer building next-gen financial systems.',
  keywords: ['Algorithmic Trading', 'Full Stack Developer', 'Fintech', 'React', 'Next.js', 'High Frequency Trading', 'Quantitative Finance'],
  authors: [{ name: 'Ayush' }],
  creator: 'Ayush',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayushxd.vercel.app',
    title: 'Ayush XD | Algo-Trader & Full Stack Developer',
    description: 'Building the intersection of finance and technology.',
    siteName: 'Ayush XD Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayush XD Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush XD | Algo-Trader & Full Stack Developer',
    description: 'Building the intersection of finance and technology.',
    creator: '@ayush_xd',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout fontClassName={inter.className}>{children}</ClientLayout>
  );
}

