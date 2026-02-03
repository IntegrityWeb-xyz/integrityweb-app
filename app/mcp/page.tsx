import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Terminal, Boxes, Zap, Shield } from "lucide-react"

export default function MCPPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-24">
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        {/* Hero */}
        <section className="px-4 py-20 md:py-32 border-b border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              IntegrityWeb MCP
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Model Context Protocol integration for seamless AI-powered development on IntegrityWeb
            </p>
            <Link href="/build">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-20 md:py-28 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Code Generation",
                  description: "AI-powered code generation for verifiable applications"
                },
                {
                  icon: Zap,
                  title: "Smart Suggestions",
                  description: "Context-aware suggestions for IntegrityWeb patterns"
                },
                {
                  icon: Shield,
                  title: "Verification",
                  description: "Built-in proof verification and validation"
                },
              ].map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="p-6 border border-border rounded-lg">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Documentation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Complete guides and API documentation for IntegrityWeb MCP
            </p>
            <Link href="/docs">
              <Button size="lg" variant="outline">View Docs</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
