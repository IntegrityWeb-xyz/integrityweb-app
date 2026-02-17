import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, Grid3x3, Code2, Cpu } from "lucide-react"
import { getAllResources } from "@/lib/resources/data"
import { getAllPrimitives } from "@/lib/primitives/data"
import { getAllNodes } from "@/lib/nodes/data"
import { RecentResourcesCarousel } from "@/components/resources/recent-resources-carousel"
import { PrimitivesShowcase } from "@/components/primitives/primitives-showcase"
import { NodesGrid } from "@/components/nodes/nodes-grid"
import { ResourcesGrid } from "@/components/resources/resources-grid"
import Link from "next/link"
import { ResourceCard } from "@/components/resources/resource-card"

export default async function ExplorePage() {
  const resources = await getAllResources();
  const primitives = getAllPrimitives();
  const nodes = getAllNodes();
  
  const agentResources = resources.filter(r => r.type === 'agent').slice(0, 4);

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <TerminalPageHeader
          title="Explore The Network"
          subtitle="Discover active nodes, applications, and protocols running on the Integrity Web."
          command="./scan_network"
          status="SCANNING"
          statusColor="cyan"
        />

        {/* Recent Resources Carousel */}
        <section className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <RecentResourcesCarousel resources={resources} />
        </section>

        {/* Featured Agents Grid 
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                Verified Agents
              </h2>
            </div>
            <Link href="/resources">
              <Button variant="ghost" size="sm" className="text-xs font-mono text-muted-foreground hover:text-cyan-400">
                VIEW_ALL_AGENTS <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentResources.map((resource) => (
              <div key={resource.name} className="h-[380px]">
                <ResourceCard resource={resource} />
              </div>
            ))}
            {agentResources.length === 0 && (
              <div className="col-span-full h-32 flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/5">
                <p className="font-mono text-sm text-muted-foreground">NO_AGENTS_DETECTED</p>
              </div>
            )}
          </div>
        </section>*/}

        {/* Primitives Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Grid3x3 className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                Core Primitives
              </h2>
            </div>
            <Link href="/primitives">
              <Button variant="ghost" size="sm" className="text-xs font-mono text-muted-foreground hover:text-emerald-400">
                VIEW_ALL_PRIMITIVES <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>

          {primitives.length > 0 ? (
            <PrimitivesShowcase primitives={primitives} />
          ) : (
            <div className="h-32 flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/5">
              <p className="font-mono text-sm text-muted-foreground">NO_PRIMITIVES_AVAILABLE</p>
            </div>
          )}
        </section>

        {/* Nodes Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                Network Nodes
              </h2>
            </div>
            <Link href="/nodes">
              <Button variant="ghost" size="sm" className="text-xs font-mono text-muted-foreground hover:text-purple-400">
                VIEW_ALL_NODES <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>

          {nodes.length > 0 ? (
            <NodesGrid nodes={nodes} />
          ) : (
            <div className="h-32 flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/5">
              <p className="font-mono text-sm text-muted-foreground">NO_NODES_DETECTED</p>
            </div>
          )}
        </section>

        {/* Resources Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                All Resources
              </h2>
            </div>
            <Link href="/resources">
              <Button variant="ghost" size="sm" className="text-xs font-mono text-muted-foreground hover:text-blue-400">
                VIEW_FULL_CATALOG <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>

          {resources.length > 0 ? (
            <ResourcesGrid initialResources={resources} />
          ) : (
            <div className="h-32 flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/5">
              <p className="font-mono text-sm text-muted-foreground">NO_RESOURCES_FOUND</p>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}
