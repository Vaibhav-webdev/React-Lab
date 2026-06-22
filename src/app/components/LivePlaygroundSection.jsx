"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, RefreshCw } from "lucide-react";
import { Check, ExternalLink, Eye, Settings } from "lucide-react";

export default function LivePlayground() {
    // Interactive preview state to make the mock IDE alive!
    const [count, setCount] = useState(0);
    const [activeTab, setActiveTab] = useState("App.jsx");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        let textToCopy = "";

        // 1. Pehle decide karlo ki kaunsa text copy karna hai
        if (activeTab === "App.jsx") {
            textToCopy = `import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Labs 🚀</Text>
            <Text style={styles.text}>You clicked {count} times</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCount(count + 1)}
            >
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
        </View>
    );
}`;
        } else {
            // Agar App.jsx nahi hai, to ye wala code set hoga
            textToCopy = `import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#090A0D',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  text: {
    color: '#A1A1AA',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#9333EA',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});`;
        }

        // 2. Copy karne ka logic sirf EK baar (No code repetition)
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch((err) => {
                    console.error("Copy karne me error aayi: ", err);
                });
        }
    };

    const handleRefresh = () => {
        setCount(0)
    }

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    return (
        <section id="how-it-works" className="bg-[#060608] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Content Column */}
                <motion.div
                    className="lg:col-span-5 flex flex-col justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span
                        variants={fadeInUp}
                        className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 block"
                    >
                        LIVE PLAYGROUND
                    </motion.span>

                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Code. Preview.<br />Ship.
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-zinc-400 text-base sm:text-lg mb-8 max-w-md leading-relaxed"
                    >
                        Our in-browser IDE lets you write NextJS code and see results instantly.
                    </motion.p>

                    {/* Features List */}
                    <motion.div variants={fadeInUp} className="space-y-4 mb-10">
                        {[
                            "Real-time code preview",
                            "Error highlighting",
                            "Auto-complete",
                            "Export & share your work"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-blue-400" strokeWidth={3} />
                                </div>
                                <span className="text-zinc-300 font-medium text-sm sm:text-base">{feature}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div variants={fadeInUp}>
                        <a
                            href="#playground"
                            className="inline-flex items-center space-x-2 bg-transparent border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/60 text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-200 text-sm group"
                        >
                            <span>Let's Start The Journey!</span>
                            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right IDE Mockup Column */}
                <motion.div
                    className="lg:col-span-7 w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Mock Browser/IDE Window */}
                    <div className="w-full rounded-xl border border-zinc-800/80 bg-[#0B0C10] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                        {/* Window Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60 bg-[#090A0D]">
                            {/* Window Controls */}
                            <div className="flex items-center space-x-2 w-20">
                                <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                                <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                            </div>

                            {/* Tabs */}
                            <div className="flex items-center space-x-1 bg-zinc-950/40 p-0.5 rounded-md border border-zinc-900">
                                <button
                                    onClick={() => setActiveTab("page.tsx")}
                                    className={`px-3 py-1 rounded font-medium text-[11px] sm:text-xs transition-colors ${activeTab === "page.tsx"
                                        ? "bg-[#13151C] text-zinc-200 border border-zinc-800/50"
                                        : "text-zinc-500 hover:text-zinc-400 border border-transparent"
                                        }`}
                                >
                                    page.tsx
                                </button>
                                <button
                                    onClick={() => setActiveTab("globals.css")}
                                    className={`px-3 py-1 rounded font-medium text-[11px] sm:text-xs transition-colors ${activeTab === "globals.css"
                                        ? "bg-[#13151C] text-zinc-200 border border-zinc-800/50"
                                        : "text-zinc-500 hover:text-zinc-400 border border-transparent"
                                        }`}
                                >
                                    globals.css
                                </button>
                            </div>

                            {/* Action Icons */}
                            <div className="flex items-center space-x-4 text-zinc-500 w-20 justify-end">
                                <button onClick={handleRefresh} className="hover:text-zinc-300 transition-colors group relative" title="Reset Preview">
                                    <RefreshCw className="w-3.5 h-3.5 group-active:-rotate-180 transition-transform duration-300" />
                                </button>
                                <button onClick={handleCopy} className="hover:text-zinc-300 transition-colors" title="Copy Code">
                                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Window Grid Body */}
                        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px] sm:min-h-[380px]">
                            {/* Code Editor Panel */}
                            <div className="md:col-span-7 p-4 sm:p-5 bg-[#0D0E12] border-b md:border-b-0 md:border-r border-zinc-800/60 overflow-x-auto overflow-y-auto max-w-full max-h-[500px] selection:bg-purple-500/20 relative">
                                <pre className="text-zinc-400 leading-relaxed font-normal whitespace-pre">
                                    {activeTab === "page.tsx" ? (
                                        <code className="block animate-in fade-in duration-300">
                                            <span className="text-green-400">'use client'</span>;
                                            {"\n\n"}
                                            <span className="text-purple-400">import</span> &#123;{" "}
                                            <span className="text-blue-400">useState</span> &#125;{" "}
                                            <span className="text-purple-400">from</span>{" "}
                                            <span className="text-green-400">'react'</span>;
                                            {"\n\n"}
                                            <span className="text-purple-400">export default function</span>{" "}
                                            <span className="text-yellow-400">Page</span>() &#123;
                                            {"\n  "}
                                            <span className="text-purple-400">const</span> [count, setCount] ={" "}
                                            <span className="text-blue-400">useState</span>(<span className="text-orange-400">0</span>);
                                            {"\n\n  "}
                                            <span className="text-purple-400">return</span> ({"\n    "}
                                            <span className="text-zinc-500">&lt;</span>
                                            <span className="text-blue-400">main</span>{" "}
                                            <span className="text-purple-400">className</span>=<span className="text-green-400">"flex flex-col items-center justify-center min-h-screen"</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n      "}
                                            <span className="text-zinc-500">&lt;</span>
                                            <span className="text-blue-400">h1</span>{" "}
                                            <span className="text-purple-400">className</span>=<span className="text-green-400">"text-2xl font-bold text-white mb-3"</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n        "}Next.js Labs ▲
                                            {"\n      "}
                                            <span className="text-zinc-500">&lt;/</span>
                                            <span className="text-blue-400">h1</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n      "}
                                            <span className="text-zinc-500">&lt;</span>
                                            <span className="text-blue-400">p</span>{" "}
                                            <span className="text-purple-400">className</span>=<span className="text-green-400">"text-zinc-400 mb-6"</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n        "}You clicked &#123;count&#125; times
                                            {"\n      "}
                                            <span className="text-zinc-500">&lt;/</span>
                                            <span className="text-blue-400">p</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n      "}
                                            <span className="text-zinc-500">&lt;</span>
                                            <span className="text-blue-400">button</span>
                                            {"\n        "}
                                            <span className="text-purple-400">className</span>=<span className="text-green-400">"bg-white text-black px-5 py-2 rounded-md font-medium"</span>
                                            {"\n        "}
                                            <span className="text-purple-400">onClick</span>=&#123;() =&gt; setCount(count +{" "}
                                            <span className="text-orange-400">1</span>)&#125;
                                            {"\n      "}
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n        "}Increment
                                            {"\n      "}
                                            <span className="text-zinc-500">&lt;/</span>
                                            <span className="text-blue-400">button</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n    "}
                                            <span className="text-zinc-500">&lt;/</span>
                                            <span className="text-blue-400">main</span>
                                            <span className="text-zinc-500">&gt;</span>
                                            {"\n  "});{"\n"}&#125;
                                        </code>
                                    ) : (
                                        <code className="block animate-in fade-in duration-300">
                                            <span className="text-purple-400">@tailwind</span> base;
                                            {"\n"}
                                            <span className="text-purple-400">@tailwind</span> components;
                                            {"\n"}
                                            <span className="text-purple-400">@tailwind</span> utilities;
                                            {"\n\n"}
                                            <span className="text-blue-400">body</span> &#123;
                                            {"\n  "}color: <span className="text-green-400">#ffffff</span>;
                                            {"\n  "}background-color: <span className="text-green-400">#090A0D</span>;
                                            {"\n"}&#125;
                                            {"\n\n"}
                                            <span className="text-zinc-500">/* Custom styles can go here */</span>
                                        </code>
                                    )}
                                </pre>
                            </div>

                            {/* Live Preview Panel (Simulating Web Browser View) */}
                            <div className="md:col-span-5 bg-[#090A0D] flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none relative group/preview">
                                {/* Subtle Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                                {/* Web Browser Frame Simulation */}
                                <div className="relative z-10 flex flex-col w-full max-w-[320px] aspect-[4/3] border border-zinc-800 rounded-lg bg-[#090A0D] shadow-2xl overflow-hidden">
                                    {/* Browser Header Tab */}
                                    <div className="h-8 bg-[#13151C] border-b border-zinc-800 flex items-center px-3 space-x-2">
                                        <div className="flex space-x-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                        </div>
                                        <div className="mx-auto bg-[#090A0D] border border-zinc-800/80 rounded px-24 py-0.5 text-[9px] text-zinc-500 font-sans tracking-wide">
                                            localhost:3000
                                        </div>
                                    </div>

                                    {/* Web App Content */}
                                    <div className="flex-1 flex flex-col items-center justify-center p-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-lg">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2L22 20H2L12 2Z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                                            Next.js Labs
                                        </h3>

                                        <p className="text-xs text-zinc-400 font-sans mb-5">
                                            You clicked <span className="text-white font-mono font-bold">{count}</span> times
                                        </p>

                                        <button
                                            onClick={() => setCount((prev) => prev + 1)}
                                            className="bg-white hover:bg-zinc-200 text-black active:scale-95 font-semibold font-sans px-4 py-2 rounded-md transition-all duration-150 text-xs tracking-wide"
                                        >
                                            Increment
                                        </button>
                                    </div>
                                </div>

                                <div className="absolute bottom-3 right-3 flex items-center space-x-2 text-[10px] text-zinc-500 font-sans tracking-wider uppercase">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span>Local Dev Server</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}