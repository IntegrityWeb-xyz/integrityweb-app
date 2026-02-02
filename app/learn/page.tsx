import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, BookOpen, MessageSquare, PlayCircle, Radio, ArrowRight, Rss, Network, Binary } from "lucide-react"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Learn Integrity Web | Protocols & Axioms',
    description: 'Master the concepts of verifiable AI, zero-knowledge proofs, and the integrity stack. Tutorials, guides, and deep dives.',
}
import { EventsCarousel } from "@/components/events/events-carousel"

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground">
            <Navigation />

            <main className="container mx-auto px-4 py-24 pb-48">
                <TerminalPageHeader
                    title="Knowledge Matrix"
                    subtitle="Access the central database of Integrity Web protocols and axioms."
                    command="./query --deep-scan"
                    status="UPLINK_STABLE"
                    statusColor="cyan"
                    stats={[
                        { label: "Data Nodes", value: "8,942" },
                        { label: "Bandwidth", value: "12 TB/s" },
                        { label: "Encryption", value: "ZK-STARK" }
                    ]}
                />

                {/* Matrix Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "CORE_CONCEPTS",
                            desc: "Initialize understanding of ZK-Rollups and State.",
                            icon: Binary,
                            stat: "4 MODULES"
                        },
                        {
                            title: "AGENT_PROTOCOLS",
                            desc: "Designing autonomous sovereign agents.",
                            icon: Network,
                            stat: "6 MODULES"
                        },
                        {
                            title: "VIDEO_LOGS",
                            desc: "Visual data streams from core developers.",
                            icon: PlayCircle,
                            stat: "12 STREAMS"
                        }
                    ].map((item, i) => (
                        <div key={i} className="group relative bg-slate-950/40 border border-white/10 hover:border-primary/50 transition-all duration-300 rounded-sm overflow-hidden min-h-[200px] flex flex-col p-6 cursor-pointer">
                            <div className="flex justify-between items-start mb-auto">
                                <item.icon className="h-8 w-8 text-slate-700 group-hover:text-primary transition-colors" />
                                <span className="font-mono text-[10px] text-muted-foreground border border-white/10 px-2 py-0.5 rounded">
                                    {item.stat}
                                </span>
                            </div>

                            <div>
                                <h3 className="font-mono text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="font-mono text-xs text-muted-foreground">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-primary/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-primary/50 transition-colors" />
                        </div>
                    ))}
                </div>

                {/* Video Logs Section */}
                <div className="py-12">
                    <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-6">
                        // VISUAL_ARCHIVES
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Intro to ZK-STARKs", duration: "12:04", views: "1.2k" },
                            { title: "Building Autonomous Agents", duration: "45:20", views: "890" },
                            { title: "State Channels Explained", duration: "08:15", views: "3.4k" }
                        ].map((vid, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-video bg-slate-900 border border-white/10 rounded-lg overflow-hidden mb-3 group-hover:border-primary/50 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayCircle className="w-12 h-12 text-white/50 group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/80 text-[10px] font-mono text-white rounded">
                                        {vid.duration}
                                    </div>
                                </div>
                                <h3 className="font-mono text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-1">{vid.title}</h3>
                                <div className="flex gap-2 text-[10px] font-mono text-muted-foreground">
                                    <span>Views: {vid.views}</span>
                                    <span>[ARCHIVED]</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Events Section */}
                <EventsCarousel />

                {/* Recent Updates Feed */}
                <div className="mt-8 border-t border-white/10 pt-12">
                    <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8">
                        // LATEST_TRANSMISSIONS
                    </h2>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group cursor-pointer">
                                <div className="font-mono text-xs text-primary w-32 shrink-0">
                                    [2024.10.{10 + i}]
                                </div>
                                <div>
                                    <h3 className="font-mono text-white font-bold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                                        Protocol Update: v2.4.{i} Released
                                    </h3>
                                    <p className="font-mono text-xs text-muted-foreground">
                                        Optimized verification circuits and reduced proof generation time by 15%.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
