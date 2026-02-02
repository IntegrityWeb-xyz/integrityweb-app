
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Globe, Cpu, User, Layers, Share2, Activity, Shield, Network } from "lucide-react"
import { IntegrityCard } from "@/components/unique/integrity-card"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { EventsCarousel } from "@/components/events/events-carousel"

export default function ExplorePage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="container mx-auto px-4 py-12">
                <TerminalPageHeader
                    title="Network Scanner"
                    subtitle="Explore the live topology of verified applications and agents on the grid."
                    command="Title: Network Scanner"
                    status="SCANNING_NODES"
                    statusColor="cyan"
                    stats={[
                        { label: "Active Nodes", value: "24,591" },
                        { label: "Block Height", value: "#8,992,102" },
                        { label: "TPS", value: "14,500" }
                    ]}
                />

                {/* Categories */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {["All Categories", "DeFi Protocols", "Autonomous Agents", "Identity Layers", "Verifiable Compute"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`
                                px-4 py-2 rounded-lg text-sm font-mono border transition-all duration-300
                                ${i === 0
                                    ? "bg-primary/20 border-primary/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    : "bg-transparent border-white/10 text-muted-foreground hover:border-primary/30 hover:text-white hover:bg-white/5"}
                            `}
                        >
                            [{cat.toUpperCase()}]
                        </button>
                    ))}
                </div>

                {/* Network Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mock Items */}
                    {[
                        { title: "VeriAuth", type: "Identity", icon: User, hash: "0x7a...9f2", status: "Active", desc: "Decentralized identity verification with ZK proofs." },
                        { title: "AgentLink", type: "Protocol", icon: Cpu, hash: "0x3b...1c8", status: "Active", desc: "Inter-agent communication standard for swarm intelligence." },
                        { title: "TrustBridge", type: "dApp", icon: Globe, hash: "0x9d...4e1", status: "Auditing", desc: "Cross-chain asset bridging with fraud proofs." },
                        { title: "ComputeCore", type: "Network", icon: Activity, hash: "0xf4...8a2", status: "Active", desc: "Verifiable off-chain computation market." },
                        { title: "SafeVault", type: "dApp", icon: Layers, hash: "0x2c...7b9", status: "Active", desc: "Multi-sig treasury management for DAOs." },
                        { title: "OpenVote", type: "Governance", icon: Share2, hash: "0xe1...5d3", status: "Voting", desc: "Privacy-preserving governance voting mechanisms." },
                        { title: "Sentience_01", type: "Agent", icon: Cpu, hash: "0x1a...2b3", status: "Running", desc: "Autonomous market making agent." },
                        { title: "Guardian_X", type: "Agent", icon: Shield, hash: "0x8c...4d5", status: "Running", desc: "Automated smart contract security monitor." },
                        { title: "DataWeave", type: "Network", icon: Network, hash: "0x5e...6f7", status: "Syncing", desc: "Permanent decentralized data storage mesh." }
                    ].map((item, i) => (
                        <IntegrityCard key={i} className="flex flex-col h-full bg-slate-950/40 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="h-10 w-10 rounded-sm border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <item.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary mb-1 font-mono text-[10px] tracking-wider uppercase">
                                        {item.type}
                                    </Badge>
                                    <span className="text-[10px] font-mono text-muted-foreground/50">{item.hash}</span>
                                </div>
                            </div>

                            <h3 className="font-mono font-semibold text-xl mb-2 text-white group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' || item.status === 'Running' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500'}`} />
                                    {item.status.toUpperCase()}
                                </div>

                                <Button variant="link" className="h-auto p-0 text-primary text-xs font-mono tracking-widest hover:text-cyan-400">
                                    CONNECTION_REQUEST &rarr;
                                </Button>
                            </div>
                        </IntegrityCard>
                    ))}
                </div>

                {/* Events Section */}
                <div className="mt-12 border-t border-white/10">
                    <EventsCarousel />
                </div>
            </main>
        </div>
    )
}
