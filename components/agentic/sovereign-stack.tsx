"use client"

import { Cpu, Fingerprint, Wallet, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react"

const layers = [
    {
        id: 4,
        title: "Layer 4: The Business Layer",
        subtitle: "Autonomous Commerce",
        description: "At the top of the stack, agents act as managers of digital entities.",
        icon: Briefcase,
        features: [
            { name: "Negotiation Protocols", desc: "Standardized framework for deal negotiation." },
            { name: "Autonomous DAOs", desc: "Vote and manage treasuries autonomously." },
            { name: "IP Management", desc: "Tokenize works and distribute royalties." },
        ]
    },
    {
        id: 3,
        title: "Layer 3: The Financial Rails",
        subtitle: "Sovereign Wallets",
        description: "The primary difference between a script and a sovereign agent is the ability to own and move value.",
        icon: Wallet,
        features: [
            { name: "Smart Contract Wallets", desc: "Programmable contracts with Session Keys." },
            { name: "Spending Limits", desc: "Granular rules for API calls vs large deals." },
            { name: "Agent-to-Agent Payments", desc: "High-velocity micro-payments via Lightning/Cashu." },
        ]
    },
    {
        id: 2,
        title: "Layer 2: The Agentic Core",
        subtitle: "Identity & Reputation",
        description: "If an agent is to manage a business, it needs a persistent identity that humans and other agents can trust.",
        icon: Fingerprint,
        features: [
            { name: "Sovereign Identity", desc: "Public-key pair (Nostr/Starknet), not API keys." },
            { name: "On-Chain Reputation", desc: "Trust history based on transactions." },
            { name: "Attestations", desc: "Verifiable web of trust from validators." },
        ]
    },
    {
        id: 1,
        title: "Layer 1: The Provable Compute Layer",
        subtitle: "Verification",
        description: "Everything starts with the Axiom of Verifiability. Decisions must be provable without model introspection.",
        icon: Cpu,
        features: [
            { name: "ZK-STARKs", desc: "Cryptographic proofs of reasoning (S-two)." },
            { name: "Cairo Language", desc: "Code as mathematical proof." },
            { name: "Validity ML", desc: "Off-chain compute, on-chain proof." },
        ]
    },
]

export function SovereignStack() {
    return (
        <section className="mb-32">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // INFRASTRUCTURE_STACK
                </h2>
                <div className="h-px flex-1 bg-white/10 ml-6" />
            </div>

            <div className="space-y-6">
                {layers.map((layer) => (
                    <div
                        key={layer.id}
                        className="group relative grid md:grid-cols-[200px_1fr] gap-6 p-8 bg-zinc-950/30 backdrop-blur-sm border border-white/5 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                    >
                        {/* Left Column: ID & Icon */}
                        <div className="flex flex-col items-center justify-center text-center p-4 border-r border-white/5 group-hover:border-cyan-500/20 transition-colors">
                            <span className="text-6xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors mb-4">
                                0{layer.id}
                            </span>
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                                <layer.icon className="w-12 h-12 text-zinc-500 group-hover:text-cyan-400 transition-colors relative z-10" />
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors">
                                    {layer.title}
                                </h3>
                                <p className="text-cyan-500 font-mono text-sm tracking-wide">
                                    {layer.subtitle}
                                </p>
                            </div>

                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                {layer.description}
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 pt-4">
                                {layer.features.map((feature, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-cyan-950/20 group-hover:border-cyan-500/20 transition-colors">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                                            <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                                            {feature.name}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {feature.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                    </div>
                ))}
            </div>
        </section>
    )
}
