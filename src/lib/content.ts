import { Twitter, Linkedin, Github, Send, TrendingUp, Clock, Globe, Zap, Target } from 'lucide-react';

export const ABOUT_STATS = [
    { icon: TrendingUp, label: "Market Experience", value: "4 Years" },
    { icon: Clock, label: "Hours Traded", value: "5000+" },
    { icon: Globe, label: "Global Reach", value: "20+ Countries" },
    { icon: Zap, label: "Execution Speed", value: "< 50ms" },
    { icon: Target, label: "Strategies Deployed", value: "25+" },
];

export const SOCIAL_LINKS = [
    {
        name: "X / Twitter",
        handle: "@ayush_xd",
        description: "Market analysis & tech thoughts",
        icon: Twitter,
        link: "https://twitter.com/ayush_xd",
        color: "group-hover:text-blue-400"
    },
    {
        name: "LinkedIn",
        handle: "Ayush Portfolio",
        description: "Professional network & milestones",
        icon: Linkedin,
        link: "https://linkedin.com/in/ayush-portfolio",
        color: "group-hover:text-blue-600"
    },
    {
        name: "GitHub",
        handle: "ayush-dev",
        description: "Open source contributions",
        icon: Github,
        link: "https://github.com/ayush-dev",
        color: "group-hover:text-white"
    },
    {
        name: "Telegram",
        handle: "@ayush_chat",
        description: "Direct instant messaging",
        icon: Send,
        link: "https://t.me/ayush_chat",
        color: "group-hover:text-blue-400"
    }
];

export const TIMELINE_DATA = [
    {
        year: "2022",
        title: "The Spark",
        content: "Scrolling through Twitter during class, I stumbled upon a Bitcoin chart that changed everything. That same night, I deposited $50 into my first crypto exchange. My first trade made $12—small money, but the thrill was addictive.",
        quote: "The beginning of an obsession."
    },
    {
        year: "2023",
        title: "The Humbling",
        content: "A few lucky trades made me overconfident. Then the crash came—portfolio down 60% in weeks. Most people quit here. I grabbed a notebook and started documenting every single trade, win or lose.",
        quote: "Pain became my greatest teacher."
    },
    {
        year: "2024",
        title: "The System",
        content: "After hundreds of hours studying price action, I realized trading is not about prediction—it is about risk management. I built my own momentum-based strategy with strict entry and exit rules. No guessing, just execution.",
        quote: "Consistency over luck."
    },
    {
        year: "2025",
        title: "The Scale",
        content: "With a proven system in place, I focused on automation and scaling. I wrote scripts to backtest strategies across different market conditions and optimized execution speed. Trading became less about staring at charts and more about managing probability.",
        quote: "Process over outcome."
    },
    {
        year: "2026",
        title: "The Present",
        content: "Now I trade while pursuing my degree. The portfolio has grown, but the real win is the discipline. Every trade follows the system. The goal is not just money—it is mastering a skill that compounds forever.",
        quote: "Consistency over luck."
    }
];
