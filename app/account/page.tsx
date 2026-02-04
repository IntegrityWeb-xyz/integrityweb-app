"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { User, Key, Shield, Download, Copy, RefreshCw } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function AccountPage() {
    // Mock State for interactivity
    const [apiKey] = useState("sk_live_9f8d...7a2b")

    return (
        <div className="min-h-screen bg-transparent text-foreground">
            <Navigation />

            <main className="container mx-auto px-4 py-24 pb-48">
                <TerminalPageHeader
                    title="User Mainframe"
                    subtitle="Manage your identity proofs, API keys, and developer resources."
                    command="./whoami --verbose"
                    status="IDENTITY_VERIFIED"
                    statusColor="emerald"
                    stats={[
                        { label: "Access Level", value: "L3_OPERATOR" },
                        { label: "Reputation", value: "98.4%" },
                        { label: "Credits", value: "4,500" }
                    ]}
                />

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Identity & Keys */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Identity Card */}
                        <div className="bg-zinc-950/40 border border-white/10 rounded-lg p-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-muted-foreground opacity-50">ID_MODULE</div>
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded bg-white/5 border border-white/10 flex items-center justify-center relative">
                                    <User className="w-8 h-8 text-muted-foreground" />
                                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border border-black shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-mono text-xl text-white font-bold">Operator_0x4a...92f</h3>
                                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                                        <span>UID: 8492-4912-9102</span>
                                        <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
                                    </div>
                                    <div className="pt-2 flex gap-2">
                                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-mono text-[10px]">
                                            VERIFIED_HUMAN
                                        </Badge>
                                        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono text-[10px]">
                                            EARLY_ADOPTER
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* API Keys Section */}
                        <div className="bg-zinc-950/40 border border-white/10 rounded-lg p-6 space-y-6">
                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <h3 className="font-mono text-lg text-white font-bold flex items-center gap-2">
                                    <Key className="w-5 h-5 text-amber-400" />
                                    API Access
                                </h3>
                                <Button size="sm" variant="outline" className="h-8 text-xs font-mono">
                                    + NEW_KEY
                                </Button>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "Production Key", scope: "read/write", created: "2026-01-15" },
                                    { label: "Testnet Key", scope: "read-only", created: "2026-02-01" }
                                ].map((key, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-black/40 border border-white/5 rounded">
                                        <div>
                                            <div className="font-mono text-sm text-white mb-1">{key.label}</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                                <span>{apiKey}</span>
                                                <Copy className="w-3 h-3 hover:text-white cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs font-mono">
                                            <span className="text-muted-foreground">SCOPE: {key.scope}</span>
                                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:text-red-400">
                                                <RefreshCw className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: SDK & Resources */}
                    <div className="space-y-6">
                        <div className="bg-zinc-950/40 border border-white/10 rounded-lg p-6">
                            <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                                // DEV_RESOURCES
                            </h3>

                            <div className="space-y-3">
                                <Button variant="outline" className="w-full justify-between font-mono text-xs border-white/5 hover:bg-white/5">
                                    <span>TypeScript SDK</span>
                                    <Download className="w-3 h-3" />
                                </Button>
                                <Button variant="outline" className="w-full justify-between font-mono text-xs border-white/5 hover:bg-white/5">
                                    <span>Python Agent Kit</span>
                                    <Download className="w-3 h-3" />
                                </Button>
                                <Button variant="outline" className="w-full justify-between font-mono text-xs border-white/5 hover:bg-white/5">
                                    <span>Rust Circuits</span>
                                    <Download className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-900/20 to-zinc-900 border border-cyan-500/20 rounded-lg p-6 text-center">
                            <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                            <h4 className="font-mono text-white text-sm font-bold mb-2">Upgrade Security</h4>
                            <p className="text-xs text-muted-foreground mb-4">Enable multi-signature verification for higher rate limits.</p>
                            <Button size="sm" className="w-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/50 font-mono">
                                CONFIGURE_SIG
                            </Button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
