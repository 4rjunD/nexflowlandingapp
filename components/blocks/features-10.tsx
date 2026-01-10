'use client';

import { motion } from 'framer-motion'
import { BarChart3, Users, TrendingUp } from 'lucide-react'
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
        <section className="py-24 md:py-32 bg-neutral-900">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-white font-[family-name:var(--font-playfair)]">
                        Built for organizations that invest in their people
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <FeatureCard
                        icon={BarChart3}
                        title="Team Analytics"
                        description="Aggregate insights across your organization. Track wellness trends without compromising individual privacy."
                    >
                        <AnalyticsVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={Users}
                        title="Team Management"
                        description="Invite employees, organize by department, and monitor participation rates across your workforce."
                    >
                        <TeamVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={TrendingUp}
                        title="Wellness Programs"
                        description="Run organization-wide experiments. Compare results. Scale what works across teams."
                    >
                        <ProgramVisual />
                    </FeatureCard>
                </motion.div>

                {/* ROI Metrics */}
                <motion.div
                    className="mt-16 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-center text-2xl md:text-3xl font-medium text-white mb-10 font-[family-name:var(--font-playfair)]">
                        Measurable ROI. Fewer sick days. Higher productivity. Happier teams.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <MetricCard value="-32%" label="Sick Days" />
                        <MetricCard value="+18%" label="Productivity" />
                        <MetricCard value="+24%" label="Retention" />
                        <MetricCard value="+41%" label="Engagement" />
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
        className="bg-neutral-800/50 rounded-2xl border border-neutral-700/50 p-6 flex flex-col"
        variants={itemVariants}
    >
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-700 flex items-center justify-center">
                <Icon className="w-5 h-5 text-neutral-300" />
            </div>
            <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <p className="text-neutral-400 text-sm mb-6">{description}</p>
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
        <p className="text-3xl md:text-4xl font-semibold text-emerald-400 font-[family-name:var(--font-playfair)]">
            {value}
        </p>
        <p className="text-neutral-400 text-sm mt-1">{label}</p>
    </div>
)

const AnalyticsVisual = () => (
    <div className="bg-neutral-700/50 rounded-xl p-4">
        <div className="flex items-end justify-between gap-2 h-28">
            {[65, 78, 45, 89, 72, 94, 68].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                        className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t min-h-[4px]"
                        style={{ height: `${height}%` }}
                    />
                </div>
            ))}
        </div>
        <div className="flex justify-between mt-3 text-xs text-neutral-500">
            <span>Mon</span>
            <span>Sun</span>
        </div>
    </div>
)

const TeamVisual = () => (
    <div className="space-y-3">
        {[
            { name: 'Engineering', count: 24, health: 87 },
            { name: 'Sales', count: 18, health: 82 },
            { name: 'Marketing', count: 12, health: 91 },
        ].map((team, i) => (
            <div key={i} className="bg-neutral-700/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-neutral-300">{team.name}</span>
                    <span className="text-xs text-neutral-500">{team.count} members</span>
                </div>
                <div className="h-1.5 bg-neutral-600 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${team.health}%` }}
                    />
                </div>
            </div>
        ))}
    </div>
)

const ProgramVisual = () => (
    <div className="space-y-3">
        {[
            { name: 'Sleep Challenge', participants: 156, improvement: '+12%' },
            { name: 'Step Goal Program', participants: 203, improvement: '+8%' },
            { name: 'Meditation Trial', participants: 89, improvement: '+15%' },
        ].map((program, i) => (
            <div key={i} className="bg-neutral-700/50 rounded-lg p-3 flex justify-between items-center">
                <div>
                    <p className="text-sm text-neutral-300">{program.name}</p>
                    <p className="text-xs text-neutral-500">{program.participants} participants</p>
                </div>
                <span className="text-emerald-400 text-sm font-medium">{program.improvement}</span>
            </div>
        ))}
    </div>
)
