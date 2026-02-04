
import { Button } from "@/components/ui/button"
import {
  Users,
  Handshake,
  Network,
  Cpu,
  ArrowRight,
  Vote,
  FileText,
  CheckCircle2,
  Clock,
  Activity
} from "lucide-react"
import Link from "next/link"
import { AxiomsIntegrityWeb } from "@/components/framework/axioms-integrity-web"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

import { getAllAllianceMembers } from "@/lib/alliance/data"

// Mock Data for Governance
const proposals = [
  { id: "SIP-42", title: "Integrity SDK v2.0 Specification", status: "DO_VOTE", votes: "98% YES", end: "24h left" },
  { id: "SIP-41", title: "Treasury Diversification (USDC/ETH)", status: "PASSED", votes: "100% YES", end: "Ended" },
  { id: "SIP-40", title: "Grant Program: ZK-Agent Allocations", status: "EXECUTED", votes: "95% YES", end: "Executed" },
]

export default async function AlliancePage() {
  const members = await getAllAllianceMembers();

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <TerminalPageHeader
          title="Integrity Alliance"
          subtitle="A decentralized collective of protocols, rapid-response teams, and sovereign builders defining the axioms of the verified web."
          command="./alliance_uplink"
          status="CONNECTED"
          statusColor="emerald"
          stats={[
            { label: "Active Members", value: String(members.length) },
            { label: "Treasury", value: "$4.2B" },
            { label: "Proposals", value: "142" },
          ]}
        />

        {/* Governance Dashboard */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Vote className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                Active Governance
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Voting_Power: DETECTED
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {proposals.map((prop, i) => (
              <div key={i} className="group flex flex-col p-6 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5">{prop.id}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 ${prop.status === 'DO_VOTE' ? 'text-purple-400' : 'text-emerald-400'}`}>
                    {prop.status === 'DO_VOTE' && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
                    {prop.status}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-6 group-hover:text-purple-400 transition-colors">{prop.title}</h3>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Activity className="w-3 h-3" />
                    {prop.votes}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {prop.end}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alliance Members */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Network className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                Alliance Nodes
              </h2>
            </div>
            <Button variant="ghost" size="sm" className="text-xs font-mono text-muted-foreground hover:text-cyan-400">
              VIEW_FULL_DIRECTORY <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {members.map((node, i) => (
              <Link href={`/alliance/${node.slug}`} key={i} className="block h-full">
                <div className="group relative p-6 h-full bg-zinc-950/30 backdrop-blur-lg border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.1)]">
                  <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    <Cpu className="w-5 h-5 text-white/20 group-hover:text-cyan-500 transition-colors" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 font-bold text-xl text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      {node.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">{node.name}</h3>
                      <div className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-wider">{node.type}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-muted-foreground">LATENCY: {node.stats.latency || 'N/A'}</span>
                    <span className={`text-[10px] font-mono font-bold ${node.color} flex items-center gap-1.5`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-current animate-pulse`} />
                      {node.status}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AXIOMS SHOWCASE */}
        <section className="mb-24">
          <AxiomsIntegrityWeb />
        </section>

        {/* Join CTA */}
        <section className="mb-24 relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Uplink_Ready
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Join the Alliance
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We are calling for projects with verifiable computation, transparent logic, and sovereign identity to join our initiative.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/join">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-cyan-50 text-base font-bold tracking-wide transition-all">
                  Initialize Sequence <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg" className="h-12 px-8 border-white/10 hover:bg-white/5 text-base hover:text-white transition-all">
                  Read Manifesto
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
