import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { AxiomsIntegrityWeb } from "@/components/framework/axioms-integrity-web"
import { Button } from "@/components/ui/button"
import { ArrowRight, Network } from "lucide-react"
import Link from "next/link"
import { getAllNodes } from "@/lib/nodes/data"
import { NodesGrid } from "@/components/nodes/nodes-grid"

export default function NexusPage() {
    const nodes = getAllNodes();

    return (
        <div className="min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <TerminalPageHeader
                    title="Integrity Nexus"
                    subtitle="The central hub of the verified web. A decentralized collective defining the axioms of our digital future."
                    command="./nexus_insight"
                    status="ONLINE"
                    statusColor="cyan"
                />

                {/* Mission / Intro Section */}
                <section className="mb-24 relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-sm p-8 md:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Heart of Verification</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            The Nexus is not just a group of entities; it is the convergence of sovereign systems committed to mathematical truth.
                            Here, the axioms of the Integrity Web are upheld, verified, and propagated.
                        </p>

                        <div className="flex gap-4">
                            <Link href="/nodes">
                                <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
                                    <Network className="mr-2 h-4 w-4" />
                                    View Network Nodes
                                </Button>
                            </Link>
                            <Link href="/join">
                                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                                    Apply for Node Status
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Nodes Grid Preview */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8 px-1">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Active_Nodes</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    <NodesGrid nodes={nodes} />
                </section>

                {/* Axioms */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8 px-1">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Core_Axioms</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    <AxiomsIntegrityWeb />
                </section>

            </div>
        </div>
    )
}
