import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Button } from "@/components/ui/button"
import { Globe, Search, Filter, Database, Server, Shield, Cpu, ExternalLink } from "lucide-react"
import { getAllResources } from "@/lib/resources/data"
import { RecentResourcesCarousel } from "@/components/resources/recent-resources-carousel"
import Link from "next/link"
import { ResourceCard } from "@/components/resources/resource-card"

const networkStats = [
  {
    title: "Verifiable Compute Grid",
    type: "INFRASTRUCTURE",
    desc: "Decentralized compute resources for ZK proof generation.",
    stats: "99.9% UPTIME",
    icon: Server
  },
  {
    title: "Privacy Identity Layer",
    type: "IDENTITY",
    desc: "Self-sovereign identity protocol with selective disclosure.",
    stats: "1.2M IDENTS",
    icon: Shield
  },
  {
    title: "Open Data Oracle",
    type: "DATA",
    desc: "Trustless data feeds for smart contracts and verifiable agents.",
    stats: "450ms LATENCY",
    icon: Database
  },
  {
    title: "Global Mesh Network",
    type: "NETWORK",
    desc: "Peer-to-peer communication layer resistant to censorship.",
    stats: "85TB/s",
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
          stats={[
            { label: "Active Nodes", value: String(resources.length + 842) },
            { label: "Global Hashrate", value: "4.2 EH/s" },
            { label: "Total Protocols", value: String(resources.length) },
          ]}
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

        {/* Network Infrastructure (Static/Hardcoded for now as placeholders) */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8 px-1 border-b border-white/5 pb-4">
            <Server className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-medium tracking-tight text-white">
              Network Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {networkStats.map((node, i) => (
              <div
                key={i}
                className="group relative bg-zinc-950/30 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                      <node.icon className="h-6 w-6" />
                    </div>
                    <div className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                      {node.type}
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {node.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {node.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">PERFORMANCE</span>
                      <span className="text-xs font-mono text-emerald-400">{node.stats}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="h-8 hover:bg-cyan-500/10 hover:text-cyan-400 font-mono text-xs uppercase tracking-wider group/btn">
                      Details <span className="ml-1 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all">→</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
