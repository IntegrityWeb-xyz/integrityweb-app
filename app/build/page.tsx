import { Metadata } from "next"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { PrimitivesGrid } from "@/components/build/primitives-grid"
import { ArrowRight, PlusCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: 'Build | Integrity Web',
    description: 'The open ecosystem for building verifiable, autonomous AI agents.',
}

import { getAllResources } from "@/lib/resources/data"
import { getAllPrimitives } from "@/lib/primitives/data"
import { RecentResourcesShowcase } from "@/components/resources/recent-resources-showcase"

export default async function BuildPage() {
    const resources = await getAllResources();
    const primitives = getAllPrimitives();
    // Sort by something relevant if possible, for now just take first 3, or maybe verified ones
    const recentResources = resources.filter(r => r.verified).slice(0, 3);

    return (
        <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">

            <main className="container mx-auto px-4 py-24 pb-48">

                <TerminalPageHeader
                    title="Builder Studio"
                    subtitle="Compose the Digital Civilization. Build verified, authentic, and sovereign applications using our primitives."
                    command="integrity list --tools"
                    status="OPEN_REGISTRY"
                    statusColor="cyan"
                />

                <div className="max-w-6xl mx-auto">

                    <RecentResourcesShowcase resources={recentResources} />

                    <PrimitivesGrid items={primitives} />

                    <div className="max-w-4xl mx-auto mb-32 mt-16">
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-12 text-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-50" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="p-4 bg-white/5 rounded-full mb-6 border border-white/5 shadow-2xl shadow-cyan-500/10">
                                    <PlusCircle className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Join the Nexus</h2>
                                <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">
                                    Are you building a tool that adheres to the Integrity Axioms? Submit your primitive to the registry and join the autonomous ecosystem.
                                </p>
                                <Link href="/nexus">
                                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8">
                                        APPLY_FOR_INDEX <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}
