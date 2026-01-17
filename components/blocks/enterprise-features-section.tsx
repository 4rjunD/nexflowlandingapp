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
        <section className="relative py-24 md:py-32 bg-[#EBE8E1] overflow-hidden">
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
                            <h2 className="text-[#111111] text-3xl md:text-[40px] font-medium leading-tight md:leading-[53px]" style={{ fontFamily: '"New York", Georgia, serif' }}>
                                How it works.
                            </h2>
                        </div>

                        <p className="text-[#6B6B6B] text-sm md:text-[15px] leading-6 mt-2">
                            Every person gets a personal health baseline and ongoing support for physical and mental wellbeing. Reduced burnout. Improved focus. People who feel good do better work.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#1F4D3A]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                </div>
                                <div>
                                    <p className="text-[#111111] font-medium">Physical + mental health</p>
                                    <p className="text-[#6B6B6B] text-sm">Sleep, energy, stress levels, anxiety, and mood tracked together</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                                </div>
                                <div>
                                    <p className="text-[#111111] font-medium">Not an HR tool</p>
                                    <p className="text-[#6B6B6B] text-sm">We work directly with your people. Private, personal, no surveillance</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#E5A53D]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#E5A53D]"></div>
                                </div>
                                <div>
                                    <p className="text-[#111111] font-medium">Productivity that lasts</p>
                                    <p className="text-[#6B6B6B] text-sm">When people feel better, they focus better. Less burnout, more output</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        className="relative mt-10 md:mt-0 mx-auto w-full"
                        variants={itemVariants}
                    >
                        <div className="relative w-full bg-white rounded-2xl border border-[#E5E2DB] p-6 shadow-lg">
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
        <div className="space-y-6" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>Weekly Trends</h3>
                    <p className="text-xs text-[#999999]">Organization-wide averages</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                        <span className="text-[#6B6B6B]">Sleep</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                        <span className="text-[#6B6B6B]">Energy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E5A53D]"></div>
                        <span className="text-[#6B6B6B]">Focus</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-48 flex items-end justify-between gap-2 bg-[#F6F4EF] rounded-xl p-4">
                {weeklyData.map((day, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex gap-0.5 items-end justify-center h-36">
                            <div
                                className="w-2 bg-[#1F4D3A] rounded-t"
                                style={{ height: `${day.sleep}%` }}
                            ></div>
                            <div
                                className="w-2 bg-sky-500 rounded-t"
                                style={{ height: `${day.energy}%` }}
                            ></div>
                            <div
                                className="w-2 bg-[#E5A53D] rounded-t"
                                style={{ height: `${day.focus}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-[#999999]">{day.day}</span>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E2DB]">
                <div>
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Avg Sleep</p>
                    <p className="text-2xl font-light text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>84<span className="text-sm text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A]">+5% vs last week</p>
                </div>
                <div>
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Avg Energy</p>
                    <p className="text-2xl font-light text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>80<span className="text-sm text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A]">+3% vs last week</p>
                </div>
                <div>
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Avg Focus</p>
                    <p className="text-2xl font-light text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>83<span className="text-sm text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A]">+7% vs last week</p>
                </div>
            </div>
        </div>
    );
}
