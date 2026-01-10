'use client';

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function EnterpriseFeaturesSection() {
    return (
        <section className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                    className="grid grid-cols-1 gap-16 md:gap-12 w-full items-center md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0"
                        variants={itemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2 className="text-white text-3xl md:text-[40px] font-medium leading-tight md:leading-[53px] font-[family-name:var(--font-playfair)]">
                                Insights that drive decisions.
                            </h2>
                        </div>

                        <p className="text-neutral-400 text-sm md:text-[15px] leading-6 mt-2">
                            Track wellness trends across your organization. Identify patterns before they become problems. Make data-driven decisions about workplace health initiatives.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Real-time analytics</p>
                                    <p className="text-neutral-500 text-sm">Monitor team wellness metrics as they update</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Privacy-first design</p>
                                    <p className="text-neutral-500 text-sm">Aggregate data only. Individual metrics stay private</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Actionable reports</p>
                                    <p className="text-neutral-500 text-sm">Weekly insights delivered to leadership</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        className="relative mt-10 md:mt-0 mx-auto w-full"
                        variants={itemVariants}
                    >
                        <div className="relative w-full bg-neutral-900/50 rounded-2xl border border-neutral-800/50 p-6 shadow-2xl">
                            <AnalyticsDashboard />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function AnalyticsDashboard() {
    const weeklyData = [
        { day: "Mon", sleep: 78, energy: 72, focus: 80 },
        { day: "Tue", sleep: 82, energy: 78, focus: 85 },
        { day: "Wed", sleep: 75, energy: 70, focus: 72 },
        { day: "Thu", sleep: 88, energy: 85, focus: 90 },
        { day: "Fri", sleep: 84, energy: 80, focus: 82 },
        { day: "Sat", sleep: 92, energy: 88, focus: 85 },
        { day: "Sun", sleep: 90, energy: 86, focus: 88 },
    ];

    return (
        <div className="space-y-6 font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-white font-[family-name:var(--font-playfair)]">Weekly Trends</h3>
                    <p className="text-xs text-neutral-500">Organization-wide averages</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-neutral-400">Sleep</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                        <span className="text-neutral-400">Energy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-neutral-400">Focus</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-48 flex items-end justify-between gap-2">
                {weeklyData.map((day, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex gap-0.5 items-end justify-center h-36">
                            <div
                                className="w-2 bg-emerald-400/80 rounded-t"
                                style={{ height: `${day.sleep}%` }}
                            ></div>
                            <div
                                className="w-2 bg-sky-400/80 rounded-t"
                                style={{ height: `${day.energy}%` }}
                            ></div>
                            <div
                                className="w-2 bg-amber-400/80 rounded-t"
                                style={{ height: `${day.focus}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-neutral-500">{day.day}</span>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800/50">
                <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg Sleep</p>
                    <p className="text-2xl font-light text-white font-[family-name:var(--font-playfair)]">84<span className="text-sm text-neutral-600">%</span></p>
                    <p className="text-xs text-emerald-400">+5% vs last week</p>
                </div>
                <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg Energy</p>
                    <p className="text-2xl font-light text-white font-[family-name:var(--font-playfair)]">80<span className="text-sm text-neutral-600">%</span></p>
                    <p className="text-xs text-emerald-400">+3% vs last week</p>
                </div>
                <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg Focus</p>
                    <p className="text-2xl font-light text-white font-[family-name:var(--font-playfair)]">83<span className="text-sm text-neutral-600">%</span></p>
                    <p className="text-xs text-emerald-400">+7% vs last week</p>
                </div>
            </div>
        </div>
    );
}
