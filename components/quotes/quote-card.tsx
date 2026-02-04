import { QuoteItem } from "@/lib/quotes/types"
import { BadgeCheck, Share } from "lucide-react"
import Link from "next/link"

interface QuoteCardProps {
    quote: QuoteItem
}

export function QuoteCard({ quote }: QuoteCardProps) {
    return (
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-white/10">
                        <img src={quote.avatar} alt={quote.author} className="w-full h-full object-cover" />
                    </div>
                    {/* Name/Handle */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-white text-sm">{quote.author}</span>
                            {quote.verified && <BadgeCheck className="w-4 h-4 text-cyan-400 fill-current" />}
                        </div>
                        <span className="text-muted-foreground text-xs">{quote.handle}</span>
                    </div>
                </div>
                {/* Twitter branding/link */}
                {quote.url && (
                    <Link href={quote.url} target="_blank" className="text-muted-foreground hover:text-cyan-400">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
                <p className="text-lg text-white/90 leading-relaxed font-normal whitespace-pre-wrap">
                    {quote.text}
                </p>
            </div>

            {/* Date line */}
            <div className="text-muted-foreground text-xs font-mono mb-4 border-b border-white/5 pb-4">
                {quote.date}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end pt-4 border-t border-white/5">
                {quote.url && (
                    <Link href={quote.url} target="_blank" className="flex items-center gap-2 text-muted-foreground text-xs hover:text-cyan-400 transition-colors group/link">
                        <span className="uppercase tracking-widest opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">View Source</span>
                        <Share className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    )
}
