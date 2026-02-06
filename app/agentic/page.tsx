import { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { AgentCapabilities } from "@/components/agentic/agent-capabilities"
import { SovereignStack } from "@/components/agentic/sovereign-stack"
import { SovereignValues } from "@/components/agentic/sovereign-values"

export const metadata: Metadata = {
    title: 'Agentic Runtime | Integrity Web',
    description: 'Build autonomous agents with verifiable logic and sovereign identity. The operating system for the AI economy.',
}

export default function AgenticPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
            <Navigation />

            <main className="container mx-auto px-4 py-24 pb-48">

                <TerminalPageHeader
                    title="Agentic Runtime"
                    subtitle="Deploy verification-secured autonomous agents on the Integrity Web."
                    command="integrity run --agent"
                    status="DAEMON_ACTIVE"
                    statusColor="cyan"
                />

                <div className="max-w-5xl mx-auto mb-20 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        From "Tool" to "Economic Peer"
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        The shift toward a <span className="text-cyan-400 font-bold">Sovereign Agent</span> architecture marks a fundamental transition.
                        In the Integrity Web, your agent isn't just a bot running on a server; it is a verifiable extension of your intent,
                        operating with its own financial and legal agency while remaining anchored to your control.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-32">
                    {/* Infrastructure Stack */}
                    <SovereignStack />

                    {/* Values & Manifesto */}
                    <SovereignValues />

                    {/* Capabilities Grid */}
                    <AgentCapabilities />
                </div>

            </main>
        </div>
    )
}
