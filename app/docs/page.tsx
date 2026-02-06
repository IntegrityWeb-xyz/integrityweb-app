import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Search, FolderTree, FileCode, ChevronRight, BookOpen, Terminal, FileText, Folder, Shield, Database, Network, Cpu } from "lucide-react"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">


      <main className="container mx-auto px-4 py-24 pb-48">
        <TerminalPageHeader
          title="Protocol Manual"
          subtitle="Comprehensive documentation for the Sovereign Digital Civilization."
          command="man digital_civilization"
          status="INDEX_LOADED"
          statusColor="emerald"
        />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar: File Tree */}
          <div className="lg:col-span-1 border-r border-white/10 pr-6 hidden lg:block">
            <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">// DIRECTORY_TREE</div>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Folder className="w-4 h-4" />
                  <span>introduction</span>
                </div>
                <div className="pl-6 space-y-2 border-l border-white/10 ml-2">
                  <div className="text-cyan-400">READ_ME.md</div>
                  <Link href="/docs/user-guide">
                    <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors block">digital_civilization.md</div>
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Folder className="w-4 h-4" />
                  <span>core_protocols</span>
                </div>
                <div className="pl-6 space-y-2 border-l border-white/10 ml-2">
                  <Link href="/nexus">
                    <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors block">nexus_nodes.md</div>
                  </Link>
                  <Link href="/primitives">
                    <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors block">integrity_primitives.md</div>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Folder className="w-4 h-4" />
                  <span>system</span>
                </div>
                <div className="pl-6 space-y-2 border-l border-white/10 ml-2">
                  <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors">verification.zk</div>
                  <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors">consensus.btc</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Man Page Style */}
          <div className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              <div className="border border-white/10 bg-zinc-950/50 p-8 rounded-lg relative overflow-hidden">
                {/* Decorative Header */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50" />
                <div className="flex justify-between font-mono text-xs text-muted-foreground mb-8">
                  <span>MANUAL PAGE NO. 1</span>
                  <span>INTEGRITY(1)</span>
                </div>

                <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                  DIGITAL_CIVILIZATION MANUAL
                </h1>

                <div className="mb-6 flex gap-4 border-b border-white/10">
                  <button className="px-4 py-2 text-sm font-mono text-emerald-400 border-b-2 border-emerald-400">
                    [ SYNOPSIS ]
                  </button>
                  <button className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-white transition-colors">
                    [ TOPOLOGY ]
                  </button>
                </div>

                <div className="space-y-8 font-mono">
                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2 border-b border-white/10 pb-1 w-fit">Synopsis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Integrity Web is the operating system for a Sovereign Digital Civilization. It replaces trust in institutions with cryptographic truth, establishing a network based on Hard Assets (Bitcoin), Censorship-Resistance (Nostr/Tor), and Verifiable Compute (ZK/RisC-V).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2 border-b border-white/10 pb-1 w-fit">Quick_Start</h3>
                    <div className="bg-black/50 border border-white/10 p-4 rounded text-sm text-gray-300">
                      <span className="text-emerald-500">$</span> connect --network=nexus<br />
                      <span className="text-gray-500">Establishing uplink to 8,942 active nodes... [OK]</span><br />
                      <span className="text-emerald-500">$</span> verify --primitive=bitcoin<br />
                      <span className="text-gray-500">Genesis block confirmed. Hard asset truth established.</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {[
                      { title: "Primitives Registry", icon: Database, desc: "Supported Integrity Assets", href: "/primitives" },
                      { title: "Nexus Dashboard", icon: Network, desc: "Active Node Topology", href: "/nexus" },
                      { title: "User Guide", icon: Folder, desc: "Operator Manual", href: "/docs/user-guide" },
                      { title: "Visual Archives", icon: FileCode, desc: "Technical Deep Dives", href: "/videos" },
                    ].map((item, i) => (
                      <Link key={i} href={item.href} className="flex items-center gap-4 p-4 border border-white/10 hover:border-emerald-500/50 bg-white/5 hover:bg-emerald-500/10 transition-all group">
                        <div className="p-2 bg-zinc-900 rounded border border-white/5 group-hover:border-emerald-500/50">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors uppercase">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
