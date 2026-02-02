"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Terminal, Box, Layers, Play } from "lucide-react"

const sdks = [
    {
        title: "Integrity CLI",
        desc: "Command line tool for project scaffolding and deployment.",
        icon: Terminal,
        cmd: "npm i -g @integrity-web/cli",
        category: "ESSENTIAL"
    },
    {
        title: "Agent SDK",
        desc: "Framework for building autonomous agents with ZK capabilities.",
        icon: Box,
        cmd: "npm i @integrity-web/agent",
        category: "AI_AGENTS"
    },
    {
        title: "React Hooks",
        desc: "Pre-built component hooks for data fetching and state.",
        icon: Layers,
        cmd: "npm i @integrity-web/react",
        category: "FRONTEND"
    }
]

export function SdkGrid() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // CORE_SDKS_&_TOOLS
                </h2>
                <div className="h-px bg-white/10 flex-1 ml-4" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sdks.map((sdk, i) => (
                    <Card key={i} className="bg-slate-950/40 border border-white/10 hover:border-primary/50 transition-all group relative overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <sdk.icon className="w-6 h-6 text-white group-hover:text-primary" />
                                </div>
                                <Badge variant="outline" className="font-mono text-[10px] text-muted-foreground border-white/10">
                                    {sdk.category}
                                </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {sdk.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 h-10">
                                {sdk.desc}
                            </p>

                            <div className="bg-black/50 border border-white/10 rounded overflow-hidden flex items-center p-2 font-mono text-xs">
                                <span className="text-primary mr-2">$</span>
                                <span className="text-white/70 truncate flex-1">{sdk.cmd}</span>
                                <Button size="icon" variant="ghost" className="h-6 w-6 hover:text-white">
                                    <Copy className="w-3 h-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
