import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShieldCheck, Globe, Twitter, Github, Cpu, Database, Network, Key, Layers, Box } from "lucide-react";
import { ResourceItem } from "@/lib/resources/types";

// Helper to get iconography and colors based on type
const getTypeConfig = (type: string) => {
    switch (type) {
        case 'agent': return { icon: Cpu, color: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" };
        case 'protocol': return { icon: Network, color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" };
        case 'dapp': return { icon: Layers, color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" };
        case 'wallet': return { icon: Key, color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" };
        case 'sdk': return { icon: Box, color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" };
        case 'project': return { icon: Database, color: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/10" };
        default: return { icon: Box, color: "text-zinc-400", border: "border-zinc-500/30", bg: "bg-zinc-500/10" };
    }
};

const getTypeLabel = (type: string) => {
    switch (type) {
        case 'dapp': return 'DAPP_MODULE';
        case 'sdk': return 'SDK_CORE';
        default: return `${type.toUpperCase()} _UNIT`;
    }
}

interface ResourceCardProps {
    resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
    const config = getTypeConfig(resource.type);
    const typeLabel = getTypeLabel(resource.type);
    const Icon = config.icon;

    return (
        <div className={`
      relative group h-full flex flex-col
      bg-black/60 backdrop-blur-xl border border-white/10 rounded-sm
      hover:border-white/20 transition-all duration-300
    `}>

            {/* Top Status Bar */}
            <div className="h-6 flex items-center justify-between px-2 text-[9px] font-mono text-white/40 border-b border-white/5 bg-white/5">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                    <Icon className={`w-2.5 h-2.5 ${config.color}`} />
                    {typeLabel}
                </span>
                <span className="opacity-50">ID: {resource.name.substring(0, 3).toUpperCase()}</span>
            </div>

            <div className="p-5 flex flex-col flex-grow relative overflow-hidden">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

                {/* Header content */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className={`
              w-10 h-10 rounded-sm flex items-center justify-center 
              border ${config.border} ${config.bg}
              group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-shadow
    `}>
                        {resource.media.logoUrl ? (
                            <img src={resource.media.logoUrl} alt={resource.name} className="w-full h-full object-cover rounded-[1px] opacity-80 group-hover:opacity-100 transition-opacity" />
                        ) : (
                            <Icon className={`w-5 h-5 ${config.color}`} />
                        )}
                    </div>

                    {resource.verified && (
                        <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 px-1.5 py-0.5 rounded-[1px]">
                            <ShieldCheck className="w-2.5 h-2.5" /> VERIFIED
                        </div>
                    )}
                </div>

                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {resource.description}
                </p>

                {/* Tags */}
                <div className="mt-auto mb-5 space-y-2">
                    <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[9px] font-mono text-white/50 bg-white/5 px-1.5 py-0.5 rounded-[1px] border border-white/5 uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-white/5 flex gap-2">
                    <Link href={`/resources/${resource.slug}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full h-8 text-[10px] uppercase tracking-widest bg-transparent border-white/20 hover:bg-white/5 hover:text-cyan-400 hover:border-cyan-500/50 rounded-sm">
                            Access_Data
                        </Button>
                    </Link>

                    {resource.links.website && (
                        <Link href={resource.links.website} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-sm hover:bg-white/10 text-white/50 hover:text-white">
                                <ExternalLink className="h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    )}
                </div>

            </div>

            {/* Hover corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/0 group-hover:border-cyan-500/50 transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/0 group-hover:border-cyan-500/50 transition-colors duration-500" />
        </div>
    );
}
