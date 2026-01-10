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
        <main className="overflow-hidden">
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <section className="pb-72">
                <div className="relative pt-32 md:pt-40">
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="#contact"
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                    <span className="text-foreground text-sm">For Teams of All Sizes</span>
                                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-medium tracking-tight font-[family-name:var(--font-playfair)]">
                                    Healthy teams perform better.
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground font-[family-name:var(--font-geist-sans)]">
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
                                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-5 text-base">
                                        <Link href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry">
                                            <span className="text-nowrap">Contact Sales</span>
                                        </Link>
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-10.5 rounded-xl px-5">
                                    <Link href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank">
                                        <span className="text-nowrap">Book a demo</span>
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
                        <div className="relative -mr-56 mt-6 overflow-hidden px-2 sm:mr-0 sm:mt-8 md:mt-12">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-neutral-800 inset-shadow-white/5 bg-neutral-950 relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-neutral-800/50 p-4 shadow-2xl shadow-black/50 ring-1">
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
        optimal: "bg-emerald-400",
        good: "bg-sky-400",
        attention: "bg-amber-400",
    }

    const statusBg = {
        optimal: "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20",
        good: "bg-sky-400/10 text-sky-300 border border-sky-400/20",
        attention: "bg-amber-400/10 text-amber-300 border border-amber-400/20",
    }

    return (
        <div className="bg-neutral-950 text-white rounded-xl p-8 aspect-[15/8] font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-medium text-white font-[family-name:var(--font-playfair)]">Team Wellness Overview</h3>
                    <p className="text-sm text-neutral-500 mt-1">Real-time health metrics across your organization</p>
                </div>
                <div className="flex gap-6 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-neutral-400">Optimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                        <span className="text-neutral-400">Good</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-neutral-400">Needs Attention</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-neutral-900/50 rounded-xl p-5 border border-neutral-800/50">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Sleep Score</p>
                    <p className="text-4xl font-light mt-2 text-white font-[family-name:var(--font-playfair)]">85<span className="text-lg text-neutral-600">/100</span></p>
                    <p className="text-xs text-emerald-400 mt-2">+12% from last month</p>
                </div>
                <div className="bg-neutral-900/50 rounded-xl p-5 border border-neutral-800/50">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Energy Level</p>
                    <p className="text-4xl font-light mt-2 text-white font-[family-name:var(--font-playfair)]">81<span className="text-lg text-neutral-600">/100</span></p>
                    <p className="text-xs text-emerald-400 mt-2">+8% from last month</p>
                </div>
                <div className="bg-neutral-900/50 rounded-xl p-5 border border-neutral-800/50">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Focus Score</p>
                    <p className="text-4xl font-light mt-2 text-white font-[family-name:var(--font-playfair)]">85<span className="text-lg text-neutral-600">/100</span></p>
                    <p className="text-xs text-emerald-400 mt-2">+15% from last month</p>
                </div>
            </div>

            <div className="bg-neutral-900/30 rounded-xl border border-neutral-800/50 overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-neutral-800/50">
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Employee</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Status</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Sleep</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Energy</th>
                            <th className="text-left p-4 font-normal text-neutral-500 text-xs uppercase tracking-wider">Focus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, i) => (
                            <tr key={i} className="border-b border-neutral-800/30 last:border-0">
                                <td className="p-4 flex items-center gap-3 text-neutral-200">
                                    <div className={`w-2 h-2 rounded-full ${statusColors[emp.status as keyof typeof statusColors]}`}></div>
                                    {emp.name}
                                </td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusBg[emp.status as keyof typeof statusBg]}`}>
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="p-4 text-neutral-300">{emp.sleep}</td>
                                <td className="p-4 text-neutral-300">{emp.energy}</td>
                                <td className="p-4 text-neutral-300">{emp.focus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
