"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function EnterpriseHero() {
    return (
        <main className="overflow-hidden bg-white">
            <section className="pb-24">
                <div className="relative pt-32 md:pt-40">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="#contact"
                                    className="hover:bg-neutral-100 bg-neutral-100 group mx-auto flex w-fit items-center gap-4 rounded-full border border-neutral-200 p-1 pl-4 shadow-sm transition-all duration-300">
                                    <span className="text-neutral-700 text-sm">For Teams of All Sizes</span>
                                    <span className="block h-4 w-0.5 border-l border-neutral-300"></span>

                                    <div className="bg-white group-hover:bg-neutral-50 size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3 text-neutral-600" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3 text-neutral-600" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-medium tracking-tight text-neutral-900 font-[family-name:var(--font-playfair)]">
                                    Healthy teams perform better.
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-neutral-600 font-[family-name:var(--font-geist-sans)]">
                                    Give your workforce the tools to optimize their health. Reduce sick days. Boost productivity. See real results across your organization.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-6 text-base bg-neutral-900 hover:bg-neutral-800 text-white">
                                    <Link href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry">
                                        <span className="text-nowrap">Contact Sales</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="rounded-xl px-6 text-base border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                                    <Link href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank">
                                        <span className="text-nowrap">Book a Demo</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative mt-12 overflow-hidden px-6">
                            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-neutral-200 p-4 shadow-xl bg-white">
                                <WorkforceDashboard />
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
        </main>
    )
}

function WorkforceDashboard() {
    const employees = [
        { name: "Sarah Mitchell", status: "optimal", sleep: 94, energy: 88, focus: 91 },
        { name: "James Kim", status: "good", sleep: 82, energy: 79, focus: 85 },
        { name: "Emily Roberts", status: "optimal", sleep: 89, energy: 92, focus: 88 },
        { name: "Michael Torres", status: "attention", sleep: 68, energy: 62, focus: 71 },
        { name: "Lisa Park", status: "good", sleep: 85, energy: 81, focus: 83 },
        { name: "David Wright", status: "optimal", sleep: 91, energy: 87, focus: 93 },
    ]

    const statusColors = {
        optimal: "bg-emerald-500",
        good: "bg-sky-500",
        attention: "bg-amber-500",
    }

    const statusBg = {
        optimal: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        good: "bg-sky-100 text-sky-700 border border-sky-200",
        attention: "bg-amber-100 text-amber-700 border border-amber-200",
    }

    return (
        <div className="bg-neutral-50 text-neutral-900 rounded-xl p-8 aspect-[15/8] font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-medium text-neutral-900 font-[family-name:var(--font-playfair)]">Team Wellness Overview</h3>
                    <p className="text-sm text-neutral-500 mt-1">Real-time health metrics across your organization</p>
                </div>
                <div className="flex gap-6 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-neutral-600">Optimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                        <span className="text-neutral-600">Good</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span className="text-neutral-600">Needs Attention</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-white rounded-xl p-5 border border-neutral-200">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Sleep Score</p>
                    <p className="text-4xl font-light mt-2 text-neutral-900 font-[family-name:var(--font-playfair)]">85<span className="text-lg text-neutral-400">/100</span></p>
                    <p className="text-xs text-emerald-600 mt-2">+12% from last month</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-neutral-200">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Energy Level</p>
                    <p className="text-4xl font-light mt-2 text-neutral-900 font-[family-name:var(--font-playfair)]">81<span className="text-lg text-neutral-400">/100</span></p>
                    <p className="text-xs text-emerald-600 mt-2">+8% from last month</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-neutral-200">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Focus Score</p>
                    <p className="text-4xl font-light mt-2 text-neutral-900 font-[family-name:var(--font-playfair)]">85<span className="text-lg text-neutral-400">/100</span></p>
                    <p className="text-xs text-emerald-600 mt-2">+15% from last month</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-neutral-200">
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Employee</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Status</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Sleep</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Energy</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Focus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, i) => (
                            <tr key={i} className="border-b border-neutral-100 last:border-0">
                                <td className="p-4 flex items-center gap-3 text-neutral-700">
                                    <div className={`w-2 h-2 rounded-full ${statusColors[emp.status as keyof typeof statusColors]}`}></div>
                                    {emp.name}
                                </td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusBg[emp.status as keyof typeof statusBg]}`}>
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="p-4 text-neutral-600">{emp.sleep}</td>
                                <td className="p-4 text-neutral-600">{emp.energy}</td>
                                <td className="p-4 text-neutral-600">{emp.focus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
