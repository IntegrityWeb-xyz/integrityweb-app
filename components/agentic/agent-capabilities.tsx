"use client"

import { Cpu, ShieldCheck, Zap, Globe, Lock, Layers } from "lucide-react"

const capabilities = [
    {
        title: "Autonomous Execution",
        description: "Agents operate independently, executing complex tasks without human intervention.",
        icon: Cpu,
    },
    {
        title: "Cryptographic Verification",
        description: "Every action is signed and proven. History is immutable and audit-proof.",
        icon: ShieldCheck,
    },
    {
        title: "High-Speed Settlement",
        description: "Instant finality on L2. Agents settle value at the speed of thought.",
        icon: Zap,
    },
    {
        title: "Universal Access",
        description: "Interact with any protocol, API, or data source across the verified web.",
        icon: Globe,
    },
    {
        title: "Private Logic",
        description: "Keep proprietary strategies hidden while proving their correctness using ZK.",
        icon: Lock,
    },
    {
        title: "Composable Stack",
        description: "Build on a modular framework. Stack agents to create complex organizations.",
        icon: Layers,
    },
]

export function AgentCapabilities() {
    return (
        <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // SYSTEM_CAPABILITIES
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap, i) => (
                    <div
                        key={i}
                        className="group relative p-6 bg-zinc-950/30 backdrop-blur-lg border border-white/5 rounded-lg hover:border-cyan-500/30 transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <cap.icon className="w-12 h-12 text-cyan-500/20" />
                        </div>

                        <div className="mb-4 p-3 bg-zinc-900/50 rounded-lg w-fit border border-white/5 group-hover:border-white/10">
                            <cap.icon className="w-5 h-5 text-cyan-400" />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                            {cap.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {cap.description}
                        </p>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
                    </div>
                ))}
            </div>
        </section>
    )
}
