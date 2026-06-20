'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    LayoutTemplate,
    Terminal,
    Moon,
    Zap,
    ArrowUpRight
} from 'lucide-react';

const features = [
    {
        icon: Terminal,
        title: "Interactive Labs",
        desc: "Write, run and test React code in our in-browser playground.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: LayoutTemplate,
        title: "Real Projects",
        desc: "Build production-ready projects and add them to your portfolio.",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Brain,
        title: "Challenges",
        desc: "Solve practical coding challenges and level up your skills.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Zap,
        title: "Instant Feedback",
        desc: "Get real-time feedback and hints to improve faster.",
        color: "text-pink-400",
        bgColor: "bg-pink-500/10",
        className: "md:col-span-1 lg:col-span-1.5"
    },
    {
        icon: Moon,
        title: "Dark Theme",
        desc: "A beautiful dark UI that keeps you focused and in the flow.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
        className: "md:col-span-1 lg:col-span-1.5"
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 18 }
    }
};

export default function FeaturesSection() {
    return (
        <section id='features' className="w-full bg-[#060608] text-white py-20 sm:py-28 relative overflow-hidden">
            {/* Background Radial Glow Effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[350px] sm:h-[500px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div

                    initial={{ opacity: 0, y: 20 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true, margin: "-100px" }}

                    transition={{ duration: 0.5 }}

                    className="max-w-4xl mx-auto text-center mb-16 sm:mb-24"

                >

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">

                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">master React Native</span>

                    </h2>

                    <p className="text-zinc-400 text-lg sm:text-xl">

                        A complete ecosystem designed to take you from a beginner to an industry-ready full-stack developer.

                    </p>

                </motion.div>

                {/* Features Grid - Semantic UL used for better SEO crawler indexing */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto"
                >
                    {features.map((feature, idx) => (
                        <motion.div

                            key={idx}

                            variants={fadeInUp}

                            className={`group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/80 ${feature.borderColor} hover:shadow-2xl hover:-translate-y-1`}

                        >

                            {/* Icon Container */}

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bgColor} ${feature.color} transition-transform duration-300 group-hover:scale-110`}>

                                <feature.icon className="w-7 h-7" />

                            </div>



                            {/* Content */}

                            <h3 className="text-xl font-bold text-zinc-100 mb-3 tracking-wide">

                                {feature.title}

                            </h3>

                            <p className="text-zinc-400 leading-relaxed">

                                {feature.desc}

                            </p>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}