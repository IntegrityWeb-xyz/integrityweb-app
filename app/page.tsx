"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Shield, Database, Cpu, Network, Lock, Globe, Zap, Scale, Layers, Box, Disc, Activity, User } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AxiomsIntegrityWeb } from "@/components/framework/axioms-integrity-web"
import { OSFooter } from "@/components/ui/os-footer"

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-cyan-500/30">
      <Navigation />

      <main className="relative z-10 w-full">

        {/* HERO: Floating OS Window */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative">

          {/* Main Glass Interface */}
          <div className="max-w-5xl w-full bg-slate-950/15 backdrop-blur-xl border border-white/8 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-1000 relative">

            {/* Window Controls / Status Bar */}
            <div className="h-8 border-b border-white/5 bg-white/5 flex items-center justify-between px-3">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-cyan-500" />
                SYSTEM_STATUS: ONLINE
              </div>
            </div>

            {/* Content Content */}
            <div className="p-6 md:text-center space-y-8 relative">
              {/* Decorative Grid on Glass */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

              <div className="inline-block relative">
                <div className="absolute -inset-1 rounded-full bg-cyan-500/20 blur-lg animate-pulse" />
                <div className="relative px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[10px] font-mono tracking-[0.2em] uppercase">
                  Welcome to
                </div>
              </div>

              <h1 className="text-5xl font-medium tracking-tighter text-white uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Integrity<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-purple-200">Web</span>
              </h1>

              <p className="text-base md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                A forward move for <span className="text-cyan-400 font-normal">digital civilization</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 relative z-10">
                <Link href="/join">
                  <Button className="h-11 px-8 bg-cyan-500 text-black hover:bg-cyan-400 font-medium tracking-widest uppercase rounded-sm border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </Link>
                <Link href="/build">
                  <Button variant="outline" className="h-11 px-8 border-white/20 hover:bg-white/5 text-foreground hover:text-blue-500 tracking-widest uppercase rounded-sm backdrop-blur-sm">
                    <Terminal className="w-4 h-4 mr-2" />
                    Build
                  </Button>
                </Link>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="h-6 border-t border-white/5 bg-black/30 flex items-center px-3 gap-5 text-[8px] font-mono text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                ZK_CIRCUITS: ACTIVE
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                MAINNET: SYNCED
              </div>
            </div>
          </div>

        </section>


        {/* INFRASTRUCTURE: Holographic Widget Grid */}
        <section className="py-20 px-4 container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10 border-b border-white/8 pb-3">
            <div>
              <h2 className="text-3xl font-medium text-white uppercase tracking-tight">Infrastructure</h2>
              <p className="font-mono text-cyan-500/80 mt-1.5 text-sm">FRAMEWORK_LAYER_01 // PROOFS_REPLACE_TRUST</p>
            </div>
            <div className="hidden md:block text-right text-xs font-mono text-muted-foreground">
              LOAD_MODULE: CORE_STACK<br />
              STATUS: DEPLOYED
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Card 1: Zero Knowledge */}
            <div className="group relative bg-white/5 backdrop-blur-lg border border-white/8 hover:border-cyan-500/50 transition-all duration-500 rounded-xl overflow-hidden p-6">
              <div className="absolute top-0 right-0 p-3 opacity-50"><Shield className="w-7 h-7 text-white/10 group-hover:text-cyan-500 transition-colors" /></div>
              <h3 className="text-xl font-medium text-white mb-3">Zero-Knowledge</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Privacy is dignity. ZK-proofs allow verification without revelation. The shield of autonomy.
              </p>
              <div className="h-28 bg-black/40 rounded-lg border border-white/8 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <code className="text-xs text-emerald-400 font-mono">
                  proof_valid: true<br />
                  input_hidden: true
                </code>
              </div>
            </div>

            {/* Card 2: Validity Proofs */}
            <div className="group relative bg-white/5 backdrop-blur-lg border border-white/8 hover:border-purple-500/50 transition-all duration-500 rounded-xl overflow-hidden p-6">
              <div className="absolute top-0 right-0 p-3 opacity-50"><Scale className="w-7 h-7 text-white/10 group-hover:text-purple-500 transition-colors" /></div>
              <h3 className="text-xl font-medium text-white mb-3">Validity Proofs</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Trust is fragile; proof is eternal. The new covenant of civilization is mathematical certainty.
              </p>
              <div className="h-28 bg-black/40 rounded-lg border border-white/8 relative overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
              </div>
            </div>

            {/* Card 3: Permissionless */}
            <div className="group relative bg-white/5 backdrop-blur-lg border border-white/8 hover:border-indigo-500/50 transition-all duration-500 rounded-xl overflow-hidden p-6">
              <div className="absolute top-0 right-0 p-3 opacity-50"><Network className="w-7 h-7 text-white/10 group-hover:text-indigo-500 transition-colors" /></div>
              <h3 className="text-xl font-medium text-white mb-3">Permissionless</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Freedom is engineered. No single point of failure. The immune system of global freedom.
              </p>
              <div className="h-28 bg-black/40 rounded-lg border border-white/8 relative overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-indigo-500/50 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PUBLIC GOODS: System Notification Panel */}
        <section className="py-20 px-4 container mx-auto max-w-5xl">
          <div className="bg-transparent backdrop-blur-2xl border border-white/8 rounded-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full" />

            <div className="p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-widest border border-emerald-500/20">
                  <Globe className="w-3 h-3" />
                  Sacred_Commons
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                  Public Goods <br />are Central.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Open proof standards, data availability networks, and decentralized identity. The soil of civilization.
                </p>

                <div className="pt-3">
                  <div className="p-3 bg-white/5 rounded border border-white/8">
                    <h4 className="flex items-center gap-1.5 text-white font-medium mb-1.5 text-sm">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      Featured: Mediolano Protocol
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Programmable IP tokenization with zero fees. Preserving creativity as commons.
                    </p>
                    <Link href="/explore">
                      <span className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer">
                        ACCESS_PROTOCOL -&gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Visual Data Visualization */}
              <div className="relative aspect-square bg-black/30 rounded-xl border border-white/8 overflow-hidden p-5">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="h-full flex flex-col justify-between font-mono text-xs text-emerald-500/50">
                  <div className="flex justify-between">
                    <span>BLK_8492</span>
                    <span>HASH_VALID</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-emerald-500/60" />
                    </div>
                    <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-emerald-500/60" />
                    </div>
                    <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-emerald-500/60" />
                    </div>
                  </div>
                  <div className="text-center text-white/80 font-medium text-base">
                    GARDEN_OF_INTELLIGENCES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AXIOMS: Seamless Integration */}
        <section className="py-20 relative">
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-black z-0" /> */}
          <div className="relative z-10">
            <AxiomsIntegrityWeb />
          </div>
        </section>

      </main>


    </div>
  )
}
