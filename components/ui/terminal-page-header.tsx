"use client"

import { cn } from "@/lib/utils"

interface TerminalPageHeaderProps {
    title: string
    subtitle: string
    command?: string
    status?: string
    statusColor?: "emerald" | "amber" | "rose" | "cyan"
    stats?: { label: string; value: string }[]
    className?: string
}

export function TerminalPageHeader({
    title,
    subtitle,
    command = "./execute_module",
    status = "SYSTEM_READY",
    statusColor = "emerald",
    stats = [],
    className,
}: TerminalPageHeaderProps) {


    return (
        <div className={cn("w-full mt-20 mb-20 relative", className)}>
            {/* Extended Height Container */}
            <div className="bg-zinc-950/60 backdrop-blur-2xl border border-white/8 rounded-lg overflow-hidden relative min-h-[320px] flex flex-col group">

                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />

                    {/* Radar Sweep Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[50%] -skew-x-12 translate-x-[-150%] animate-[shimmer_8s_infinite_linear]" />
                </div>

                {/* Top Bar */}
                <div className="h-8 bg-white/5 border-b border-white/8 flex items-center px-5 justify-between z-20">
                    <div className="flex gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-500/20 border border-zinc-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-500/20 border border-zinc-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-500/20 border border-zinc-500/50" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-[8px] font-mono text-muted-foreground uppercase opacity-70 tracking-widest hidden md:block">
                            {command}
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 bg-black/40 px-2.5 py-0.5 rounded border border-white/5">
                        <div className={cn("w-1 h-1 rounded-full animate-pulse bg-cyan-500")} />
                        <span className={cn("text-[8px] font-mono uppercase tracking-widest font-medium text-cyan-500")}>{status}</span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-end">
                    {/* Background Text - Decorative */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap hidden md:block">
                        SYSTEM_O1
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 mb-5 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                            <div className="h-px w-6 bg-primary/50" />
                            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em]">System_Module</span>
                        </div>
                        <h1 className="text-4xl font-medium font-mono text-white tracking-tighter uppercase mb-5 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={cn("inline-block", i === 0 ? "mr-2 md:mr-3" : "text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50")}>
                                    {word}
                                </span>
                            ))}
                        </h1>
                        <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-5 py-1.5 bg-gradient-to-r from-primary/5 to-transparent">
                            {subtitle}
                        </p>
                    </div>

                    {stats.length > 0 && (
                        <div className="grid grid-cols-2 md:flex md:items-center gap-4 md:gap-12 mt-8 md:mt-12 pt-8 border-t border-white/5">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                                    <span className="text-sm md:text-xl font-mono text-white/90">{stat.value}</span>
                                </div>
                            ))}
                            <div className="ml-auto hidden xl:flex flex-col items-end font-mono text-[8px] text-green-500/60 leading-tight opacity-50 select-none">
                                <div>&gt; INITIATING_HSH_SEQUENCE... OK</div>
                                <div>&gt; VERIFYING_INTEGRITY_LAYERS... 100%</div>
                                <div>&gt; ESTABLISHING_SECURE_UPLINK... CONNECTED</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
