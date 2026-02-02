import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Build Verifiable Apps | IntegrityWeb SDK',
  description: 'Documentation, SDKs, and tools to build on the Integrity Web. Get started with zero-knowledge proofs and account abstraction.',
}
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Package, Terminal, Cpu, GitBranch } from "lucide-react"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
      <Navigation />

      <main className="container mx-auto px-4 py-24 pb-48">
        <TerminalPageHeader
          title="Compiler Interface"
          subtitle="Initialize projects, deploy contracts, and compile zero-knowledge circuits."
          command="./bin/compile --target=starknet"
          status="RUNTIME_ACTIVE"
          stats={[
            { label: "Compiler", value: "v2.0.4" },
            { label: "Latency", value: "12ms" },
            { label: "Modules", value: "14/14" }
          ]}
        />

        {/* Main Interface */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Panel: Project Initialization */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest pl-1">
              // INITIALIZE_PROJECT
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "AGENT_SDK",
                  desc: "Autonomous agent framework with ZK proofs.",
                  icon: Cpu,
                  color: "text-cyan-400",
                  border: "hover:border-cyan-500/50"
                },
                {
                  title: "SMART_CONTRACTS",
                  desc: "Verifiable logic layer for distributed state.",
                  icon: Code,
                  color: "text-emerald-400",
                  border: "hover:border-emerald-500/50"
                },
                {
                  title: "PRIVACY_CIRCUITS",
                  desc: "Zero-knowledge circuit templates.",
                  icon: Package,
                  color: "text-purple-400",
                  border: "hover:border-purple-500/50"
                },
                {
                  title: "DAPP_SCAFFOLD",
                  desc: "Next.js + IntegrityWeb starter kit.",
                  icon: GitBranch,
                  color: "text-blue-400",
                  border: "hover:border-blue-500/50"
                }
              ].map((item, i) => (
                <div key={i} className={`group p-6 bg-slate-950/50 border border-white/5 ${item.border} transition-all duration-300 cursor-pointer relative overflow-hidden`}>
                  <div className="flex justify-between items-start mb-4">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="text-[10px] font-mono text-muted-foreground opacity-50">LIB_{i.toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Hover Scanline */}
                  <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* CLI Preview */}
            <div className="mt-8 bg-black/80 border border-white/10 rounded-lg p-4 font-mono text-sm overflow-hidden relative group">
              <div className="absolute top-2 right-2 flex gap-1.5 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="text-muted-foreground mb-2"># Install Integrity CLI</div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-white/50">$</span>
                <span className="typing-effect">npm install @integrity-web/cli</span>
                <span className="animate-pulse w-2 h-4 bg-emerald-400 inline-block ml-1" />
              </div>
            </div>
          </div>

          {/* Right Panel: Documentation & Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest pl-1">
              // QUICK_ACCESS
            </h2>

            <div className="bg-slate-950/30 border border-white/10 divide-y divide-white/5">
              {[
                "View Documentation",
                "API Reference",
                "Github Repository"
              ].map((link, i) => (
                <Link key={i} href="#" className="flex items-center justify-between p-4 hover:bg-white/5 hover:pl-6 transition-all group">
                  <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    {link}
                  </span>
                  <Terminal className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </Link>
              ))}
            </div>

            <div className="p-6 border border-dashed border-white/10 bg-white/5 rounded-lg text-center">
              <h3 className="font-mono text-sm text-white mb-2">NEED_SUPPORT?</h3>
              <p className="text-xs text-muted-foreground mb-4">Join the specific discord channel for builder support.</p>
              <Button size="sm" variant="outline" className="w-full font-mono text-xs hover:bg-white/10">
                <span className="text-indigo-400 mr-2">●</span> CONNECT_DISCORD
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
