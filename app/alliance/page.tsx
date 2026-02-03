"use client"

import { Button } from "@/components/ui/button"
import {
  Users,
  Handshake,
  Zap,
  Network,
  ShieldCheck,
  Globe,
  Cpu,
  Terminal,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { AxiomsIntegrityWeb } from "@/components/framework/axioms-integrity-web"
import { FoundingStatement } from "@/components/framework/founding-statement"

export default function AlliancePage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-24">

      <main className="flex-grow container mx-auto px-4 py-20">

        {/* HERO: The Network */}
        <section className="relative px-4 py-20 overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/80 to-slate-950 -z-10" />

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              NETWORK_STATUS: ONLINE
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-6">
              The Integrity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Alliance Network</span>
            </h1>

            <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto mb-12">
              A decentralized collective of protocols, rapid-response teams, and sovereign builders defining the axioms of the verified web.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 pt-8">
              {[
                { label: "Active Nodes", value: "842" },
                { label: "Total Value Secured", value: "$4.2B" },
                { label: "Verified Proofs", value: "12.5M" },
                { label: "Contributors", value: "2,100+" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDING STATEMENT */}
        <FoundingStatement />

        {/* ACTIVE NODES GRID */}
        <section className="px-4 py-24 bg-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl tracking-widest flex items-center gap-3">
                <Network className="w-6 h-6 text-cyan-500" />
                Alliance Nodes
              </h2>
              <div className="text-xs font-mono text-muted-foreground border border-white/10 px-3 py-1 rounded bg-white/5">
                FILTER: ALL_SYSTEMS
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "StarkWare", type: "L2_SCALING", status: "VALIDATING", color: "text-cyan-400" },
                { name: "Nethermind", type: "CORE_ENG", status: "SYNCED", color: "text-blue-400" },
                { name: "Herodotus", type: "STORAGE_PROOFS", status: "INDEXING", color: "text-sky-400" },
                { name: "Argent", type: "ACCOUNT_ABS", status: "ACTIVE", color: "text-indigo-400" },
                { name: "Snapshot", type: "GOVERNANCE", status: "VOTING", color: "text-cyan-300" },
                { name: "Chipipay", type: "INVISIBLE_WALLETS", status: "ACTIVE", color: "text-blue-300" },
              ].map((node, i) => (
                <div key={i} className="group relative p-6 bg-slate-900/30 backdrop-blur-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100">
                    <Cpu className="w-4 h-4 text-white/20 group-hover:text-cyan-500 transition-colors" />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 font-bold text-lg">
                      {node.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{node.name}</h3>
                      <div className="text-[10px] font-mono text-muted-foreground">{node.type}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-2">
                    <span className="text-[10px] font-mono text-muted-foreground">latency: 12ms</span>
                    <span className={`text-[10px] font-mono font-bold ${node.color} flex items-center gap-1.5`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-current animate-pulse`} />
                      {node.status}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-cyan-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AXIOMS SHOWCASE */}
        <div className="bg-transparent">
          <AxiomsIntegrityWeb />
        </div>

        {/* JOIN THE INTEGRITY WEB */}
        <section className="px-4 py-24 bg-transparent">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold uppercase mb-4">Join the Integrity Web</h2>
              <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
                We are calling for projects with verifiable computation, transparent logic, and sovereign identity to join our initiative. Follow the principles. Build the future.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent border-t border-dashed border-white/20" />

              {[
                {
                  step: "01",
                  title: "Adopt the Axioms",
                  desc: "Review the declaration. Commit to code as law and proof replacing trust.",
                  cmd: "integrity sign --axioms"
                },
                {
                  step: "02",
                  title: "Build Verifiably",
                  desc: "Use ZK-proofs and open standards to ensure your application is undeniable.",
                  cmd: "integrity verify --build"
                },
                {
                  step: "03",
                  title: "Join the Alliance",
                  desc: "Connect your project to the Integrity Web and access shared resources.",
                  cmd: "integrity connect --mainnet"
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-slate-950 border border-white/10 p-8 text-center group hover:border-cyan-500/50 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-slate-900 rounded-full border border-white/10 flex items-center justify-center font-mono font-bold text-cyan-500 mb-6 group-hover:scale-110 transition-transform bg-black">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{item.desc}</p>
                  <div className="bg-black/50 border border-white/10 rounded px-3 py-2 font-mono text-xs text-cyan-400 text-left overflow-x-auto">
                    $ {item.cmd}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TERMINAL CTA */}
        <section className="px-4 py-32">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-slate-900 border border-white/20 p-1 rounded-xl shadow-2xl">
              <div className="bg-slate-950/50 border-b border-white/10 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-500/20 border border-slate-500/50" />
                <div className="w-3 h-3 rounded-full bg-slate-500/20 border border-slate-500/50" />
                <div className="w-3 h-3 rounded-full bg-slate-500/20 border border-slate-500/50" />
                <div className="ml-2 font-mono text-[10px] text-muted-foreground">uplink_terminal — -zsh — 80x24</div>
              </div>
              <div className="p-8 md:p-12 text-center space-y-8">
                <div className="space-y-2 font-mono text-sm text-cyan-400/80">
                  <p>&gt; Establishing secure connection...</p>
                  <p>&gt; Handshake verifying...</p>
                  <p className="text-white">&gt; READY_TO_JOIN</p>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                  Establish Uplink
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Join the alliance. Build the future of verifiable intelligence.
                </p>

                <div className="flex justify-center gap-4 pt-4">
                  <Link href="/join">
                    <Button size="lg" className="bg-white text-black hover:bg-cyan-400 font-mono font-bold tracking-widest uppercase">
                      Initiate_Join_Sequence
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
