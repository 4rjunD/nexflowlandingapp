import { Activity, LineChart, Lightbulb, Shield, Zap, TrendingUp } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-32 bg-[#030303]">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        Ask. Understand. Act.
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Instant guidance, smarter follow‑ups, and actionable plans
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-6xl divide-x divide-y divide-zinc-800 border border-zinc-800 *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                                <Activity className="size-4 text-blue-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Instant Answers</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Clear guidance in seconds — no medical jargon.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                                <LineChart className="size-4 text-blue-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Smarter Questions</h3>
                        </div>
                        <p className="text-sm text-zinc-400">We ask what matters to tailor next steps to you.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                                <Lightbulb className="size-4 text-amber-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Actionable Plans</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Turn insights into habits, routines, and checklists you’ll follow.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                                <Zap className="size-4 text-purple-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Easy Monitoring</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Track your health using simple lifestyle data—no complex tests or procedures needed.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                                <Shield className="size-4 text-emerald-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Provider Tools</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Healthcare providers can easily integrate our platform to better serve their patients.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-rose-500/10 to-red-500/10 border border-rose-500/20">
                                <TrendingUp className="size-4 text-rose-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Early Insights</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Identify potential health concerns early so you can take action before they become problems.</p>
                    </a>
                </div>
            </div>
        </section>
    )
}