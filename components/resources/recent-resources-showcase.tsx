import Link from "next/link";
import { ResourceItem } from "@/lib/resources/types";
import { ArrowRight, ShieldCheck, Cpu, Network, Layers, Key, Box, Database, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecentResourcesShowcaseProps {
    resources: ResourceItem[];
}

const getTypeIcon = (type: string) => {
    switch (type) {
        case 'agent': return Cpu;
        case 'protocol': return Network;
        case 'dapp': return Layers;
        case 'wallet': return Key;
        case 'sdk': return Box;
        case 'project': return Database;
        default: return Box;
    }
};

export function RecentResourcesShowcase({ resources }: RecentResourcesShowcaseProps) {
    return (
        <div className="w-full mb-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // RECENT_DEPLOYMENTS
                </h2>
                <Link href="/resources" className="group flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-400 transition-colors">
                    [VIEW_ALL_SYSTEMS]
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {resources.map((resource, i) => {
                    const Icon = getTypeIcon(resource.type);
                    return (
                        <Link
                            href={`/resources/${resource.slug}`}
                            key={resource.slug}
                            className="group relative block h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-xl p-6 overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-2px]">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

                                {/* Header */}
                                <div className="relative z-10 flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                                            {resource.media.logoUrl ? (
                                                <img src={resource.media.logoUrl} alt={resource.name} className="w-full h-full object-cover rounded-md opacity-80 group-hover:opacity-100" />
                                            ) : (
                                                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-none mb-1 group-hover:text-cyan-400 transition-colors">{resource.name}</h3>
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{resource.type}</span>
                                        </div>
                                    </div>

                                    {resource.verified && (
                                        <div className="text-emerald-500 bg-emerald-500/10 p-1 rounded border border-emerald-500/20">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <p className="relative z-10 text-sm text-muted-foreground/80 line-clamp-2 mb-6 font-light h-[40px]">
                                    {resource.short_description}
                                </p>

                                {/* Footer */}
                                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex gap-2">
                                        {resource.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-muted-foreground/60 font-mono group-hover:border-white/10 group-hover:text-muted-foreground transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <ArrowRight className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}


                {/* Empty State / Coming Soon placeholders if less than 3 */}
                {resources.length < 3 && Array.from({ length: 3 - resources.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="relative h-full bg-white/[0.02] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center border-dashed">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3">
                            <Box className="w-4 h-4 text-muted-foreground/30" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground/40">[SLOT_AVAILABLE]</span>
                    </div>
                ))}

            </div>
        </div>
    );
}
