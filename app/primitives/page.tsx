import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { getAllPrimitives } from "@/lib/primitives/data"
import Link from "next/link"
import { ArrowRight, Box, Cpu, Database, Network, Shield, Download } from "lucide-react"

export default async function PrimitivesPage() {
    const primitives = await getAllPrimitives();

    return (
        <div className="min-h-screen pb-20 pt-24 text-foreground bg-transparent selection:bg-purple-500/20 selection:text-purple-400">
            <Navigation />

            <div className="container mx-auto px-4 max-w-7xl">
                <TerminalPageHeader
                    title="Core Primitives"
                    subtitle="Fundamental building blocks for the verifiable web. Cryptographically audited, open-source, and ready for deployment."
                    command="npm install @integrity/core"
                    status="STABLE_V1"
                    statusColor="cyan"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {primitives.map((primitive) => (
                        <Link href={`/primitives/${primitive.slug}`} key={primitive.slug} className="group h-full">
                            <div className="relative h-full bg-zinc-950/30 backdrop-blur-md border border-white/10 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] flex flex-col">

                                {/* Top Bar */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`
                                        px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider
                                        ${primitive.status === 'STABLE' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            primitive.status === 'BETA' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                'bg-purple-500/10 text-purple-400 border border-purple-500/20'}
                                    `}>
                                        {primitive.status}
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground">{primitive.version}</span>
                                </div>

                                {/* Content */}
                                <div className="mb-6 flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{primitive.name}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">{primitive.description}</p>
                                </div>

                                {/* Stats line */}
                                <div className="flex items-center gap-4 py-4 border-t border-white/5 mb-4">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Download className="w-3.5 h-3.5 opacity-70" />
                                        <span className="font-mono">{primitive.stats.downloads}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Box className="w-3.5 h-3.5 opacity-70" />
                                        <span className="font-mono">{primitive.type}</span>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="mt-auto flex items-center justify-between text-xs font-mono group-hover:text-purple-400 transition-colors">
                                    <span className="uppercase tracking-widest text-muted-foreground group-hover:text-purple-400/80">View Specs</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
