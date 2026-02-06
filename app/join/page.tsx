import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShieldCheck, Lock, Fingerprint } from "lucide-react"
import { SignUp } from "@clerk/nextjs"


export default function JoinPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden w-full max-w-full">

        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Panel: Value Props (Desktop Only) */}
          <div className="space-y-8 hidden lg:block pt-4">
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Cryptographic Verification", desc: "Your actions are signed and verifiable on-chain." },
                { icon: Lock, title: "Zero-Knowledge Privacy", desc: "Prove facts without revealing sensitive data." },
                { icon: Fingerprint, title: "Sovereign Ownership", desc: "You own your data, keys, and identity completely." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-zinc-900 rounded border border-white/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-mono text-white font-bold text-base mb-1">{item.title}</h3>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/10 mt-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <ShieldCheck className="w-24 h-24 text-cyan-500" />
              </div>
              <h4 className="font-mono text-cyan-400 font-bold mb-2 relative z-10">SECURE_ENVIRONMENT</h4>
              <p className="text-xs text-muted-foreground font-mono relative z-10 max-w-[80%]">
                This connection is end-to-end encrypted. No personal data is stored on centralized servers.
              </p>
            </div>
          </div>

          {/* Right Panel: Auth Terminal */}
          <div className="relative w-full">
            {/* Desktop-only decorative elements */}
            <div className="hidden md:block absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl z-0" />
            <div className="hidden md:block absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl z-0" />

            <div className="relative md:bg-zinc-950/80 md:border md:border-white/10 md:backdrop-blur-xl p-0 md:p-8 rounded-xl md:shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center z-10 w-full overflow-hidden">
              <div className="w-full flex justify-between items-center mb-6 md:mb-8 border-b border-white/10 pb-4 hidden md:flex">
                <div className="font-mono text-[10px] md:text-xs text-muted-foreground truncate max-w-[150px]">Term: ID-774A</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-500/20" />
                  <div className="w-3 h-3 rounded-full bg-zinc-500/20" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500/80 animate-pulse" />
                </div>
              </div>

              <div className="w-full bg-zinc-900/50 md:bg-transparent rounded-xl border border-white/10 md:border-none p-4 md:p-0">
                <SignUp
                  routing="hash"
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "bg-transparent shadow-none w-full border-none p-0",
                      headerTitle: "hidden",
                      headerSubtitle: "hidden",
                      socialButtonsBlockButton: "bg-white/5 border border-white/10 text-white hover:bg-white/10 h-10 md:h-12",
                      dividerLine: "bg-white/10",
                      dividerText: "text-muted-foreground font-mono text-xs uppercase bg-transparent px-2",
                      formFieldLabel: "text-muted-foreground font-mono text-[10px] md:text-xs uppercase tracking-wider mb-1.5",
                      formFieldInput: "bg-black/50 border-white/10 text-white font-mono focus:border-cyan-500 transition-colors h-10 md:h-12 rounded-md",
                      footer: "hidden",
                      formButtonPrimary: "bg-cyan-500 hover:bg-cyan-600 text-black font-mono font-bold uppercase tracking-wider h-10 md:h-12 w-full",
                      formFieldAction: "text-cyan-500 hover:text-cyan-400",
                      identityPreviewText: "text-muted-foreground font-mono",
                      identityPreviewEditButton: "text-cyan-500 hover:text-cyan-400"
                    }
                  }}
                />
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 w-full text-center hidden md:block">
                <Link href="/" className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors">
                  <ArrowLeft className="w-3 h-3 mr-2" />
                  ABORT_SEQUENCE / RETURN_HOME
                </Link>
              </div>
            </div>

            {/* Mobile-only back link */}
            <div className="mt-8 text-center md:hidden">
              <Link href="/" className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors">
                <ArrowLeft className="w-3 h-3 mr-2" />
                RETURN TO HOME
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
