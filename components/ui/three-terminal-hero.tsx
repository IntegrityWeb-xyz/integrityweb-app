"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, ChevronRight } from "lucide-react"

// Terminal boot sequence
const bootLines = [
    "$ integrity --init",
    "> Loading cryptographic modules...",
    "> Verifying ZK circuits... [OK]",
    "> Connecting to integrity mesh...",
    "> HANDSHAKE COMPLETE.",
]

export function ThreeTerminalHero() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [phase, setPhase] = useState<"typing" | "revealing">("typing")
    const [titleRevealed, setTitleRevealed] = useState(false)

    // Typing effect
    useEffect(() => {
        if (phase !== "typing") return
        if (currentLineIndex >= bootLines.length) {
            setTimeout(() => setPhase("revealing"), 400)
            return
        }

        const currentMessage = bootLines[currentLineIndex]

        if (currentCharIndex < currentMessage.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev]
                    newLines[currentLineIndex] = currentMessage.slice(0, currentCharIndex + 1)
                    return newLines
                })
                setCurrentCharIndex(prev => prev + 1)
            }, 20)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1)
                setCurrentCharIndex(0)
            }, 80)
            return () => clearTimeout(timeout)
        }
    }, [phase, currentLineIndex, currentCharIndex])

    // Title reveal
    useEffect(() => {
        if (phase !== "revealing") return
        const timeout = setTimeout(() => setTitleRevealed(true), 200)
        return () => clearTimeout(timeout)
    }, [phase])

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative">
            {/* Terminal Container */}
            <div className="w-full max-w-5xl relative">

                {/* Glowing border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 via-transparent to-indigo-500/20 rounded-2xl blur-sm" />

                {/* Main terminal window */}
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

                    {/* Window chrome */}
                    <div className="h-12 border-b border-white/5 bg-black/40 flex items-center justify-between px-5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/70 hover:bg-emerald-500 transition-colors cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                            <Terminal className="w-3.5 h-3.5" />
                            integrity_web — main
                        </div>
                        <div className="w-16" />
                    </div>

                    {/* Terminal body */}
                    <div className="p-8 md:p-12 min-h-[500px] relative">

                        {/* Boot sequence */}
                        <div className={`font-mono text-sm text-emerald-400/90 space-y-2 transition-all duration-700 ${titleRevealed ? 'opacity-20 blur-[1px] scale-95' : 'opacity-100'}`}>
                            {displayedLines.map((line, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span>{line}</span>
                                    {i === currentLineIndex && phase === "typing" && (
                                        <span className="w-2.5 h-5 bg-emerald-400 animate-pulse" />
                                    )}
                                </div>
                            ))}
                            {phase === "typing" && displayedLines.length === 0 && (
                                <span className="w-2.5 h-5 bg-emerald-400 animate-pulse" />
                            )}
                        </div>

                        {/* Main title reveal */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ease-out ${titleRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                            {/* Glitch/Holographic title */}
                            <div className="relative mb-6">
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center">
                                    <span className="relative inline-block">
                                        <span className="text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                                            INTEGRITY
                                        </span>
                                    </span>
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                                        WEB
                                    </span>
                                </h1>

                                {/* Decorative lines */}
                                <div className="absolute -left-8 top-1/2 w-6 h-[2px] bg-gradient-to-r from-transparent to-cyan-500" />
                                <div className="absolute -right-8 top-1/2 w-6 h-[2px] bg-gradient-to-l from-transparent to-indigo-500" />
                            </div>

                            {/* Subtitle with terminal cursor */}
                            <div className="flex items-center gap-3 text-lg md:text-xl text-white/70 font-mono mb-12">
                                <ChevronRight className="w-5 h-5 text-cyan-500" />
                                <span>
                                    A forward move for{' '}
                                    <span className="text-cyan-400 font-semibold">digital civilization</span>.
                                </span>
                                <span className="w-3 h-6 bg-white/50 animate-pulse" />
                            </div>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/join">
                                    <Button size="lg" className="h-14 px-10 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:from-cyan-400 hover:to-cyan-300 font-bold tracking-wide uppercase text-base transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:scale-105">
                                        Initialize <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/docs">
                                    <Button variant="outline" size="lg" className="h-14 px-10 border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 text-white tracking-wide uppercase text-base font-mono hover:border-cyan-500/50 transition-all">
                                        <Terminal className="mr-2 w-5 h-5" /> Documentation
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Status bar */}
                    <div className="h-8 border-t border-white/5 bg-black/30 flex items-center justify-between px-5 text-[10px] font-mono text-muted-foreground">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${titleRevealed ? 'bg-emerald-500' : 'bg-cyan-500 animate-pulse'}`} />
                                {titleRevealed ? 'SYSTEM READY' : 'INITIALIZING...'}
                            </div>
                            <div className="hidden sm:block text-white/30">|</div>
                            <div className="hidden sm:block">ZK_CORE: ACTIVE</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="hidden md:block">NETWORK: MAINNET</span>
                            <span className="text-cyan-400">v1.0.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
