"use client"

import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

export function BuildHero() {
    return (
        <div className="mb-12">
            <TerminalPageHeader
                title="Builder Studio"
                subtitle="Access SDKs, deploy contracts, and initialize projects."
                command="integrity init"
                status="RUNTIME_ACTIVE"
                statusColor="emerald"
                stats={[
                    { label: "Compiler", value: "v2.0.4" },
                    { label: "Latency", value: "12ms" },
                    { label: "Modules", value: "14/14" }
                ]}
            />
        </div>
    )
}
