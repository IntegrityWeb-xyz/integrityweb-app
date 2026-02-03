"use client"

import { Box, CreditCard, Wallet, Link as LinkIcon, ShieldCheck, Database } from "lucide-react"

const partners = [
    {
        title: "Starknet",
        description: "The validity proof chain. Build on Ethereum with infinite scale and native account abstraction.",
        features: ["Validity Proofs", "Layer 2 Security", "Cheap Transactions"],
        icon: Box,
        install: "npm i starknet"
    },
    {
        title: "Mediolano",
        description: "Protocol for IP tokenization and programmable culture. Create verified NFT collections and licensing primitives.",
        features: ["IP Tokenization", "Licensing Modules", "Royalty Enforcement"],
        icon: Database, // Representing the registry/data aspect
        install: "npm i @mediolano/sdk"
    },
    {
        title: "Chipipay",
        description: "Invisible wallet infrastructure. Onboard users with social logins, gasless transactions, and fiat onramps.",
        features: ["Invisible Wallets", "Gasless Paymaster", "Onramp / Offramp"],
        icon: Wallet,
        install: "npm i chipipay-sdk"
    }
]

export function AllianceGrid() {
    return (
        <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // VERIFIED_PRIMITIVES
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, i) => (
                    <div
                        key={i}
                        className="group relative p-6 bg-slate-950/30 backdrop-blur-lg border border-white/5 rounded-lg hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <partner.icon className="w-12 h-12 text-cyan-500/20" />
                        </div>

                        <div className="mb-4 p-3 bg-slate-900/50 rounded-lg w-fit border border-white/5 group-hover:border-white/10">
                            <partner.icon className="w-5 h-5 text-cyan-400" />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                            {partner.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                            {partner.description}
                        </p>

                        <div className="mb-6 space-y-2">
                            {partner.features.map((feature, j) => (
                                <div key={j} className="flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3 text-cyan-500/70" />
                                    <span className="text-xs font-mono text-white/70">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                            <code className="text-[10px] font-mono text-cyan-500/80 bg-cyan-950/20 px-2 py-1 rounded">
                                {partner.install}
                            </code>
                        </div>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
                    </div>
                ))}
            </div>
        </section>
    )
}
