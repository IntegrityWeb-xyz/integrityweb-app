"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Server, MessageSquare } from "lucide-react"
import Link from "next/link"

const resources = [
    {
        title: "Documentation",
        icon: Book,
        Link: "/docs"
    },
    {
        title: "API Reference",
        icon: Server,
        Link: "/docs/api"
    },
    {
        title: "MCP Servers",
        icon: Server,
        Link: "/mcp"
    }
]

export function DeveloperResources() {
    return (
        <section className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-6">
                    // DEVELOPER_RESOURCES
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                    {resources.map((res, i) => (
                        <Link key={i} href={res.Link}>
                            <div className="p-4 border border-white/10 hover:border-primary/50 bg-slate-950/30 hover:bg-slate-950/60 rounded-lg group transition-all text-center flex flex-col items-center gap-3">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    <res.icon className="w-5 h-5 text-white group-hover:text-primary" />
                                </div>
                                <span className="font-mono text-sm text-muted-foreground group-hover:text-white transition-colors">
                                    {res.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-6 border border-dashed border-white/10 bg-white/5 rounded-lg flex flex-col justify-center text-center lg:text-left">
                <h3 className="font-mono text-sm text-white mb-2">NEED_SUPPORT?</h3>
                <p className="text-xs text-muted-foreground mb-4">
                    Join the dedicated Discord channel for real-time builder support and agent coordination.
                </p>
                <Button size="sm" variant="outline" className="w-full font-mono text-xs hover:bg-white/10 border-indigo-500/30 hover:border-indigo-500/50 text-indigo-300">
                    <MessageSquare className="w-3 h-3 mr-2" />
                    CONNECT_DISCORD
                </Button>
            </div>
        </section>
    )
}
