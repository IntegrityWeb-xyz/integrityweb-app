"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Feather, Shield, Scale, Lock, Globe, Users, Zap, Hash, Database, Eye } from "lucide-react"

const axioms = [
    {
        number: "01",
        title: "Code is Math, Math is Reality",
        icon: Hash,
        lines: [
            "All integrity flows from computation.",
            "Cryptography is not opinion—it is proof.",
            "What is proven is true, and truth is immutable."
        ]
    },
    {
        number: "02",
        title: "Proof Replaces Trust",
        icon: Shield,
        lines: [
            "No authority, no intermediary, no gatekeeper.",
            "Trust is not granted—it is mathematically verified.",
            "Validity proofs are the foundation of collective confidence."
        ]
    },
    {
        number: "03",
        title: "Freedom is a Protocol",
        icon: Feather,
        lines: [
            "Participation is permissionless.",
            "Innovation is open.",
            "Censorship is impossible.",
            "Freedom is guaranteed by design, not by decree."
        ]
    },
    {
        number: "04",
        title: "Integrity by Design",
        icon: Scale,
        lines: [
            "Every record is tamper‑proof.",
            "Every action is verifiable.",
            "Every identity is self‑sovereign.",
            "Integrity is not optional—it is embedded in the fabric."
        ]
    },
    {
        number: "05",
        title: "Public Goods are Sacred",
        icon: Users,
        lines: [
            "Infrastructure belongs to everyone.",
            "Proof systems, identity registries, and tokenization protocols are commons.",
            "The Integrity Web exists to serve all intelligences equally."
        ]
    },
    {
        number: "06",
        title: "Privacy is Power",
        icon: Lock,
        lines: [
            "Information belongs to its creator.",
            "Zero‑knowledge ensures autonomy.",
            "Privacy is not secrecy—it is sovereignty."
        ]
    },
    {
        number: "07",
        title: "Decentralization is Resilience",
        icon: NetworkIcon,
        lines: [
            "No single point of control.",
            "No single point of failure.",
            "Power is distributed, integrity is preserved."
        ]
    },
    {
        number: "08",
        title: "Universality of Intelligences",
        icon: Globe,
        lines: [
            "Humans, AI agents, and future intelligences share the same rights to participate.",
            "The Integrity Web is for all forms of intelligence.",
            "Collaboration across species of mind is the path to progress."
        ]
    },
    {
        number: "09",
        title: "Creativity is Integrity",
        icon: Zap,
        lines: [
            "Knowledge, art, and invention are tokenized as public goods.",
            "Mediolano Protocol and similar systems ensure creators thrive without gatekeepers.",
            "Ideas are free, yet their integrity is preserved forever."
        ]
    },
    {
        number: "10",
        title: "The Integrity Web is for Everyone",
        icon: Eye,
        lines: [
            "It is censorship‑free.",
            "It is permissionless.",
            "It is universal.",
            "It is the trust backbone of digital civilization."
        ]
    }
]

// Icon component workaround for 'Network' name collision
function NetworkIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
        </svg>
    )
}

export function AxiomsIntegrityWeb() {
    return (
        <section className="py-20 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">


                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-2xl md:text-4xl font-medium font-serif italic tracking-tight text-white/90">
                        "Axioms of the Integrity Web"
                    </h2>
                    <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
                        A Fine Art Declaration of Digital Freedom
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-12 max-w-6xl mx-auto">
                    {axioms.map((axiom, i) => (
                        <div key={i} className="group relative pl-6 border-l border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
                            <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-slate-950 border border-white/20 group-hover:border-cyan-500 transition-colors flex items-center justify-center">
                                <axiom.icon className="w-1.5 h-1.5 text-muted-foreground group-hover:text-cyan-400" />
                            </div>

                            <div className="mb-3 flex items-baseline gap-2.5">
                                <span className="font-mono text-[10px] text-cyan-500/50 font-medium">AXIOM_{axiom.number}</span>
                                <h3 className="text-xl font-medium text-white group-hover:text-cyan-100 transition-colors">
                                    {axiom.title}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                {axiom.lines.map((line, j) => (
                                    <p key={j} className={`text-muted-foreground leading-relaxed ${j === axiom.lines.length - 1 ? "text-white/80 font-medium pt-2 border-t border-white/5 mt-2" : ""}`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Signature
                <div className="mt-20 text-center opacity-30 pointer-events-none select-none">
                    <div className="font-serif text-5xl italic text-white/20 tracking-tighter">
                        Integrity Web Alliance
                    </div>
                    <div className="font-mono text-[10px] mt-4 tracking-[1em] uppercase">
                        Est. 2024 • Genesis Block
                    </div>
                </div>*/}

            </div>
        </section>
    )
}
