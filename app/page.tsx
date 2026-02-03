"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Network, Scale, Globe, Layers, Cpu } from "lucide-react"
import { AxiomsIntegrityWeb } from "@/components/framework/axioms-integrity-web"
import { HolographicHero } from "@/components/ui/holographic-hero"


export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-cyan-500/30 pt-16 pb-20">

      {/* HERO: Holographic HUD Animation */}
      <HolographicHero />

      <div className="container mx-auto px-4 max-w-7xl">

        {/* System Modules */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-1 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl font-medium tracking-tight text-white">
                The engine
              </h2>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hidden md:block">
              Architecture: Modular
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Zero Knowledge */}
            <div className="group relative bg-slate-950/30 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden p-8 hover:border-cyan-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <Shield className="w-8 h-8 text-white/20 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Zero-Knowledge</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Privacy is dignity. ZK-proofs allow verification without revelation. The shield of autonomy.
              </p>
              <div className="mt-auto h-32 bg-black/40 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-cyan-500/20 transition-colors">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="px-4 py-2 bg-slate-900 rounded border border-cyan-500/30 font-mono text-[10px] text-cyan-400">
                  proof.verify(x_witness)
                </div>
              </div>
            </div>

            {/* Card 2: Validity Proofs */}
            <div className="group relative bg-slate-950/30 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden p-8 hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <Scale className="w-8 h-8 text-white/20 group-hover:text-purple-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Validity Proofs</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Trust is fragile; proof is eternal. The new covenant of civilization is mathematical certainty.
              </p>
              <div className="mt-auto h-32 bg-black/40 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-purple-500/20 transition-colors">
                <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
              </div>
            </div>

            {/* Card 3: Permissionless */}
            <div className="group relative bg-slate-950/30 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden p-8 hover:border-indigo-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <Network className="w-8 h-8 text-white/20 group-hover:text-indigo-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Permissionless</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Freedom is engineered. No single point of failure. The immune system of global freedom.
              </p>
              <div className="mt-auto h-32 bg-black/40 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-indigo-500/20 transition-colors">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured App / Public Goods */}
        <section className="mb-24 py-12 px-6 md:px-12 bg-gradient-to-br from-slate-900/50 to-black border border-white/10 rounded-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                <Globe className="w-3 h-3" />
                Featured_Protocol
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Public Goods are <br />The Foundation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Open proof standards, data availability networks, and decentralized identity. We build the soil for the next generation of internet civilization.
              </p>
              <div className="pt-2">
                <Link href="/explore">
                  <Button variant="link" className="text-emerald-400 p-0 text-sm hover:text-emerald-300 font-mono tracking-wider">
                    EXPLORE_PROTOCOLS -&gt;
                  </Button>
                </Link>
              </div>
            </div>

            {/* Protocol Visual */}
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="bg-slate-950/80 border border-white/10 rounded-xl p-6 relative">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <div className="text-sm font-bold text-white">Mediolano Protocol</div>
                </div>
                <div className="space-y-3 font-mono text-[10px] text-emerald-500/70">
                  <div className="flex justify-between"><span>STATUS</span> <span className="text-white">ACTIVE</span></div>
                  <div className="flex justify-between"><span>TYPE</span> <span className="text-white">IP_TOKENIZATION</span></div>
                  <div className="flex justify-between"><span>FEES</span> <span className="text-white">0% (PUBLIC_GOOD)</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AXIOMS SHOWCASE */}
        <section className="mb-24">
          <AxiomsIntegrityWeb />
        </section>

      </div>
    </div>
  )
}
