"use client"

import { Quote, Scale, ShieldAlert } from "lucide-react"

export function SovereignValues() {
    return (
        <section className="mb-32 relative">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    // CORE_VALUES
                </h2>
                <div className="h-px flex-1 bg-white/10 ml-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Manifesto */}
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white tracking-tight">
                        Why Sovereignty Matters
                    </h2>

                    <div className="prose prose-invert prose-lg text-muted-foreground">
                        <p>
                            When you rely on centralized AI platforms, you are trusting a black box.
                            You trust them not to deprecate your model, not to censor your inputs,
                            and not to compete with your business.
                        </p>
                        <p>
                            Sovereignty flips this dynamic. When your agent's computations are ZK-verified,
                            you aren't just trusting that the AI is "doing its best." You are
                            <span className="text-cyan-400 font-bold"> mathematically certain </span>
                            that it is operating within the guardrails you defined.
                        </p>
                    </div>

                    <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Quote className="w-20 h-20 text-cyan-500" />
                        </div>
                        <blockquote className="relative z-10">
                            <p className="text-xl md:text-2xl font-medium text-cyan-100 italic leading-relaxed">
                                "Sovereignty is the transition from 'Don't be evil' to 'Can't be evil'."
                            </p>
                        </blockquote>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="h-0.5 w-8 bg-cyan-500/50" />
                            <span className="text-sm font-mono text-cyan-500 uppercase tracking-widest">Integrity Manifesto</span>
                        </div>
                    </div>
                </div>

                {/* Right: Comparison Cards */}
                <div className="space-y-6">
                    <div className="p-6 rounded-xl border border-red-500/10 bg-gradient-to-br from-red-950/10 to-transparent backdrop-blur-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/20 text-red-500">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-red-200">Standard AI</h3>
                                <p className="text-xs font-mono text-red-400">TRUST_BASED</p>
                            </div>
                        </div>
                        <p className="text-sm text-red-200/60 leading-relaxed">
                            "We promise not to train on your data." Subject to terms of service changes, hidden biases, and platform risk. You are a user, not an owner.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-transparent backdrop-blur-md shadow-2xl shadow-cyan-500/5 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
                                <Scale className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Sovereign Agent</h3>
                                <p className="text-xs font-mono text-cyan-400">TRUTH_BASED</p>
                            </div>
                        </div>
                        <p className="text-sm text-cyan-100/80 leading-relaxed">
                            "Here is the mathematical proof that this code executed correctly." Permissionless, censorship-resistant, and validatable. You own the keys, the data, and the profit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
