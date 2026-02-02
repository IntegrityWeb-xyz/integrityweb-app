"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const categories = {
    protocols: [
        {
            title: "Mediolano",
            desc: "IP Attribution & Royalty Standard",
            status: "v1.2.0"
        },
        {
            title: "Integrity ID",
            desc: "Sovereign Identity framework",
            status: "v0.9.1"
        },
        {
            title: "Blobstream L3",
            desc: "Data Availability Adapter",
            status: "ALPHA"
        }
    ],
    dapps: [
        {
            title: "Integrity Showcase",
            desc: "Reference implementation of a collection marketplace.",
            status: "LIVE"
        },
        {
            title: "Governance Hub",
            desc: "Voting and proposal management dashboard.",
            status: "BETA"
        }
    ],
    agents: [
        {
            title: "Oracle Service",
            desc: "Trustless data feed agent.",
            status: "ACTIVE"
        },
        {
            title: "Trading Bot",
            desc: "ZK-proven trading strategies.",
            status: "DEV"
        }
    ]
}

export function ProtocolExplorer() {
    return (
        <section className="mb-16">
            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8">
                // ECOSYSTEM_COMPONENTS
            </h2>

            <Tabs defaultValue="protocols" className="w-full">
                <TabsList className="bg-transparent border-b border-white/10 w-full justify-start rounded-none p-0 h-auto gap-8">
                    {["protocols", "dapps", "agents"].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-0 py-3 font-mono text-sm uppercase tracking-wider"
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {Object.entries(categories).map(([key, items]) => (
                    <TabsContent key={key} value={key} className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((item, i) => (
                            <div key={i} className="group p-5 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all rounded-lg cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${item.status === 'LIVE' || item.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-white/5 text-muted-foreground border-white/10'}`}>
                                        {item.status}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                                </div>
                                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    )
}
