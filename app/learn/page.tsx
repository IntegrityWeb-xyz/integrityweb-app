import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Metadata } from "next"

import { EventsCarousel } from "@/components/events/events-carousel"
import { AxiomsTicker } from "@/components/learn/axioms-ticker"
import { LearningPaths } from "@/components/learn/learning-paths"
import { TechStackViewer } from "@/components/learn/tech-stack-viewer"
import { PlayCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Learn Integrity Web | Protocols & Axioms',
    description: 'Master the concepts of verifiable AI, zero-knowledge proofs, and the integrity stack. Tutorials, guides, and deep dives.',
}

import { getAllEvents } from "@/lib/events/data"
import { getAllVideos } from "@/lib/videos/data"
import { VideosCarousel } from "@/components/videos/videos-carousel"

export default async function LearnPage() {
    const events = await getAllEvents();
    const videos = getAllVideos();

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
                            <Link href="/videos">
                                <span className="font-mono text-xs text-primary/50 hover:text-cyan-400 cursor-pointer transition-colors">
                                    [VIEW_ALL_ARCHIVES]
                                </span>
                            </Link>
                        </div>

                        <VideosCarousel videos={videos} />
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
                                            {[
                                                "Protocol Update: Cashu Integration Live",
                                                "Spec Release: RISC-V Sovereign Extensions",
                                                "Network Upgrade: Tor Bridge Support"
                                            ][i]}
                                        </h3>
                                        <p className="font-mono text-xs text-muted-foreground">
                                            {[
                                                "Enable near-instant, private ecash settlements on the Integrity Web.",
                                                "New ISA instructions for hardware-enforced zero-knowledge proof generation.",
                                                "Enhanced censorship resistance traversal for node operators in restricted regions."
                                            ][i]}
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
