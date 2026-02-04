import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { AllianceGrid } from "@/components/build/alliance-grid"
import { DeveloperResources } from "@/components/build/developer-resources"
import { ArrowRight, PlusCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: 'Build | Integrity Web',
    description: 'The open ecosystem for building verifiable, autonomous AI agents.',
}

import { getAllResources } from "@/lib/resources/data"
import { RecentResourcesShowcase } from "@/components/resources/recent-resources-showcase"

export default async function BuildPage() {
    const resources = await getAllResources();
    // Sort by something relevant if possible, for now just take first 3, or maybe verified ones
    const recentResources = resources.filter(r => r.verified).slice(0, 3);

    return (
        <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
            <Navigation />

            <main className="container mx-auto px-4 py-24 pb-48">

                <TerminalPageHeader
                    title="Builder Studio"
                    subtitle="Compose verified, authentic, and sovereign applications. Select from a growing ecosystem of compliant primitives."
                    command="integrity list --tools"
                    status="OPEN_REGISTRY"
                    statusColor="cyan"
                    stats={[
                        { label: "Primitives", value: "3" },
                        { label: "Ecosystem", value: "Expanding" },
                        { label: "Access", value: "Permissionless" }
                    ]}
                />

                <div className="max-w-6xl mx-auto">

                    <RecentResourcesShowcase resources={recentResources} />

                    <AllianceGrid />

                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        <div className="md:col-span-2">
                            <DeveloperResources />
                        </div>

                        {/* Call to Action: Join Ecosystem */}
                        <div className="md:col-span-1">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                    // CONTRIBUTE
                                </h2>
                            </div>
                            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-lg p-6 flex flex-col h-fit">
                                <div className="p-3 bg-white/5 rounded-full w-fit mb-4">
                                    <PlusCircle className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Join the Alliance</h3>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    Are you building a tool that adheres to the Integrity Axioms? Submit your primitive to the registry.
                                </p>
                                <Link href="/alliance" className="mt-auto">
                                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-cyan-400">
                                        APPLY_FOR_INDEX <ArrowRight className="w-4 h-4 ml-2" />
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
