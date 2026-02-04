import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Search, FolderTree, FileCode, ChevronRight, BookOpen, Terminal, FileText, Folder } from "lucide-react"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
      <Navigation />

      <main className="container mx-auto px-4 py-24 pb-48">
        <TerminalPageHeader
          title="Protocol Manual"
          subtitle="Comprehensive documentation for the Integrity Web Operating System."
          command="man integrity_os"
          status="INDEX_LOADED"
          statusColor="amber"
          stats={[
            { label: "Pages", value: "342" },
            { label: "Last Update", value: "02.02.26" },
            { label: "Version", value: "1.0.0-alpha" }
          ]}
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
                  <div className="text-cyan-400">README.md</div>
                  <Link href="/docs/user-guide">
                    <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors block">user_guide.md</div>
                  </Link>
                  <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors">quick_start.sh</div>
                  <div className="text-muted-foreground hover:text-white cursor-pointer transition-colors">architecture.pdf</div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Folder className="w-4 h-4" />
                  <span>core_protocols</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Folder className="w-4 h-4" />
                  <span>zk_circuits</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Folder className="w-4 h-4" />
                  <span>api_reference</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Man Page Style */}
          <div className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              <div className="border border-white/10 bg-zinc-950/50 p-8 rounded-lg relative overflow-hidden">
                {/* Decorative Header */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50" />
                <div className="flex justify-between font-mono text-xs text-muted-foreground mb-8">
                  <span>MANUAL PAGE NO. 1</span>
                  <span>INTEGRITY(1)</span>
                </div>

                <h1 className="font-mono text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                  INTEGRITY_WEB MANUAL
                </h1>

                <div className="mb-6 flex gap-4 border-b border-white/10">
                  <button className="px-4 py-2 text-sm font-mono text-cyan-400 border-b-2 border-cyan-400">
                    [ OPERATOR_MANUAL ]
                  </button>
                  <button className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-white transition-colors">
                    [ PROTOCOL_SPEC ]
                  </button>
                </div>

                <div className="space-y-8 font-mono">
                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2 border-b border-white/10 pb-1 w-fit">Synopsis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Integrity Web is a decentralized operating system for verifiable computation. It enables the creation of autonomous agents, privacy-preserving applications, and immutable state machines using zero-knowledge proofs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2 border-b border-white/10 pb-1 w-fit">Quick_Start</h3>
                    <div className="bg-black/50 border border-white/10 p-4 rounded text-sm text-gray-300">
                      <span className="text-cyan-500">$</span> integrity init my-verifiable-app<br />
                      <span className="text-gray-500">Initializing project structure... [OK]</span><br />
                      <span className="text-cyan-500">$</span> cd my-verifiable-app && integrity dev<br />
                      <span className="text-gray-500">Starting development node on port 3000...</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {[
                      { title: "Core Concepts", icon: BookOpen, desc: "Fundamental Theorems" },
                      { title: "User Manual", icon: Folder, desc: "Operator Guide & Usage", href: "/docs/user-guide" },
                      { title: "API Reference", icon: Terminal, desc: "System Calls & Methods" },
                      { title: "Smart Contracts", icon: FileCode, desc: "Logic Gates" },
                      { title: "Agent Kit", icon: FileText, desc: "Autonomous Routines" },
                    ].map((item, i) => (
                      <Link key={i} href="#" className="flex items-center gap-4 p-4 border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-white/10 transition-all group">
                        <div className="p-2 bg-zinc-900 rounded border border-white/5 group-hover:border-primary/50">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm group-hover:text-primary transition-colors uppercase">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
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
