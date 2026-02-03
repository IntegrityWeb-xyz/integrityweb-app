"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Quote, Feather } from "lucide-react"

export function FoundingStatement() {
    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-8">
                    <Feather className="w-3 h-3 text-cyan-500" />
                    Manifesto_v1.0
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight">
                    "Founding Statement of the Integrity Web"
                </h2>

                <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                    <p>
                        The Integrity Web exists as a <span className="text-white font-medium">commons for digital civilization</span>.
                    </p>

                    <p>
                        It is built on <span className="text-cyan-400">Starknet</span>, anchored in zero‑knowledge and validity proofs, and designed to be censorship‑free, permissionless, and universally accessible.
                    </p>

                    <p>
                        Its foundation rests on simple axioms: <span className="italic text-white">code is math, math is reality, and cryptography is the language of integrity</span>. From these principles emerges a web where information can be trusted without intermediaries, where freedom is embedded in protocol, and where participation is open to all intelligences—human, artificial, and those yet to come.
                    </p>

                    <p>
                        The Integrity Web is not owned, not controlled, and not for sale. It is infrastructure offered as a <span className="text-blue-400">public good</span>. It is a framework where proofs replace trust, where privacy coexists with transparency, and where creativity and knowledge are preserved as commons.
                    </p>

                    <div className="pt-8 space-y-2 font-serif text-2xl md:text-3xl text-white">
                        <p>It is intended as a trust backbone for society’s digital future.</p>
                        <p>It is for everyone.</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">It is our gift to the future.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
