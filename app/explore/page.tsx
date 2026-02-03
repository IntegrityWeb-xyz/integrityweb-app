import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Button } from "@/components/ui/button"
import { Globe, Search, Filter, Database, Server, Shield } from "lucide-react"

const categories = [
  { id: "all", label: "ALL_NODES" },
  { id: "defi", label: "DECENTRALIZED_FINANCE" },
  { id: "infra", label: "INFRASTRUCTURE" },
  { id: "dao", label: "GOVERNANCE" },
  { id: "social", label: "SOCIAL_GRAPHS" },
]

const nodes = [
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

export default function ExplorePage() {
  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <TerminalPageHeader
          title="Explore The Network"
          subtitle="Discover active nodes, applications, and protocols running on the Integrity Web."
          command="./scan_network"
          status="SCANNING"
          statusColor="cyan"
          stats={[
            { label: "Active Nodes", value: "8,942" },
            { label: "Global Hashrate", value: "4.2 EH/s" },
            { label: "Total Protocols", value: "142" },
          ]}
        />

        {/* Search & Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="SEARCH_PROTOCOLS..." 
              className="w-full h-12 bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-lg pl-10 pr-4 font-mono text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/60 transition-all uppercase tracking-wider"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0 mr-2" />
            {categories.map(cat => (
              <button 
                key={cat.id}
                className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 text-[10px] font-mono text-muted-foreground hover:text-cyan-400 uppercase tracking-widest whitespace-nowrap transition-all"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {nodes.map((node, i) => (
            <div 
              key={i} 
              className="group relative bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
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
      </div>
    </div>
  )
}
