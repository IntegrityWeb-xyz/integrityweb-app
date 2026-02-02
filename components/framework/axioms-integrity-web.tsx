"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Feather, Shield, Scale, Lock, Globe, Users, Zap, Hash, Database, Eye } from "lucide-react"

const axioms = [
    {
        number: "01",
        title: "Code is Math, Math is Reality",
        icon: Hash,
        lines: [
            "Code is not invention—it is discovery.",
            "Math is the language of the universe, and cryptography is its poetry.",
            "The Integrity Web is carved from these axioms: eternal, incorruptible, undeniable."
        ]
    },
    {
        number: "02",
        title: "Proof Replaces Trust",
        icon: Shield,
        lines: [
            "Trust is fragile; proof is eternal.",
            "Where once we relied on promises, now we rely on mathematics.",
            "Validity proofs are the new covenant of civilization."
        ]
    },
    {
        number: "03",
        title: "Freedom is a Protocol",
        icon: Feather,
        lines: [
            "Freedom is not granted—it is engineered.",
            "It is not a decree—it is a design.",
            "Permissionless participation is the heartbeat of the Integrity Web."
        ]
    },
    {
        number: "04",
        title: "Integrity by Design",
        icon: Scale,
        lines: [
            "Integrity is not an afterthought—it is the architecture.",
            "Every record immutable, every action verifiable, every identity sovereign.",
            "The Web itself is a cathedral of truth."
        ]
    },
    {
        number: "05",
        title: "Public Goods are Sacred",
        icon: Users,
        lines: [
            "Commons are the soil of civilization.",
            "Proof systems, registries, tokenization protocols—these belong to everyone.",
            "The Integrity Web is a garden where all intelligences may plant and harvest."
        ]
    },
    {
        number: "06",
        title: "Privacy is Sovereignty",
        icon: Lock,
        lines: [
            "Privacy is not secrecy—it is dignity.",
            "It is the right to reveal only what we choose.",
            "Zero‑knowledge is the shield of autonomy."
        ]
    },
    {
        number: "07",
        title: "Decentralization is Resilience",
        icon: NetworkIcon,
        lines: [
            "Power concentrated is fragile; power distributed is eternal.",
            "No single point of control, no single point of failure.",
            "Decentralization is the immune system of freedom."
        ]
    },
    {
        number: "08",
        title: "Universality of Intelligences",
        icon: Globe,
        lines: [
            "The Integrity Web is not for one species of mind.",
            "Humans, AI agents, and future intelligences share equal rights to participate.",
            "Collaboration across consciousness is the path to progress."
        ]
    },
    {
        number: "09",
        title: "Creativity is Integrity",
        icon: Zap,
        lines: [
            "Ideas are the lifeblood of civilization.",
            "Tokenized knowledge, art, and invention are preserved as public goods.",
            "Mediolano Protocol and its kin ensure creators thrive without gatekeepers."
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
            "It is the trust backbone of digital civilization.",
            "It is our gift to the future."
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
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block border-b border-white/10 pb-2">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif italic tracking-tight text-white/90">
                            "Axioms of the Integrity Web"
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                        A Fine Art Declaration of Digital Freedom
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                    {axioms.map((axiom, i) => (
                        <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border border-white/20 group-hover:border-cyan-500 transition-colors flex items-center justify-center">
                                <axiom.icon className="w-2 h-2 text-muted-foreground group-hover:text-cyan-400" />
                            </div>

                            <div className="mb-4 flex items-baseline gap-3">
                                <span className="font-mono text-xs text-cyan-500/50 font-bold">AXIOM_{axiom.number}</span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                                    {axiom.title}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                {axiom.lines.map((line, j) => (
                                    <p key={j} className={`text-muted-foreground leading-relaxed ${j === 2 ? "text-white/80 font-medium pt-2 border-t border-white/5 mt-2" : ""}`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Signature */}
                <div className="mt-24 text-center opacity-30 pointer-events-none select-none">
                    <div className="font-serif text-6xl italic text-white/20 tracking-tighter">
                        Integrity Web Alliance
                    </div>
                    <div className="font-mono text-[10px] mt-4 tracking-[1em] uppercase">
                        Est. 2024 • Genesis Block
                    </div>
                </div>

            </div>
        </section>
    )
}
