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
    const { displayText: subtitleText, isComplete: subComplete } = useScrambleText("A FORWARD MOVE FOR DIGITAL CIVILIZATION", 60, 3000)

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
                <div className="relative mb-8 group">
                    {/* Glowing Backdrops - Reduced intensity */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none transition-opacity duration-1000" />

                    {/* Main Text Layer - Google Sans Code (sans) */}
                    <h1 className="relative z-10 text-5xl sm:text-7xl md:text-9xl font-sans font-bold tracking-tighter select-none whitespace-nowrap">
                        {/* Gradient Text Fill */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-cyan-200/50">
                            {titleText}
                        </span>

                        {/* Animated Shine Effect Overlay */}
                        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer pointer-events-none mix-blend-overlay" style={{ backgroundSize: '200% auto' }}>
                            {titleText}
                        </span>

                        {/* Blinking Cursor */}
                        {!titleComplete && <span className="inline-block w-[0.1em] h-[0.7em] bg-cyan-500/50 ml-2 animate-pulse align-middle" />}
                    </h1>

                    {/* Holographic Reflection/Glow Effect - Behind */}
                    <div className="absolute inset-0 blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-[1000ms] pointer-events-none">
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-sans font-bold tracking-tighter text-cyan-500/30 whitespace-nowrap scale-105 transform">
                            {titleText}
                        </h1>
                    </div>
                </div>

                {/* Subtitle */}
                <div className={`h-8 mb-12 font-sans text-sm md:text-base text-cyan-200/50 tracking-widest uppercase transition-opacity duration-[1000ms] ${titleComplete ? 'opacity-100' : 'opacity-0'}`}>
                    [{subtitleText}]
                </div>

                {/* Action Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md transition-all duration-[1000ms] delay-700 ${subComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Link href="/join" className="w-full">
                        <Button className="w-full h-14 bg-white/90 text-black hover:bg-cyan-500 hover:text-black font-bold text-base tracking-wide uppercase transition-all duration-500 group border-0 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 font-sans">
                            Initialize
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/docs" className="w-full">
                        <Button variant="outline" className="w-full h-14 border-white/10 bg-black/10 backdrop-blur-sm text-white/80 hover:bg-white/5 hover:text-white hover:border-cyan-500/30 font-sans text-xs tracking-widest uppercase transition-all duration-500">
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
