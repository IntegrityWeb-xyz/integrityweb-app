import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Button } from "@/components/ui/button"
import { Globe, Search, Filter, Database, Server, Shield, Cpu, ExternalLink } from "lucide-react"
import { getAllResources } from "@/lib/resources/data"
import { RecentResourcesCarousel } from "@/components/resources/recent-resources-carousel"
import Link from "next/link"
import { ResourceCard } from "@/components/resources/resource-card"

const networkStats = [
  {
    title: "Sovereign Money Layer",
    type: "BITCOIN",
    desc: "The decentralized hard asset foundation for the global economy.",
    stats: "650 EH/s HASHRATE",
    icon: Database
  },
  {
    title: "Sovereign Identity",
    type: "NOSTR / DID",
    desc: "Censorship-resistant profiles and social graphs owned by users.",
    stats: "2M+ IDENTITIES",
    icon: Shield
  },
  {
    title: "Verifiable Compute",
    type: "ZK-STARKS",
    desc: "Trustless execution verification for AI agents and smart contracts.",
    stats: "PROOFS: VALID",
    icon: Cpu
  },
  {
    title: "Freedom Network",
    type: "TOR / P2P",
    desc: "Anonymity layer preventing surveillance and traffic analysis.",
    stats: "7,000+ RELAYS",
    icon: Globe
  },
]

export default async function ExplorePage() {
  const resources = await getAllResources();
  const agentResources = resources.filter(r => r.type === 'agent').slice(0, 4);
  const otherResources = resources.filter(r => r.type !== 'agent').slice(0, 4);

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

        {/* Featured Agents Grid */}
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
        </section>

        {/* Network Infrastructure section removed as it contained mock data */}

      </div>
    </div>
  )
}
