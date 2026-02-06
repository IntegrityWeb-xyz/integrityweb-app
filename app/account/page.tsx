"use client"


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


            <main className="container mx-auto px-4 py-24 pb-48">
                <TerminalPageHeader
                    title="User Mainframe"
                    subtitle="Manage your identity proofs, API keys, and developer resources."
                    command="./whoami --verbose"
                    status="IDENTITY_VERIFIED"
                    statusColor="emerald"
                />

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Identity & Keys */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Identity Card */}
                        <div className="bg-zinc-950/40 border border-white/10 rounded-lg p-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-muted-foreground opacity-50">ID_MODULE</div>
                            <div className="flex items-center justify-center py-8 text-muted-foreground font-mono text-sm">
                                [ IDENTITY_MODULE_NOT_CONNECTED ]
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

                            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground space-y-2">
                                <div className="font-mono text-sm">NO_ACTIVE_KEYS</div>
                                <div className="text-xs opacity-50">Generate a new key to access the network.</div>
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
