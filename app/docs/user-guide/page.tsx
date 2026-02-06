"use client"


import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Wallet, LayoutDashboard, Database, Bot, HelpCircle, Terminal, Shield, Cpu, Network } from "lucide-react"

export default function UserGuidePage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">


            <main className="container mx-auto px-4 py-24 pb-48">
                <TerminalPageHeader
                    title="User Manual"
                    subtitle="Essential guide for navigating the Integrity Web OS."
                    command="man user_guide"
                    status="READY"
                    statusColor="emerald"
                />

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="space-y-8">
                            <div className="border border-white/10 bg-zinc-950/50 rounded-lg p-4">
                                <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">// TABLE_OF_CONTENTS</div>
                                <nav className="space-y-2 font-mono text-sm">
                                    <a href="#getting-started" className="block text-cyan-400 hover:text-cyan-300 transition-colors">01. Getting Started</a>
                                    <a href="#dashboard" className="block text-muted-foreground hover:text-white transition-colors">02. Dashboard</a>
                                    <a href="#assets" className="block text-muted-foreground hover:text-white transition-colors">03. Asset Management</a>
                                    <a href="#agents" className="block text-muted-foreground hover:text-white transition-colors">04. Autonomous Agents</a>
                                    <a href="#troubleshooting" className="block text-muted-foreground hover:text-white transition-colors">05. Troubleshooting</a>
                                </nav>
                            </div>

                            <div className="border border-white/10 bg-zinc-950/50 rounded-lg p-4">
                                <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">// SYSTEM_STATUS</div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-muted-foreground">Mainnet</span>
                                        <span className="text-green-500">OPERATIONAL</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-muted-foreground">ZK-Prover</span>
                                        <span className="text-green-500">Idle</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-muted-foreground">Gas Price</span>
                                        <span className="text-cyan-500">12 Gwei</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12">

                        {/* 01. Getting Started */}
                        <section id="getting-started" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px bg-white/10 flex-1" />
                                <h2 className="font-mono text-xl font-bold text-white uppercase tracking-wider">01. Getting Started</h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="bg-zinc-950/50 border-white/10">
                                    <CardHeader>
                                        <div className="w-10 h-10 rounded-full bg-cyan-950/30 flex items-center justify-center mb-2 border border-cyan-500/20">
                                            <Wallet className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <CardTitle className="text-white">Connect Wallet</CardTitle>
                                        <CardDescription>Establish your secure identity.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground space-y-4">
                                        <p>
                                            To interact with the Integrity Web, you must connect a compatible Web3 wallet. We support MetaMask, Rainbow, and Rabby.
                                        </p>
                                        <div className="bg-black/50 p-3 rounded border border-white/5 font-mono text-xs text-gray-400">
                                            Click "Connect" in the top right corner.
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-zinc-950/50 border-white/10">
                                    <CardHeader>
                                        <div className="w-10 h-10 rounded-full bg-purple-950/30 flex items-center justify-center mb-2 border border-purple-500/20">
                                            <Shield className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <CardTitle className="text-white">Create Account</CardTitle>
                                        <CardDescription>Register your on-chain profile.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground space-y-4">
                                        <p>
                                            Once connected, sign the initialization message to create your decentralized account. This grants you access to citizen features.
                                        </p>
                                        <div className="bg-black/50 p-3 rounded border border-white/5 font-mono text-xs text-gray-400">
                                            Sign the message "Init Integrity OS Identity".
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* 02. Dashboard */}
                        <section id="dashboard" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px bg-white/10 flex-1" />
                                <h2 className="font-mono text-xl font-bold text-white uppercase tracking-wider">02. Dashboard</h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <div className="bg-zinc-950/30 border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Command Center</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Your personal hub for managing digital assets, verifying credentials, and monitoring network activity. The dashboard provides real-time insights into your Integrity Web footprint.
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                "View real-time balance and gas metrics",
                                                "Manage authorized sessions and keys",
                                                "Track governance proposals and votes"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <ArrowRight className="w-4 h-4 text-cyan-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 font-mono text-xs">
                                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                                            <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                                            <span className="text-white">DASHBOARD_PREVIEW</span>
                                        </div>
                                        <div className="space-y-2 text-gray-500">
                                            <div className="flex justify-between">
                                                <span>Status:</span>
                                                <span className="text-green-500">ONLINE</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Identity:</span>
                                                <span className="text-white">0x71C...9A2</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Reputation:</span>
                                                <span className="text-amber-500">98/100</span>
                                            </div>
                                            <div className="h-16 bg-white/5 rounded mt-4 flex items-center justify-center border border-white/5 border-dashed">
                                                [WIDGET_AREA]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 03. Asset Management */}
                        <section id="assets" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px bg-white/10 flex-1" />
                                <h2 className="font-mono text-xl font-bold text-white uppercase tracking-wider">03. Asset Management</h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <Tabs defaultValue="create" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 bg-zinc-950/50 border border-white/10">
                                    <TabsTrigger value="create">Create</TabsTrigger>
                                    <TabsTrigger value="manage">Manage</TabsTrigger>
                                    <TabsTrigger value="trade">Trade</TabsTrigger>
                                </TabsList>
                                <TabsContent value="create" className="mt-6 border border-white/10 bg-zinc-900/20 rounded-lg p-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="p-3 bg-cyan-950/30 rounded-lg border border-cyan-500/20">
                                            <Database className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Minting Digital Assets</h3>
                                            <p className="text-muted-foreground text-sm mb-4">
                                                Use the Creator Studio to mint new assets. Configure metadata, set royalty parameters, and define access controls—all secured by ZK-proofs.
                                            </p>
                                            <Button variant="outline" size="sm" className="gap-2">
                                                Open Studio <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="manage" className="mt-6 border border-white/10 bg-zinc-900/20 rounded-lg p-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="p-3 bg-cyan-950/30 rounded-lg border border-cyan-500/20">
                                            <FolderTree className="w-6 h-6 text-cyan-400" /> {/* Changed icon to FolderTree assuming import or similar */}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Portfolio Overview</h3>
                                            <p className="text-muted-foreground text-sm mb-4">
                                                View your collected assets, analyze their performance, and manage permissions. The portfolio offers a granular view of your on-chain holdings.
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="trade" className="mt-6 border border-white/10 bg-zinc-900/20 rounded-lg p-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="p-3 bg-cyan-950/30 rounded-lg border border-cyan-500/20">
                                            <Network className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Marketplace Integration</h3>
                                            <p className="text-muted-foreground text-sm mb-4">
                                                List your assets on the open marketplace. Secure, atomic swaps ensure you always get paid instantly when a sale occurs.
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </section>

                        {/* 04. Agents */}
                        <section id="agents" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px bg-white/10 flex-1" />
                                <h2 className="font-mono text-xl font-bold text-white uppercase tracking-wider">04. Autonomous Agents</h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="col-span-1 md:col-span-2 space-y-4">
                                    <p className="text-muted-foreground">
                                        Autonomous agents act on your behalf within the Integrity Web. They can perform complex tasks, monitor events, and execute trades based on pre-defined logic circuits.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded border border-white/10 bg-white/5">
                                            <div className="text-cyan-400 font-mono text-sm mb-1">TASK_AUTOMATION</div>
                                            <div className="text-xs text-muted-foreground">Automate repetitive on-chain actions.</div>
                                        </div>
                                        <div className="p-4 rounded border border-white/10 bg-white/5">
                                            <div className="text-purple-400 font-mono text-sm mb-1">DATA_ORACLE</div>
                                            <div className="text-xs text-muted-foreground">Verify real-world data availability.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 bg-black/50 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                                    <Cpu className="w-12 h-12 text-green-500 mb-4 animate-pulse" />
                                    <h4 className="text-white font-bold mb-1">Agent Monitor</h4>
                                    <div className="font-mono text-xs text-green-400">ACTIVE: 3 NODES</div>
                                </div>
                            </div>
                        </section>

                        {/* 05. Troubleshooting */}
                        <section id="troubleshooting" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px bg-white/10 flex-1" />
                                <h2 className="font-mono text-xl font-bold text-white uppercase tracking-wider">05. Troubleshooting</h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <div className="space-y-4">
                                {[
                                    { q: "Transaction Failed / Out of Gas", a: "Ensure you have sufficient ETH (on Mainnet) or testnet tokens. Check current gas prices in the dashboard." },
                                    { q: "Wallet Not Connecting", a: "Refresh the page and try unlocking your wallet extension first. Clear cache if issues persist." },
                                    { q: "Asset Not Showing", a: "Indexing may take a few minutes. Check the block explorer to confirm the transaction was successful." }
                                ].map((item, i) => (
                                    <div key={i} className="border border-white/5 bg-white/[0.02] rounded-lg p-4">
                                        <h4 className="flex items-center gap-2 font-bold text-white text-sm mb-2">
                                            <HelpCircle className="w-4 h-4 text-amber-500" />
                                            {item.q}
                                        </h4>
                                        <p className="text-sm text-muted-foreground pl-6">
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    )
}

function FolderTree({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-1-1V2a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1H9" />
            <path d="M13 14h8" />
            <path d="M13 18h8" />
            <path d="M13 22h8" />
        </svg>
    )
}
