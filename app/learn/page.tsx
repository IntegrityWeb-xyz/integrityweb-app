import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Metadata } from "next"

import { EventsCarousel } from "@/components/events/events-carousel"
import { AxiomsTicker } from "@/components/learn/axioms-ticker"
import { LearningPaths } from "@/components/learn/learning-paths"
import { PlayCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Learn Integrity Web | Protocols & Axioms',
    description: 'Master the concepts of verifiable AI, zero-knowledge proofs, and the integrity stack. Tutorials, guides, and deep dives.',
}

import { getAllEvents } from "@/lib/events/data"
import { getAllVideos } from "@/lib/videos/data"
import { getAllQuotes } from "@/lib/quotes/data"
import { getAllPrimitives } from "@/lib/primitives/data"
import { VideosCarousel } from "@/components/videos/videos-carousel"
import { QuoteCard } from "@/components/quotes/quote-card"
import { PrimitivesShowcase } from "@/components/primitives/primitives-showcase"

export default async function LearnPage() {
    const events = await getAllEvents();
    const videos = getAllVideos();
    const quotes = getAllQuotes();
    const primitives = await getAllPrimitives();

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

                    {/* System Architecture */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                // SYSTEM_ARCHITECTURE
                            </h2>
                            <Link href="/primitives">
                                <span className="font-mono text-xs text-emerald-500/70 hover:text-emerald-400 cursor-pointer border border-emerald-500/20 px-2 py-0.5 rounded transition-colors">
                                    [VIEW_FULL_STACK]
                                </span>
                            </Link>
                        </div>
                        <PrimitivesShowcase primitives={primitives.slice(0, 6)} />
                    </div>

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
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                // COMMUNITY_SIGNALS
                            </h2>
                            <Link href="/quotes">
                                <span className="font-mono text-xs text-primary/50 hover:text-cyan-400 cursor-pointer transition-colors">
                                    [VIEW_ALL_SIGNALS]
                                </span>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {quotes.slice(0, 3).map((quote, i) => (
                                <QuoteCard key={i} quote={quote} />
                            ))}
                        </div>
                    </div>


                    {/* Documentation Showcase */}
                    <div className="border-t border-white/5 pt-12 pb-12">
                        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Master the Protocol</h2>
                                <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                                    Deep dive into the technical specifications, axioms, and architectural standards of the Integrity Web.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link href="/docs" className="inline-flex items-center justify-center h-10 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                                        Read Documentation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    )
}
