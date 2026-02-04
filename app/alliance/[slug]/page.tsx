import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, ShieldCheck, Twitter, Github, Globe, Activity, Clock, Server } from "lucide-react"
import { getAllianceMemberBySlug } from "@/lib/alliance/data"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function AllianceMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const member = await getAllianceMemberBySlug(slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-500">
            <Navigation />

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] opacity-20 translate-y-1/2 translate-x-1/4" />
            </div>

            <main className="container mx-auto px-4 pt-32 pb-48 relative z-10 max-w-7xl">

                {/* Breadcrumb Navigation */}
                <div className="mb-8 flex items-center gap-4">
                    <Link href="/alliance" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <span className="font-mono tracking-wide">ALLIANCE_INDEX</span>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Main Profile */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Hero Glass Card */}
                        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-8 md:p-12">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)] opacity-20 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                {/* Logo Box */}
                                <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-4xl font-bold font-mono text-white/80">
                                    {member.name.charAt(0)}
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <div className={`px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 uppercase tracking-wider ${member.color}`}>
                                                {member.status}
                                            </div>
                                            <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-muted-foreground border border-white/10 uppercase tracking-wider">
                                                {member.type}
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{member.name}</h1>
                                        <p className="text-lg text-muted-foreground mt-4 font-light leading-relaxed max-w-2xl">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Node Telemetry Dashboard */}
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/20 backdrop-blur-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Activity className="w-3.5 h-3.5" />
                                    Node Telemetry
                                </h2>
                                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    LIVE_FEED
                                </span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {member.stats.latency && (
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Latency</span>
                                        <span className="text-xl font-mono text-white font-bold">{member.stats.latency}</span>
                                    </div>
                                )}
                                {member.stats.uptime && (
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Uptime</span>
                                        <span className="text-xl font-mono text-white font-bold">{member.stats.uptime}</span>
                                    </div>
                                )}
                                {member.stats.tvl && (
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Secured TVL</span>
                                        <span className="text-xl font-mono text-white font-bold">{member.stats.tvl}</span>
                                    </div>
                                )}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Founded</span>
                                    <span className="text-xl font-mono text-white font-bold">{member.founded}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Connection Info */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Connection Widget */}
                        <div className="rounded-xl border border-white/10 bg-zinc-950/20 backdrop-blur-md p-6 sticky top-24">
                            <h3 className="text-sm font-bold text-white mb-6">Establish Connection</h3>

                            <div className="space-y-3">
                                {member.website && (
                                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full bg-white text-black hover:bg-cyan-50 font-bold justify-between group">
                                            Official Uplink
                                            <Globe className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </a>
                                )}
                                <div className="grid grid-cols-2 gap-3">
                                    {member.twitter && (
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-white justify-center group">
                                                <Twitter className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                                            </Button>
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-white justify-center group">
                                                <Github className="w-4 h-4 group-hover:text-white transition-colors" />
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/5">
                                        <Server className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-muted-foreground uppercase">Node Status</div>
                                        <div className="text-sm font-bold text-white">Online & Validating</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/5">
                                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-muted-foreground uppercase">Integrity Score</div>
                                        <div className="text-sm font-bold text-white">100/100</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
