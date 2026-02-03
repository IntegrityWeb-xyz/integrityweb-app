import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Settings, Cpu } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-24">
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">IntegrityWeb Tools</h1>
        <p className="text-muted-foreground mb-8 text-lg">Essential tools for building verifiable applications</p>

        <div className="grid gap-6 md:grid-cols-3">
          {['Proof Generator', 'Ledger Explorer', 'Agent Builder', 'Verification Suite', 'Privacy Tools', 'Testing Framework'].map((tool) => (
            <div key={tool} className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2">{tool}</h3>
              <p className="text-muted-foreground mb-4 text-sm">Professional-grade tool for verifiable app development</p>
              <Button size="sm" variant="outline">Explore</Button>
            </div>
          ))}
        </div>

        <Link href="/dashboard" className="mt-8 inline-block">
          <Button>Back to Dashboard</Button>
        </Link>
      </main>
    </div>
  )
}
