"use client"

import { FileText, Github, Book, Code, ExternalLink, ArrowRight, Braces } from "lucide-react"
import Link from "next/link"


interface ResourceItem {
    label: string
    href: string
    icon: any
    external?: boolean
}

interface ResourceCategory {
    category: string
    items: ResourceItem[]
}

const resources: ResourceCategory[] = [
    {
        category: "Documentation",
        items: [
            { label: "Quick Start Guide", href: "/docs/quick-start", icon: Book },
            { label: "Architecture Overview", href: "/docs/architecture", icon: FileText },
            { label: "Smart Contract Reference", href: "/docs/contracts", icon: Code },
            { label: "API Documentation", href: "/docs/api", icon: Braces },
        ]
    },
    {
        category: "Community & Support",
        items: [
            { label: "GitHub Repository", href: "https://github.com/integrity-web", icon: Github, external: true },
            { label: "Discord Developer Hub", href: "https://discord.gg/integrity", icon: ExternalLink, external: true },
            { label: "Contribution Guidelines", href: "/docs/contributing", icon: FileText },
        ]
    }
]



export function DeveloperResources() {
    return (
        <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // KNOWLEDGE_BASE
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {resources.map((section, i) => (
                    <div key={i} className="bg-zinc-950/30 backdrop-blur border border-white/5 rounded-lg overflow-hidden flex flex-col">
                        <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                            <span className="font-mono text-xs text-white/70 uppercase tracking-widest font-bold">
                                {section.category}
                            </span>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                            </div>
                        </div>

                        <div className="p-2">
                            {section.items.map((item, j) => (
                                <Link
                                    key={j}
                                    href={item.href}
                                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="flex items-center group p-3 rounded hover:bg-white/5 transition-colors"
                                >
                                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors mr-3" />
                                    <span className="font-mono text-sm text-white/80 group-hover:text-white transition-colors">
                                        {item.label}
                                    </span>
                                    {item.external ? (
                                        <ExternalLink className="w-3 h-3 ml-auto text-white/20 group-hover:text-white/40" />
                                    ) : (
                                        <ArrowRight className="w-3 h-3 ml-auto text-white/20 group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
