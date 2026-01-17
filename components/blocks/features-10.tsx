'use client';

import { motion } from 'framer-motion'
import { Sparkles, FlaskConical, CalendarCheck } from 'lucide-react'
import { ReactNode } from 'react'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function EnterpriseFeatures() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-[family-name:var(--font-playfair)]">
                        What we do for your team
                    </h2>
                    <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                        Physical health, mental wellbeing, and sustainable productivity. Not another HR checkbox. Real support that people actually use.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <FeatureCard
                        icon={Sparkles}
                        title="Personalized Guidance"
                        description="Weekly recommendations for sleep, stress, energy, and mental clarity. Simple advice tailored to each person's life."
                    >
                        <GuidanceVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={FlaskConical}
                        title="Health Experiments"
                        description="Small changes that compound. Adjust sleep timing, reduce anxiety triggers, improve recovery. Low effort, measurable results."
                    >
                        <ExperimentsVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={CalendarCheck}
                        title="Monthly Health Sprints"
                        description="Team-wide themes like burnout prevention, stress recovery, or focus improvement. Shared momentum, individual progress."
                    >
                        <SprintsVisual />
                    </FeatureCard>
                </motion.div>

                {/* What Leadership Gets */}
                <motion.div
                    className="mt-16 bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-center text-2xl md:text-3xl font-medium text-neutral-900 mb-4 font-[family-name:var(--font-playfair)]">
                        What leadership receives
                    </p>
                    <p className="text-center text-neutral-600 mb-10 max-w-xl mx-auto">
                        High-level engagement summaries and participation trends. No individual data. Ever.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <MetricCard value="100%" label="Privacy Protected" />
                        <MetricCard value="Weekly" label="Progress Reports" />
                        <MetricCard value="Monthly" label="Health Sprints" />
                        <MetricCard value="1" label="Dedicated Health Ops" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    icon: React.ElementType
    title: string
    description: string
    children: ReactNode
}

const FeatureCard = ({ icon: Icon, title, description, children }: FeatureCardProps) => (
    <motion.div
        className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 flex flex-col"
        variants={itemVariants}
    >
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-200 flex items-center justify-center">
                <Icon className="w-5 h-5 text-neutral-600" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
        </div>
        <p className="text-neutral-600 text-sm mb-6">{description}</p>
        <div className="mt-auto">
            {children}
        </div>
    </motion.div>
)

interface MetricCardProps {
    value: string
    label: string
}

const MetricCard = ({ value, label }: MetricCardProps) => (
    <div className="text-center">
        <p className="text-3xl md:text-4xl font-semibold text-emerald-600 font-[family-name:var(--font-playfair)]">
            {value}
        </p>
        <p className="text-neutral-600 text-sm mt-1">{label}</p>
    </div>
)

const GuidanceVisual = () => (
    <div className="space-y-3">
        {[
            { action: 'Do this', text: '10-min morning sunlight for mood boost', type: 'do' },
            { action: 'Avoid this', text: 'Back-to-back meetings without breaks', type: 'avoid' },
            { action: 'Do this', text: 'Wind-down routine 30 min before bed', type: 'do' },
        ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-neutral-200">
                <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium ${item.type === 'do' ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {item.action}
                    </span>
                </div>
                <p className="text-sm text-neutral-700">{item.text}</p>
            </div>
        ))}
    </div>
)

const ExperimentsVisual = () => (
    <div className="space-y-3">
        {[
            { name: 'Stress reset routine', status: 'Active', day: 'Day 5/7' },
            { name: 'Sleep consistency', status: 'Completed', day: '+20% focus' },
            { name: 'Anxiety triggers', status: 'Upcoming', day: 'Starts Mon' },
        ].map((exp, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-neutral-200 flex justify-between items-center">
                <div>
                    <p className="text-sm text-neutral-700">{exp.name}</p>
                    <p className="text-xs text-neutral-500">{exp.day}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    exp.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                    exp.status === 'Completed' ? 'bg-sky-100 text-sky-700' :
                    'bg-neutral-100 text-neutral-600'
                }`}>{exp.status}</span>
            </div>
        ))}
    </div>
)

const SprintsVisual = () => (
    <div className="space-y-3">
        {[
            { month: 'January', theme: 'Sleep Consistency', active: true },
            { month: 'February', theme: 'Energy Management', active: false },
            { month: 'March', theme: 'Stress Recovery', active: false },
        ].map((sprint, i) => (
            <div key={i} className={`rounded-lg p-3 border ${sprint.active ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-neutral-200'}`}>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-neutral-700 font-medium">{sprint.month}</p>
                        <p className="text-xs text-neutral-500">{sprint.theme}</p>
                    </div>
                    {sprint.active && <span className="text-xs font-medium text-emerald-600">Active</span>}
                </div>
            </div>
        ))}
    </div>
)
