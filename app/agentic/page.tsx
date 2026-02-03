import Link from "next/link"
import { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { AgentCapabilities } from "@/components/agentic/agent-capabilities"
import { UseCaseTerminal } from "@/components/agentic/use-case-terminal"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot } from "lucide-react"

export const metadata: Metadata = {
    title: 'Agentic Runtime | Integrity Web',
    description: 'Build autonomous agents with verifiable logic and sovereign identity. The operating system for the AI economy.',
}

export default function AgenticPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
            <Navigation />

            <main className="container mx-auto px-4 py-24 pb-48">

                <TerminalPageHeader
                    title="Agentic Runtime"
                    subtitle="Deploy verification-secured autonomous agents on the Integrity Web."
                    command="integrity run --agent"
                    status="DAEMON_ACTIVE"
                    statusColor="cyan"
                    stats={[
                        { label: "Active Agents", value: "14,204" },
                        { label: "Verifications", value: "240/sec" },
                        { label: "Protocol", value: "ERC-7579" }
                    ]}
                />

                <div className="max-w-6xl mx-auto">
                    {/* Capabilities Grid */}
                    <AgentCapabilities />

                    {/* Code Simulation */}
                    <UseCaseTerminal />

                    {/* Active Agents List Reuse (Simple version) */}
                    <div className="mt-24 border-t border-white/5 pt-12">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                // LIVE_AGENTS
                            </h2>
                            <Link href="/explore">
                                <Button variant="link" className="text-xs font-mono text-primary">
                                    VIEW_ALL <ArrowRight className="w-3 h-3 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: "Sentinel_01", task: "Security Monitoring", uptime: "99.99%", earned: "124 ETH" },
                                { name: "ArbBot_X", task: "DEX Arbitrage", uptime: "98.2%", earned: "450 ETH" },
                                { name: "GovDelegate", task: "DAO Voting", uptime: "100%", earned: "0 ETH" }
                            ].map((agent, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-950/30 border border-white/5 rounded-lg hover:border-white/20 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white/5 rounded">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-mono text-sm font-bold text-white">{agent.name}</div>
                                            <div className="font-mono text-[10px] text-muted-foreground">{agent.task}</div>
                                        </div>
                                    </div>
                                    <div className="text-right font-mono text-xs">
                                        <div className="text-cyan-400">{agent.uptime} UP</div>
                                        <div className="text-white/50">{agent.earned}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

