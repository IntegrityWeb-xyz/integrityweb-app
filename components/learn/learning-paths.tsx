"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, PenTool, ShieldCheck, Play } from "lucide-react"

const paths = {
    builder: [
        {
            title: "Zero-Knowledge Fundamentals",
            desc: "Understand the math behind STARKs and SNARKs.",
            level: "INTERMEDIATE",
            time: "2h 30m"
        },
        {
            title: "Starknet Smart Contracts",
            desc: "Write and deploy your first Cairo contract.",
            level: "ADVANCED",
            time: "4h 15m"
        },
        {
            title: "Building Autonomous Agents",
            desc: "Create agents that live on-chain and act independently.",
            level: "EXPERT",
            time: "6h 00m"
        }
    ],
    creator: [
        {
            title: "IP on the Blockchain",
            desc: "How to tokenize your art and writing as sovereign assets.",
            level: "BEGINNER",
            time: "1h 00m"
        },
        {
            title: "Mediolano Protocol Guide",
            desc: "Using the protocol to manage royalties and remix rights.",
            level: "INTERMEDIATE",
            time: "2h 45m"
        },
        {
            title: "Community & DAOs",
            desc: "Engaging with your audience in a decentralized world.",
            level: "BEGINNER",
            time: "1h 30m"
        }
    ],
    citizen: [
        {
            title: "Digital Sovereignty 101",
            desc: "Why owning your keys means owning your destiny.",
            level: "BEGINNER",
            time: "45m"
        },
        {
            title: "Privacy Tools & Hygiene",
            desc: "Protecting your data in the surveillance age.",
            level: "BEGINNER",
            time: "1h 15m"
        },
        {
            title: "Participating in Governance",
            desc: "How to vote and shape the future of the Integrity Web.",
            level: "INTERMEDIATE",
            time: "1h 00m"
        }
    ]
}

export function LearningPaths() {
    return (
        <div className="py-12">
            <div className="mb-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">
                    Choose Your Path
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    The Integrity Web is vast. Select a track tailored to your goals and start your journey towards digital sovereignty.
                </p>
            </div>

            <Tabs defaultValue="builder" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-950/50 border border-white/10 p-1 mb-8 h-auto">
                    <TabsTrigger value="builder" className="data-[state=active]:bg-cyan-950/30 data-[state=active]:text-cyan-400 py-4 font-mono uppercase tracking-wider">
                        <span className="flex flex-col md:flex-row items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Builder Core
                        </span>
                    </TabsTrigger>
                    <TabsTrigger value="creator" className="data-[state=active]:bg-purple-950/30 data-[state=active]:text-purple-400 py-4 font-mono uppercase tracking-wider">
                        <span className="flex flex-col md:flex-row items-center gap-2">
                            <PenTool className="w-4 h-4" />
                            Creator Studio
                        </span>
                    </TabsTrigger>
                    <TabsTrigger value="citizen" className="data-[state=active]:bg-emerald-950/30 data-[state=active]:text-emerald-400 py-4 font-mono uppercase tracking-wider">
                        <span className="flex flex-col md:flex-row items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Sovereign Citizen
                        </span>
                    </TabsTrigger>
                </TabsList>

                {Object.entries(paths).map(([key, modules]) => (
                    <TabsContent key={key} value={key} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {modules.map((module, i) => (
                            <div key={i} className="group flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-slate-900/20 border border-white/5 hover:bg-slate-900/40 hover:border-white/20 transition-all cursor-pointer">
                                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                    <Play className="w-5 h-5 text-white/70 group-hover:text-primary fill-current transition-colors ml-1" />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {module.title}
                                        </h3>
                                        <Badge variant="secondary" className="w-fit mx-auto md:mx-0 text-[10px] h-5">
                                            {module.level}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground">
                                        {module.desc}
                                    </p>
                                </div>

                                <div className="shrink-0 text-right font-mono text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span>{module.time}</span>
                                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
