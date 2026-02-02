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
    const statusColors = {
        emerald: "text-emerald-500",
        amber: "text-amber-500",
        rose: "text-rose-500",
        cyan: "text-cyan-500",
    }

    const indicatorColors = {
        emerald: "bg-emerald-500",
        amber: "bg-amber-500",
        rose: "bg-rose-500",
        cyan: "bg-cyan-500",
    }

    return (
        <div className={cn("w-full mt-24 mb-24 relative", className)}>
            {/* Extended Height Container */}
            <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden relative min-h-[400px] flex flex-col group">

                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />

                    {/* Radar Sweep Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[50%] -skew-x-12 translate-x-[-150%] animate-[shimmer_8s_infinite_linear]" />
                </div>

                {/* Top Bar */}
                <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-6 justify-between z-20">
                    <div className="flex gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-[10px] font-mono text-muted-foreground uppercase opacity-70 tracking-widest hidden md:block">
                            {command}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 px-3 py-1 rounded border border-white/5">
                        <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", indicatorColors[statusColor])} />
                        <span className={cn("text-[10px] font-mono uppercase tracking-widest font-bold", statusColors[statusColor])}>{status}</span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-end">

                    {/* Decorative Background Text (Watermark) */}
                    <div className="absolute top-12 right-12 text-9xl font-black text-white/[0.02] select-none pointer-events-none font-mono hidden lg:block overflow-hidden">
                        {status.split('_')[0]}
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                            <div className="h-px w-8 bg-primary/50" />
                            <span className="text-primary font-mono text-xs uppercase tracking-[0.2em]">System_Module</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={cn("inline-block", i === 0 ? "mr-4" : "text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50")}>
                                    {word}
                                </span>
                            ))}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground font-mono leading-relaxed max-w-3xl border-l-4 border-primary/20 pl-6 py-2 bg-gradient-to-r from-primary/5 to-transparent">
                            {subtitle}
                        </p>
                    </div>

                    {/* Bottom Stats Monitor */}
                    {stats.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-12 bg-black/20 -mx-8 -mb-16 md:-mx-16 md:-mb-16 px-8 md:px-16 py-6 md:py-8 backdrop-blur-sm">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col group/stat">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 group-hover/stat:text-primary transition-colors">{stat.label}</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-mono text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                                        {i === 0 && <span className="w-2 h-2 rounded-full bg-primary animate-ping opacity-75" />}
                                    </div>
                                </div>
                            ))}

                            {/* Simulated System Output Stream */}
                            <div className="ml-auto hidden xl:flex flex-col items-end font-mono text-[10px] text-green-500/60 leading-tight opacity-50 select-none">
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
