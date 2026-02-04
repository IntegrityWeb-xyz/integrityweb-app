import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { getNodeBySlug, getAllNodes } from "@/lib/nodes/data"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Twitter, Globe, Clock, Server, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
    const nodes = getAllNodes()
    return nodes.map((node) => ({
        slug: node.slug,
    }))
}

export default async function NodePage({ params }: { params: { slug: string } }) {
    // Await params in Next.js 15+
    const { slug } = await params
    const node = await getNodeBySlug(slug)

    if (!node) {
        notFound()
    }

    return (
        <div className="min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <Link href="/nodes" className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-cyan-400 mb-8 transition-colors">
                    <ArrowLeft className="w-3 h-3 mr-2" />
                    RETURN_TO_GRID
                </Link>

                {/* Node Header */}
                <div className="relative mb-12 p-8 rounded-2xl bg-zinc-950/50 border border-white/10 backdrop-blur-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="w-24 h-24 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-4xl font-bold text-white/80">
                            {node.name.charAt(0)}
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <h1 className="text-3xl font-bold text-white tracking-tight">{node.name}</h1>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 ${node.color} bg-white/5`}>
                                    {node.type}
                                </span>
                            </div>

                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                                {node.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {node.website && (
                                    <Link href={node.website} target="_blank">
                                        <Button size="sm" variant="outline" className="h-8 text-xs font-mono border-white/10 hover:bg-white/5">
                                            <Globe className="w-3 h-3 mr-2" />
                                            WEBSITE
                                        </Button>
                                    </Link>
                                )}
                                {node.twitter && (
                                    <Link href={node.twitter} target="_blank">
                                        <Button size="sm" variant="outline" className="h-8 text-xs font-mono border-white/10 hover:bg-white/5">
                                            <Twitter className="w-3 h-3 mr-2" />
                                            TWITTER
                                        </Button>
                                    </Link>
                                )}
                                {node.github && (
                                    <Link href={node.github} target="_blank">
                                        <Button size="sm" variant="outline" className="h-8 text-xs font-mono border-white/10 hover:bg-white/5">
                                            <Github className="w-3 h-3 mr-2" />
                                            GITHUB
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 items-end min-w-[140px]">
                            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Status</div>
                            <div className={`flex items-center gap-2 font-mono font-bold ${node.color}`}>
                                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                {node.status}
                            </div>
                            <div className="text-[10px] font-mono text-muted-foreground mt-4 uppercase tracking-wider">Founded</div>
                            <div className="font-mono text-sm text-white">{node.founded}</div>
                        </div>
                    </div>
                </div>

                {/* Node Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                            <Activity className="w-3 h-3" />
                            LATENCY
                        </div>
                        <div className="text-xl font-mono text-white">{node.stats.latency || 'N/A'}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                            <Clock className="w-3 h-3" />
                            UPTIME
                        </div>
                        <div className="text-xl font-mono text-white">{node.stats.uptime || 'N/A'}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                            <Server className="w-3 h-3" />
                            TVL
                        </div>
                        <div className="text-xl font-mono text-white">{node.stats.tvl || 'N/A'}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                            <Activity className="w-3 h-3" />
                            PROPOSALS
                        </div>
                        <div className="text-xl font-mono text-white">{node.stats.proposals || 0}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
