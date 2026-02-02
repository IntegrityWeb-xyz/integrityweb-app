"use client"

import Link from "next/link"
import { ArrowRight, Terminal } from "lucide-react"
import { useState } from "react"
import { FooterScene } from "@/components/3d/footer-scene"

export function OSFooter() {
    const [hovered, setHovered] = useState(false)

    return (
        <footer
            className="w-full relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center p-8 pb-64 pt-32 group bg-transparent"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FooterScene hovered={hovered} />

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-8">

                <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.2em] opacity-70">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        System_Ready
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                        Integrity <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Web</span>
                    </h2>
                </div>

                <Link href="/join" className="group/btn relative px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan-500 hover:bg-cyan-950/30 transition-all duration-300 rounded-lg overflow-hidden backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-[50%] -skew-x-12 translate-x-[-150%] group-hover/btn:animate-[shimmer_1s_infinite]" />
                    <div className="flex items-center gap-4 font-mono text-lg text-white group-hover/btn:text-cyan-300 transition-colors">
                        <Terminal className="w-5 h-5" />
                        <span className="font-bold tracking-widest">JOIN</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <p className="text-muted-foreground font-mono text-sm max-w-lg leading-relaxed opacity-60">
                    Join the verified network. Architect autonomous agents and deployed verifiable logic on the Integrity Web.
                </p>

            </div>

            {/* Bottom Meta */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-[10px] font-mono text-white/20 uppercase tracking-widest pointer-events-none">
                <div>
                    Integrity_Web // OS v2.0
                </div>
                <div className="hidden md:block">
                    © {new Date().getFullYear()} Decentralized_Alliance
                </div>
            </div>
        </footer>
    )
}
