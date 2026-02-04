import { PrimitiveItem } from "@/lib/primitives/types"
import { Shield, Cpu, Network, Database, Lock, Smartphone } from "lucide-react"

interface PrimitivesShowcaseProps {
    primitives: PrimitiveItem[]
}

export function PrimitivesShowcase({ primitives }: PrimitivesShowcaseProps) {
    // Helper to get icon based on type or name
    const getIcon = (item: PrimitiveItem) => {
        if (item.type === "IDENTITY") return <Shield className="w-5 h-5 text-cyan-400" />;
        if (item.type === "COMPUTE") return <Cpu className="w-5 h-5 text-emerald-400" />;
        if (item.type === "MESSAGING") return <Network className="w-5 h-5 text-purple-400" />;
        return <Database className="w-5 h-5 text-zinc-400" />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {primitives.map((item) => (
                <div key={item.name} className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg hover:border-cyan-500/30 transition-colors group">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-black border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                                {getIcon(item)}
                            </div>
                            <div>
                                <h3 className="text-white font-mono font-bold text-sm">{item.name}</h3>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.type}</span>
                            </div>
                        </div>

                        <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'STABLE' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed pl-[3.25rem]">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
