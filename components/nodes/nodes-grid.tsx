import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { NetworkNode } from "@/lib/nodes/types"

interface NodesGridProps {
    nodes: NetworkNode[]
}

export function NodesGrid({ nodes }: NodesGridProps) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {nodes.map((node, i) => (
                <Link href={`/nodes/${node.slug}`} key={i} className="block h-full">
                    <div className="group relative p-6 h-full bg-zinc-950/30 backdrop-blur-lg border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.1)]">
                        {/* Status Dot */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-current ${node.color} animate-pulse`} />
                            <span className="text-[10px] font-mono text-muted-foreground uppercase">{node.status}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-6 mt-2">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 font-bold text-xl text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                {node.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">{node.name}</h3>
                                <div className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-wider">{node.type}</div>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                            {node.description}
                        </p>

                        <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
                            <span className="text-[10px] font-mono text-muted-foreground">LATENCY: {node.stats.latency || 'N/A'}</span>
                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-colors -translate-x-2 group-hover:translate-x-0" />
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                </Link>
            ))}
        </div>
    )
}
