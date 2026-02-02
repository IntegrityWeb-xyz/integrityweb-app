"use client"

import { cn } from "@/lib/utils"
import { Hash, Shield, Feather, Scale, Users, Lock, Network, Globe, Zap, Eye } from "lucide-react"

const axioms = [
    {
        number: "01",
        text: "Code is Math, Math is Reality",
        icon: Hash,
    },
    {
        number: "02",
        text: "Proof Replaces Trust",
        icon: Shield,
    },
    {
        number: "03",
        text: "Freedom is a Protocol",
        icon: Feather,
    },
    {
        number: "04",
        text: "Integrity by Design",
        icon: Scale,
    },
    {
        number: "05",
        text: "Public Goods are Sacred",
        icon: Users,
    },
    {
        number: "06",
        text: "Privacy is Sovereignty",
        icon: Lock,
    },
    {
        number: "07",
        text: "Decentralization is Resilience",
        icon: Network,
    },
    {
        number: "08",
        text: "Universality of Intelligences",
        icon: Globe,
    },
    {
        number: "09",
        text: "Creativity is Integrity",
        icon: Zap,
    },
    {
        number: "10",
        text: "The Integrity Web is for Everyone",
        icon: Eye,
    },
]

export function AxiomsTicker() {
    return (
        <div className="w-full overflow-hidden bg-slate-950/50 border-y border-white/5 py-3 relative select-none">
            {/* Gradient masks for fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
                {/* Double the list to create seamless loop */}
                {[...axioms, ...axioms].map((axiom, i) => (
                    <div key={i} className="flex items-center gap-3 px-8 border-r border-white/5 last:border-r-0">
                        <span className="font-mono text-[10px] text-primary/50 font-bold">
                            AXIOM_{axiom.number}
                        </span>
                        <axiom.icon className="w-3 h-3 text-muted-foreground" />
                        <span className="font-mono text-sm text-white/80 whitespace-nowrap">
                            {axiom.text}
                        </span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-ticker {
                    animation: ticker 60s linear infinite;
                }
            `}</style>
        </div>
    )
}
