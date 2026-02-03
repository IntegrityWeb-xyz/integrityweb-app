"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

const bootSequence = [
    { text: "> Initializing system protocols...", delay: 50 },
    { text: "> Loading cryptographic modules...", delay: 40 },
    { text: "> Verifying ZK circuits... [OK]", delay: 60 },
    { text: "> Connecting to integrity mesh...", delay: 50 },
    { text: "> HANDSHAKE COMPLETE.", delay: 80 },
    { text: "", delay: 500 }, // Pause before title reveal
]

export function TypingTerminalHero() {
    const [lines, setLines] = useState<string[]>([])
    const [currentLine, setCurrentLine] = useState(0)
    const [currentChar, setCurrentChar] = useState(0)
    const [showTitle, setShowTitle] = useState(false)
    const [isTyping, setIsTyping] = useState(true)

    const typeNextChar = useCallback(() => {
        if (currentLine >= bootSequence.length) {
            setIsTyping(false)
            setTimeout(() => setShowTitle(true), 300)
            return
        }

        const line = bootSequence[currentLine]

        if (line.text === "") {
            // Empty line = pause, then move to next
            setTimeout(() => {
                setCurrentLine(prev => prev + 1)
                setCurrentChar(0)
            }, line.delay)
            return
        }

        if (currentChar < line.text.length) {
            setLines(prev => {
                const newLines = [...prev]
                newLines[currentLine] = line.text.substring(0, currentChar + 1)
                return newLines
            })
            setCurrentChar(prev => prev + 1)
        } else {
            // Line complete, move to next
            setTimeout(() => {
                setCurrentLine(prev => prev + 1)
                setCurrentChar(0)
            }, 200)
        }
    }, [currentLine, currentChar])

    useEffect(() => {
        if (!isTyping) return

        const line = bootSequence[currentLine]
        if (!line) return

        const timeout = setTimeout(typeNextChar, line.delay)
        return () => clearTimeout(timeout)
    }, [currentLine, currentChar, isTyping, typeNextChar])

    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center px-4 relative">
            {/* Terminal Window */}
            <div className="w-full max-w-4xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/5">

                {/* Window Title Bar */}
                <div className="h-10 border-b border-white/5 bg-black/40 flex items-center justify-between px-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        integrity_uplink — zsh
                    </div>
                    <div className="w-16" /> {/* Spacer for balance */}
                </div>

                {/* Terminal Content */}
                <div className="p-6 md:p-10 min-h-[400px] md:min-h-[450px] flex flex-col">
                    {/* Boot Sequence Lines */}
                    <div className="font-mono text-sm md:text-base text-emerald-400/80 space-y-1.5 mb-8">
                        {lines.map((line, i) => (
                            <p key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                                {line}
                                {i === currentLine && isTyping && (
                                    <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
                                )}
                            </p>
                        ))}
                        {isTyping && lines.length === 0 && (
                            <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
                        )}
                    </div>

                    {/* Title Reveal */}
                    <div className={`flex-1 flex flex-col items-center justify-center text-center transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-4">
                            Integrity
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400"> Web</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mb-10">
                            A forward move for <span className="text-cyan-400">digital civilization</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/join">
                                <Button size="lg" className="h-12 px-8 bg-cyan-500 text-black hover:bg-cyan-400 font-bold tracking-wide uppercase transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                                    Initialize <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="/build">
                                <Button variant="outline" size="lg" className="h-12 px-8 border-white/20 hover:bg-white/5 text-white tracking-wide uppercase font-mono">
                                    <Terminal className="mr-2 w-4 h-4" /> Documentation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="h-7 border-t border-white/5 bg-black/30 flex items-center px-4 gap-6 text-[9px] font-mono text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${showTitle ? 'bg-emerald-500' : 'bg-cyan-500 animate-pulse'}`} />
                        {showTitle ? 'READY' : 'INITIALIZING...'}
                    </div>
                    <div className="flex items-center gap-1.5">
                        ZK_CORE: ACTIVE
                    </div>
                    <div className="flex items-center gap-1.5">
                        NETWORK: MAINNET
                    </div>
                </div>
            </div>
        </section>
    )
}
