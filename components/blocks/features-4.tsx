import { Activity, LineChart, Lightbulb, Shield, Zap, TrendingUp } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-32 bg-[#030303]">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        How NexFlow Works
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Comprehensive insulin resistance detection and prevention platform powered by advanced AI
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-6xl divide-x divide-y divide-zinc-800 border border-zinc-800 *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20">
                                <Activity className="size-4 text-teal-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">IRScore</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Quantifies insulin resistance risk with precision comparable to clinical HOMA-IR testing on a 0-100 scale.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                                <LineChart className="size-4 text-blue-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Trajectory Panel</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Visualizes how daily habits and lifestyle choices impact your metabolic risk over time.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                                <Lightbulb className="size-4 text-amber-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Personalized Recommendations</h3>
                        </div>
                        <p className="text-sm text-zinc-400">AI-generated lifestyle modifications tailored to your unique metabolic profile.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                                <Zap className="size-4 text-purple-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Non-Invasive Detection</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Advanced AI modeling using lifestyle and biomarker data—no needles required.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                                <Shield className="size-4 text-emerald-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Clinical Integration</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Seamless deployment for clinics with engagement metrics and patient dashboards.</p>
                    </a>
                    
                    <a 
                        href="https://www.notion.so/NexFlow-Docs-232e50972bef80e5ac1ad84e773ca37e?source=copy_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="space-y-3 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-rose-500/10 to-red-500/10 border border-rose-500/20">
                                <TrendingUp className="size-4 text-rose-500" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">Predictive Analytics</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Detect insulin resistance risk years before traditional methods enable true prevention.</p>
                    </a>
                </div>
            </div>
        </section>
    )
}