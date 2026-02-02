"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, ShieldCheck, Key, Network, Zap, Lock } from "lucide-react"

const capabilities = [
    {
        title: "Sovereign Identity",
        desc: "Agents own their keys and reputation. No platform lock-in.",
        icon: Key,
        feature_id: "ID_PROTO_01",
        status: "ACTIVE"
    },
    {
        title: "ZK-Verifiable Logic",
        desc: "Proof of reasoning. Verify *why* an agent took an action.",
        icon: ShieldCheck,
        feature_id: "ZK_VM_04",
        status: "BETA"
    },
    {
        title: "Autonomous Wallet",
        desc: "Native Account Abstraction (ERC-4337) support for complex txs.",
        icon: Lock,
        feature_id: "AA_MOD_02",
        status: "ACTIVE"
    },
    {
        title: "Swarm Networking",
        desc: "P2P communication protocol for multi-agent coordination.",
        icon: Network,
        feature_id: "P2P_NET_09",
        status: "DEV"
    },
    {
        title: "High-Speed Compute",
        desc: "Off-chain execution with on-chain settlement.",
        icon: Zap,
        feature_id: "L3_EXEC_05",
        status: "ACTIVE"
    },
    {
        title: "Model Agnostic",
        desc: "Compatible with Llama, GPT, Claude, or custom models.",
        icon: Cpu,
        feature_id: "LLM_INT_03",
        status: "ACTIVE"
    }
]

export function AgentCapabilities() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // RUNTIME_CAPABILITIES
                </h2>
                <div className="flex gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-500">SYSTEM_OPTIMAL</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((item, i) => (
                    <Card key={i} className="bg-slate-950/40 border border-white/10 hover:border-cyan-500/50 transition-all group overflow-hidden relative">
                        {/* Status / ID Header */}
                        <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-muted-foreground group-hover:text-cyan-400 group-hover:border-cyan-500/30">
                                {item.feature_id}
                            </span>
                        </div>

                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-colors">
                                <item.icon className="w-5 h-5 text-white group-hover:text-cyan-400 trasition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                                {item.title}
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed h-[40px]">
                                {item.desc}
                            </p>

                            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-mono text-muted-foreground uppercase">Status</span>
                                <span className={`text-[10px] font-mono font-bold ${item.status === 'ACTIVE' ? 'text-emerald-400' : 'text-amber-400'}`}>
                                    [{item.status}]
                                </span>
                            </div>
                        </CardContent>

                        {/* Hover scanline */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />
                    </Card>
                ))}
            </div>
        </section>
    )
}
