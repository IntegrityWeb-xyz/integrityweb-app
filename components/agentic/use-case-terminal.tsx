"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Copy, Check } from "lucide-react"

const useCases = [
    {
        id: "defi_trader",
        label: "DeFi Agent",
        code: `class DeFiAgent(Agent):
    def on_opportunity(self, market_data):
        # 1. Verify data source proof
        verify(market_data.proof)
        
        # 2. Execute trade logic (ZK-Private)
        decision = self.strategy(market_data)
        
        # 3. Exec on-chain
        if decision.should_buy:
            self.wallet.swap("ETH", "USDC", amount=100)`
    },
    {
        id: "dao_voter",
        label: "Governance Bot",
        code: `class VoterAgent(Agent):
    def check_proposals(self):
        # Scan active proposals
        proposals = governance.get_active()
        
        for p in proposals:
            # Check alignment with constitution
            if self.constitution.aligns_with(p):
                # Vote and prove alignment
                self.vote(p.id, "FOR", proof=True)`
    },
    {
        id: "content_mod",
        label: "Moderator",
        code: `class ModAgent(Agent):
    def review_content(self, post):
        # Check against community guidelines
        score = self.model.evaluate(post.text)
        
        if score < threshold:
            # Flag content with reasoning proof
            self.flag(post.id, reason="TOXIC", proof=score.proof)`
    }
]

export function UseCaseTerminal() {
    const [activeCase, setActiveCase] = useState(useCases[0])

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // LOGIC_SIMULATION
                </h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Selector */}
                <div className="lg:col-span-1 space-y-2">
                    {useCases.map((useCase) => (
                        <button
                            key={useCase.id}
                            onClick={() => setActiveCase(useCase)}
                            className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm border transition-all ${activeCase.id === useCase.id
                                    ? "bg-slate-800 text-white border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                                    : "bg-slate-950/30 text-muted-foreground border-white/5 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <span className="opacity-50 mr-2">&gt;</span>
                            {useCase.label}
                        </button>
                    ))}

                    <div className="mt-8 p-4 bg-slate-950 rounded border border-white/5 text-xs text-muted-foreground font-mono">
                        <p className="mb-2 uppercase text-[10px] tracking-widest opacity-50">System Note</p>
                        <p>
                            All agent logic is verifiable. The code you write is compiled into a ZK-circuit, ensuring the agent follows its programming perfectly.
                        </p>
                    </div>
                </div>

                {/* Terminal Window */}
                <div className="lg:col-span-3 bg-slate-950 border border-white/10 rounded-lg overflow-hidden flex flex-col min-h-[400px]">
                    {/* Window Controls */}
                    <div className="bg-slate-900 border-b border-white/5 px-4 py-2 flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="font-mono text-[10px] text-muted-foreground">
                            {activeCase.id}.py
                        </div>
                        <Terminal className="w-3 h-3 text-muted-foreground" />
                    </div>

                    {/* Code Area */}
                    <div className="p-6 font-mono text-sm overflow-auto flex-1">
                        <div className="text-cyan-400 mb-4 text-xs opacity-50"># Integrity Agent Runtime v2.0</div>
                        <pre className="text-slate-300 whitespace-pre-wrap">
                            {activeCase.code}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}
