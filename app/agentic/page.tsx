"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
    Terminal,
    Cpu,
    ShieldCheck,
    Key,
    Fingerprint,
    ArrowRight,
    Zap,
    Code2,
    Blocks
} from "lucide-react"

export default function AgenticPage() {
    return (
        <div className="min-h-screen bg-transparent">
            <Navigation />

            <main className="relative z-10 w-full">

                {/* HERO SECTION: builder Focus */}
                <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative overflow-hidden">
                    {/* Ambient Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950/80 to-slate-950 -z-10" />

                    <div className="max-w-5xl mx-auto text-center space-y-8 z-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            INTEGRITY_WEB_SDK_V2.0
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
                            Build Validated, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Sovereign Agents.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed border-l-2 border-emerald-500/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            The Integrity Web provides the cryptographic primitives and tools you need to architect the next generation of verifiable, autonomous AI applications.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                            <Link href="/build">
                                <Button size="lg" className="h-16 px-10 text-lg bg-white text-black hover:bg-emerald-400 hover:text-black font-bold tracking-wider font-mono shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                                    START_BUILDING
                                </Button>
                            </Link>
                            <Link href="/docs">
                                <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-white/20 hover:bg-white/5 font-mono tracking-wider">
                                    READ_DOCS
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* BUILDER'S SHIFT TIMELINE */}
                <section className="py-24 container mx-auto px-4">
                    <div className="relative border-l border-white/10 ml-4 md:ml-24 space-y-24">

                        {/* Step 1: The Problem */}
                        <div className="relative pl-12 md:pl-24">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-950" />
                            <div className="grid md:grid-cols-2 gap-12 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
                                <div className="space-y-4">
                                    <h3 className="font-mono text-xl text-slate-500 uppercase tracking-widest">Legacy Limitations</h3>
                                    <h2 className="text-4xl font-bold text-white">The Black Box Problem</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Developers today are forced to build agents on opaque backends. You can't verify the model's logic, you don't control the wallet, and you can't prove the data source.
                                        <br /><span className="text-red-400 font-mono text-sm">[ STATUS: UNVERIFIABLE ]</span>
                                    </p>
                                </div>
                                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 font-mono text-xs text-slate-400">
                                    <div className="flex justify-between border-b border-white/5 pb-2 mb-4">
                                        <span>&gt; IMPORT agent_sdk</span>
                                        <span className="text-red-500">WARNING: CLOSED SOURCE</span>
                                    </div>
                                    <div className="space-y-2 opacity-50">
                                        <p># Who holds the keys?</p>
                                        <p>api_key = "platform_owned_secret"</p>
                                        <p># Can I verify the output?</p>
                                        <p>verification = False</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: The Solution */}
                        <div className="relative pl-12 md:pl-24">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] ring-4 ring-slate-950" />
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-4 order-last md:order-first">
                                    <div className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 font-mono text-xs text-cyan-300 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
                                        <div className="flex justify-between border-b border-cyan-500/20 pb-2 mb-4 relative z-10">
                                            <span>&gt; DEPLOY sovereign_agent</span>
                                            <span className="text-emerald-400 font-bold">SUCCESS</span>
                                        </div>
                                        <div className="space-y-2 relative z-10">
                                            <p className="text-emerald-400">import integrity_web as iw</p>
                                            <p>agent = iw.Agent(proof="ZK-STARK")</p>
                                            <p>agent.wallet = iw.Account(control="USER_KEYS")</p>
                                            <p className="text-white pt-2"># Your code, your keys, your truth.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-mono text-xl text-cyan-400 uppercase tracking-widest">The Integrity Web</h3>
                                    <h2 className="text-4xl font-bold text-white">Code is Law. Again.</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We give you the stack to build agents that matter. Use our ZK-rollups for limitless verifiable compute. Integrate "Account Abstraction" to give your agents programmable financial sovereignty.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* THE BUILDER'S TOOLKIT */}
                <section className="py-24 bg-slate-950/50 border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">The Builder's Toolkit</h2>
                            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
                                Everything you need to deploy unstoppable applications on the Integrity Web.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-1">
                            {[
                                {
                                    icon: Code2,
                                    title: "ZK-Compute Engine",
                                    subtitle: "Off-Chain Logic",
                                    desc: "Write complex agent logic in high-level languages. We generate the proofs to verify it on-chain efficiently.",
                                    color: "text-purple-400"
                                },
                                {
                                    icon: Fingerprint,
                                    title: "Identity Standard",
                                    subtitle: "ERC-8004",
                                    desc: "Implement the new standard for Agentic Identity. Reputation, history, and validation built into the protocol.",
                                    color: "text-amber-400"
                                },
                                {
                                    icon: Blocks,
                                    title: "Session Keys",
                                    subtitle: "Programmable Auth",
                                    desc: " granular, temporary, and scoped permissions. Let your agent trade, but not withdraw. Automate with safety.",
                                    color: "text-emerald-400"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group relative p-8 bg-slate-900/20 hover:bg-slate-900/60 transition-colors border border-white/5 hover:border-white/10 hover:z-10">
                                    <div className={`mb-6 p-4 rounded-full bg-slate-950 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">{item.subtitle}</h4>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto bg-slate-950 border border-white/10 p-12 md:p-20 text-center rounded-3xl shadow-2xl shadow-black/50">
                            <Zap className="w-12 h-12 text-white mx-auto mb-8" />
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                                Ready to deploy? <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Start building the future.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Join thousands of developers building the trust layer of the AI internet.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                                <Link href="/build">
                                    <Button className="w-full h-14 bg-white text-black hover:bg-cyan-300 font-bold font-mono tracking-widest uppercase">
                                        Developer Hub
                                    </Button>
                                </Link>
                                <Link href="/join">
                                    <Button variant="outline" className="w-full h-14 border-white/20 hover:bg-white/5 font-mono tracking-widest uppercase">
                                        Join Alliance
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
