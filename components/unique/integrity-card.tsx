import React from "react"
import { cn } from "@/lib/utils"

interface IntegrityCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: "default" | "neon" | "holographic"
}

export const IntegrityCard = React.forwardRef<HTMLDivElement, IntegrityCardProps>(
    ({ className, children, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "integrity-panel group relative p-6",
                    variant === "neon" && "shadow-[0_0_15px_rgba(59,130,246,0.3)] border-primary/30",
                    variant === "holographic" && "bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border-cyan-500/20",
                    className
                )}
                {...props}
            >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 h-2 w-2 border-l-2 border-t-2 border-white/20 group-hover:border-primary/50 transition-colors" />
                <div className="absolute top-0 right-0 h-2 w-2 border-r-2 border-t-2 border-white/20 group-hover:border-primary/50 transition-colors" />
                <div className="absolute bottom-0 left-0 h-2 w-2 border-l-2 border-b-2 border-white/20 group-hover:border-primary/50 transition-colors" />
                <div className="absolute bottom-0 right-0 h-2 w-2 border-r-2 border-b-2 border-white/20 group-hover:border-primary/50 transition-colors" />

                {/* Scanline Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(59,130,246,0.2)_50%)] bg-[length:100%_4px] transition-opacity duration-500" />

                {children}
            </div>
        )
    }
)
IntegrityCard.displayName = "IntegrityCard"
