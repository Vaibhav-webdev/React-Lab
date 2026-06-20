"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Users, Code, CheckCircle } from "lucide-react";

// Framer Motion Variants for Staggered Fade-in
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const BLUE = '#3b82f6'; // Custom Blue
const PURPLE = '#a855f7'; // Custom Purple
const INDIGO = '#7c3aed';

export default function Hero() {
    return (
        <section id="home" className="relative w-full bg-[#060608] text-white overflow-hidden flex flex-col justify-center pt-18 pb-12">
            {/* Background Ambient Glows for Performance (CSS instead of Heavy Images) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none" />

            <div className="lg:max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* LEFT COLUMN: Content & CTA */}
                <div
                    className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Pill Badge */}
                    <div variants={fadeInUp} className="self-center lg:self-start">
                        <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-purple-400 backdrop-blur-sm shadow-inner">
                            <Sparkles className="w-4.5 h-4.5 text-purple-400 animate-pulse" />
                            Interactive • Hands-on • Real Projects
                        </span>
                    </div>

                    {/* Main Heading (SEO Optimized with H1) */}
                    <h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
                    >
                        Master <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">React.</span> <br />
                        <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Build anything.</span>
                    </h1>

                    {/* Subtitle Description */}
                    <p
                        variants={fadeInUp}
                        className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                    >
                        Stop watching endless tutorials. Dive straight into a production-ready Next.js environment where you master the App Router, Server Components, and API routes by writing real code. Our zero-setup, in-browser IDE lets you build, debug, and deploy.
                    </p>

                    {/* Action Buttons with Hover Effects */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
                    >
                        <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-600/30 hover:bg-purple-500 active:scale-[0.98] transition-all duration-200 overflow-hidden">
                            Start Learning
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        </button>

                        <button className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 font-semibold text-zinc-300 transition-all duration-200 active:scale-[0.98]">
                            Try Mock Interview
                        </button>
                    </motion.div>
                </div>
                <div
                    aria-hidden="true"
                    className="relative w-[400px] h-[400px] flex items-center justify-center select-none pointer-events-none"
                >
                    {/* 🔥 Hydration Error को फिक्स करने के लिए dangerouslySetInnerHTML का उपयोग किया गया है */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
          @keyframes orbitRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-orbit-1 {
            animation: orbitRotate 25s linear infinite;
            transform-origin: center;
          }
          .animate-orbit-2 {
            animation: orbitRotate 35s linear infinite reverse;
            transform-origin: center;
          }
          .animate-orbit-3 {
            animation: orbitRotate 45s linear infinite;
            transform-origin: center;
          }
        `}} />

                    {/* Orbit 1 */}
                    <svg
                        className="absolute inset-0 w-full h-full animate-orbit-1"
                        viewBox="0 0 120 120"
                    >
                        <ellipse
                            cx="60"
                            cy="60"
                            rx="54"
                            ry="20"
                            fill="none"
                            stroke={BLUE}
                            strokeOpacity={0.55}
                            strokeWidth={1.5}
                        />
                        <circle cx="114" cy="60" r="3" fill={BLUE} />
                    </svg>

                    {/* Orbit 2 */}
                    <svg
                        className="absolute inset-0 w-full h-full animate-orbit-2"
                        viewBox="0 0 120 120"
                    >
                        <g transform="rotate(60 60 60)">
                            <ellipse
                                cx="60"
                                cy="60"
                                rx="54"
                                ry="20"
                                fill="none"
                                stroke={INDIGO}
                                strokeOpacity={0.45}
                                strokeWidth={1.5}
                            />
                            <circle cx="114" cy="60" r="3" fill={INDIGO} />
                        </g>
                    </svg>

                    {/* Orbit 3 */}
                    <svg
                        className="absolute inset-0 w-full h-full animate-orbit-3"
                        viewBox="0 0 120 120"
                    >
                        <g transform="rotate(-60 60 60)">
                            <ellipse
                                cx="60"
                                cy="60"
                                rx="54"
                                ry="20"
                                fill="none"
                                stroke={PURPLE}
                                strokeOpacity={0.45}
                                strokeWidth={1.5}
                            />
                            <circle cx="114" cy="60" r="3" fill={PURPLE} />
                        </g>
                    </svg>

                    {/* Nucleus - Central Core */}
                    <svg
                        className="absolute inset-0 w-full h-full z-10"
                        viewBox="0 0 120 120"
                    >
                        <circle cx="60" cy="60" r="7" fill={INDIGO} />
                        <circle cx="60" cy="60" r="3" fill={BLUE} />
                    </svg>
                </div>
            </div>

            {/* STATS SECTION (Bottom Grid with Scroll-triggered Fade-in) */}
            <motion.div
                className="max-w-6xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {[
                    // 1. हर ऑब्जेक्ट में एक यूनिक 'borderColor' क्लास जोड़ दी है 🔥
                    { icon: Terminal, metric: "20+", label: "HANDS-ON LABS", desc: "Real projects to build", color: "#f97316", borderColor: "border-l-orange-400" },
                    { icon: Code, metric: "100+", label: "PRACTICE CHALLENGES", desc: "Test your skills", color: "#3b82f6", borderColor: "border-l-blue-400" },
                    { icon: Users, metric: "50K+", label: "HAPPY DEVELOPERS", desc: "Learning & growing", color: "#a855f7", borderColor: "border-l-purple-400" },
                    { icon: CheckCircle, metric: "100%", label: "BEGINNER FRIENDLY", desc: "From zero to hero", color: "#10b981", borderColor: "border-l-emerald-400" }
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className={`group p-5 rounded-2xl bg-zinc-900/40 border border-zinc-900 border-l-4 ${stat.borderColor} hover:border-t-zinc-800/80 hover:border-r-zinc-800/80 hover:border-b-zinc-800/80 hover:bg-zinc-900/70 transition-all duration-300 backdrop-blur-sm`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <stat.icon color={stat.color} className="w-5 h-5 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
                            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white">{stat.metric}</span>
                        </div>
                        <div className="text-[10px] font-bold tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors mb-0.5">{stat.label}</div>
                        <div className="text-xs sm:text-sm text-zinc-400">{stat.desc}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}