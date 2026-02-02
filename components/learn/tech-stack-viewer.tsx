"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Database, Shield, Lock, Layers, Code, Cpu, Globe } from "lucide-react"

const stackItems = [
    {
        category: "Framework",
        title: "Next.js 14",
        desc: "App Router & Server Components for high-performance React applications.",
        icon: Globe,
        tags: ["React", "Typescript", "Tailwind"]
    },
    {
        category: "Settlement Layer",
        title: "Starknet",
        desc: "Validity Rollup (L2) securing transactions with STARK proofs.",
        icon: Layers,
        tags: ["L2", "Ethereum", "Scale"]
    },
    {
        category: "Cryptography",
        title: "ZK-STARKs",
        desc: "Zero-Knowledge Scalable Transparent Argument of Knowledge.",
        icon: Shield,
        tags: ["Math", "Privacy", "Verifiable"]
    },
    {
        category: "Identity",
        title: "Clerk Auth",
        desc: "Sovereign identity management and authentication infrastructure.",
        icon: Lock,
        tags: ["Auth", "User", "Security"]
    },
    {
        category: "Styling",
        title: "Glassmorphism UI",
        desc: "Modern aesthetic using Tailwind CSS for transparency and depth.",
        icon: Code,
        tags: ["CSS", "Design", "UX"]
    },
    {
        category: "Data Availability",
        title: "Celestia / Blobstream",
        desc: "High-throughput data availability layer for scaling execution.",
        icon: Database,
        tags: ["DA", "Scaling", "Modular"]
    }
]

export function TechStackViewer() {
    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // SYSTEM_ARCHITECTURE
                </h2>
                <Badge variant="outline" className="font-mono text-[10px] text-green-500 border-green-500/20">
                    STATUS: OPERATIONAL
                </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stackItems.map((item, i) => (
                    <Card key={i} className="bg-slate-950/40 border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                        {/* Background tech pattern overlay */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-[10px] text-primary/70 mb-2 block uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4 h-[40px]">
                                {item.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {item.tags.map((tag, j) => (
                                    <span key={j} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
