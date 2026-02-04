import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShieldCheck, Lock, Fingerprint } from "lucide-react"
import { SignUp } from "@clerk/nextjs"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24 pb-48 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden w-full max-w-full">

        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Panel: Welcome Message */}
          <div className="space-y-8 hidden lg:block">


            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: "Cryptographic Verification", desc: "Your actions are signed and verifiable." },
                { icon: Lock, title: "Zero-Knowledge Privacy", desc: "Prove facts without revealing data." },
                { icon: Fingerprint, title: "Sovereign Ownership", desc: "You own your data and keys." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-lg">
                  <div className="p-2 bg-zinc-900 rounded border border-white/10 text-cyan-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-white font-bold text-sm mb-1">{item.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Auth Terminal */}
          <div className="relative w-full max-w-full">
            {/* Decorative border elements - Mobile: Inside/Hidden, Desktop: Outside */}
            <div className="absolute top-0 left-0 md:-top-6 md:-left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl z-0" />
            <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl z-0" />

            <div className="relative bg-zinc-950/80 border border-white/10 backdrop-blur-xl p-6 md:p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center z-10 w-full overflow-hidden">
              <div className="w-full flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="font-mono text-[10px] md:text-xs text-muted-foreground truncate max-w-[150px]">Term: ID-774A</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-500/20" />
                  <div className="w-3 h-3 rounded-full bg-zinc-500/20" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500/80 animate-pulse" />
                </div>
              </div>

              <SignUp
                routing="hash"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none w-full border-none p-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
                    dividerLine: "bg-white/10",
                    dividerText: "text-muted-foreground font-mono text-xs uppercase",
                    formFieldLabel: "text-muted-foreground font-mono text-xs uppercase tracking-wider",
                    formFieldInput: "bg-black/50 border-white/10 text-white font-mono focus:border-cyan-500 transition-colors",
                    footer: "hidden",
                    formButtonPrimary: "bg-cyan-500 hover:bg-cyan-600 text-black font-mono font-bold uppercase tracking-wider"
                  }
                }}
              />

              <div className="mt-6 pt-6 border-t border-white/10 w-full text-center">
                <Link href="/" className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors">
                  <ArrowLeft className="w-3 h-3 mr-2" />
                  ABORT_SEQUENCE / RETURN_HOME
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
