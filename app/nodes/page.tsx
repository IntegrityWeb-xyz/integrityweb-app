import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { getAllNodes } from "@/lib/nodes/data"
import { NodesGrid } from "@/components/nodes/nodes-grid"

export default function NodesPage() {
    const nodes = getAllNodes();

    return (
        <div className="min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <TerminalPageHeader
                    title="System Nodes"
                    subtitle="Directory of active entities maintaining the Integrity Web."
                    command="./list_nodes"
                    status="SCANNING"
                    statusColor="cyan"
                />

                <NodesGrid nodes={nodes} />
            </div>
        </div>
    )
}
