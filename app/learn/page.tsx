import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Metadata } from "next"

import { EventsCarousel } from "@/components/events/events-carousel"
import { AxiomsTicker } from "@/components/learn/axioms-ticker"
import { LearningPaths } from "@/components/learn/learning-paths"
import { TechStackViewer } from "@/components/learn/tech-stack-viewer"
import { PlayCircle } from "lucide-react"

export const metadata: Metadata = {
    title: 'Learn Integrity Web | Protocols & Axioms',
    description: 'Master the concepts of verifiable AI, zero-knowledge proofs, and the integrity stack. Tutorials, guides, and deep dives.',
}

import { getAllEvents } from "@/lib/events/data"

export default async function LearnPage() {
    const events = await getAllEvents();

    return (
        <div className="min-h-screen bg-transparent text-foreground">
            <Navigation />

            <main className="pt-24 pb-48">
                <div className="container mx-auto px-4 mb-2">
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
                </div>

                <div className="mb-12">
                    <AxiomsTicker />
                </div>

                <div className="container mx-auto px-4 space-y-24">

                    {/* Interactive Learning Paths */}
                    <LearningPaths />

                    {/* Architecture Visualization */}
                    <TechStackViewer />

                    {/* Video Logs Section */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                // VISUAL_ARCHIVES
                            </h2>
                            <span className="font-mono text-xs text-primary/50">
                                [STREAM_ACTIVE]
                            </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Intro to ZK-STARKs", duration: "12:04", views: "1.2k" },
                                { title: "Building Autonomous Agents", duration: "45:20", views: "890" },
                                { title: "State Channels Explained", duration: "08:15", views: "3.4k" }
                            ].map((vid, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="relative aspect-video bg-slate-900 border border-white/10 rounded-lg overflow-hidden mb-3 group-hover:border-primary/50 transition-colors">
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                                            <PlayCircle className="w-12 h-12 text-white/70 group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
                                        </div>
                                        <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/80 text-[10px] font-mono text-white rounded border border-white/10">
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
                    <div className="border-t border-white/5 pt-12">
                        <EventsCarousel initialEvents={events} />
                    </div>

                    {/* Recent Updates Feed */}
                    <div className="border-t border-white/5 pt-12">
                        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8">
                            // LATEST_TRANSMISSIONS
                        </h2>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group cursor-pointer relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/0 group-hover:bg-primary/50 transition-colors" />
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


                </div>
            </main>
        </div>
    )
}
