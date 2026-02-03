"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Cpu, Globe, Shield } from "lucide-react"

// Scramble text hook
function useScrambleText(targetText: string, speed: number = 50, startDelay: number = 0) {
    const [displayText, setDisplayText] = useState("")
    const [isComplete, setIsComplete] = useState(false)
    // Reduced character set to ensure more consistent widths (no wide symbols like @, %, etc.)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    useEffect(() => {
        let timeout: NodeJS.Timeout
        let interval: NodeJS.Timeout
        let iteration = 0

        // Reset
        setDisplayText("")
        setIsComplete(false)

        timeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText(prev =>
                    targetText
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) return char
                            return chars[Math.floor(Math.random() * chars.length)]
                        })
                        .join("")
                )

                if (iteration >= targetText.length) {
                    setIsComplete(true)
                    clearInterval(interval)
                }

                iteration += 1 / 4 // Slower resolve for subtlety
            }, speed)
        }, startDelay)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [targetText, speed, startDelay])

    return { displayText, isComplete }
}

export function HolographicHero() {
    // Scramble effects - Slower speeds for subtlety
    const { displayText: titleText, isComplete: titleComplete } = useScrambleText("INTEGRITY WEB", 80, 800)
    const { displayText: subtitleText, isComplete: subComplete } = useScrambleText("A FORWARD MOVE FOR DIGITAL CIVILIZATION", 50, 1500)

    // Decorative UI state
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center px-4 relative overflow-hidden text-center z-10">

            {/* HUD Container */}
            <div className={`relative max-w-5xl w-full flex flex-col items-center transition-all duration-[1500ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

                {/* Top Decorators - Removed fast pulsing */}
                <div className="flex items-center gap-4 text-[10px] font-sans tracking-[0.2em] text-cyan-500/40 mb-12 uppercase transition-opacity duration-1000" style={{ opacity: mounted ? 1 : 0 }}>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />
                        System_Online
                    </div>
                    <div className="w-12 h-[1px] bg-cyan-500/20" />
                    <div className="hidden sm:block">Protocol_v1.0</div>
                </div>

                {/* Main Title Block */}
                <div className="relative mb-2 group w-full max-w-6xl px-4 flex justify-center">
                    {/* Glowing Backdrops - Reduced intensity */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000" />

                    {/* SVG Text for Gradient Outline Effect */}
                    <div className="relative z-10 w-full">
                        <svg viewBox="0 0 1000 130" className="w-full h-auto overflow-visible select-none">
                            <defs>
                                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4">
                                        <animate attributeName="stop-color" values="#06b6d4;#8b5cf6;#06b6d4" dur="4s" repeatCount="indefinite" />
                                    </stop>
                                    <stop offset="50%" stopColor="#22d3ee" stopOpacity="1">
                                        <animate attributeName="stop-color" values="#22d3ee;#c084fc;#22d3ee" dur="4s" repeatCount="indefinite" />
                                    </stop>
                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4">
                                        <animate attributeName="stop-color" values="#06b6d4;#8b5cf6;#06b6d4" dur="4s" repeatCount="indefinite" />
                                    </stop>
                                </linearGradient>
                            </defs>

                            <text
                                x="50%"
                                y="65%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="font-sans font-bold tracking-tighter"
                                style={{
                                    fontSize: '110px',
                                    fill: 'transparent',
                                    stroke: 'url(#strokeGradient)',
                                    strokeWidth: '1.5px',
                                    filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.3))'
                                }}
                            >
                                {titleText}
                            </text>
                        </svg>

                        {/* Blinking Cursor - Positioned absolutely since it can't be easily in SVG text flow */}
                        {!titleComplete && (
                            <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 h-[80px] w-[4px] bg-cyan-500/50 animate-pulse hidden md:block" />
                        )}
                    </div>

                    {/* Holographic Reflection/Glow Effect - Behind */}
                    <div className="absolute inset-0 blur-[30px] opacity-0 group-hover:opacity-30 transition-opacity duration-[1000ms] pointer-events-none mix-blend-screen">
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-sans font-bold tracking-tighter text-cyan-400 whitespace-nowrap scale-105 transform text-center opacity-50">
                            {titleText}
                        </h1>
                    </div>
                </div>

                {/* Subtitle */}
                <div className={`h-8 mb-16 font-sans text-lg md:text-xl text-cyan-200/60 tracking-widest uppercase transition-opacity duration-[800ms] ${titleComplete ? 'opacity-100' : 'opacity-0'}`}>
                    [{subtitleText}]
                </div>

                {/* Action Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg transition-all duration-[1000ms] delay-200 ${subComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Link href="/join" className="w-full">
                        <Button className="w-full h-16 glass-panel hover:bg-cyan-500/20 hover:border-cyan-400/50 text-white font-sans font-bold text-lg tracking-wide uppercase transition-all duration-300 group shadow-none hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                            Initialize
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-cyan-400" />
                        </Button>
                    </Link>
                    <Link href="/docs" className="w-full">
                        <Button variant="outline" className="w-full h-16 glass-panel hover:bg-white/10 hover:border-white/30 text-white/80 hover:text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 border-white/5 bg-black/20">
                            Documentation
                        </Button>
                    </Link>
                </div>

                {/* Floating Icons / Stats (Decorations) - Slower pulses */}
                <div className="absolute top-0 right-0 hidden lg:flex flex-col gap-6 text-white/10">
                    <Cpu className="w-6 h-6 animate-pulse duration-[3000ms]" />
                    <Globe className="w-6 h-6 animate-pulse duration-[4000ms] delay-700" />
                    <Shield className="w-6 h-6 animate-pulse duration-[5000ms] delay-300" />
                </div>

            </div>

            {/* Decorative framing lines (Corner brackets) - Fainter */}
            <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-white/5 rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-white/5 rounded-br-3xl pointer-events-none" />

        </section>
    )
}
