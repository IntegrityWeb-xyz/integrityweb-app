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

      <main className="container mx-auto px-4 py-24 pb-48 flex flex-col items-center justify-center min-h-[80vh]">
        <TerminalPageHeader
          title="Access Gateway"
          subtitle="Establish a secure identity channel to interact with the Integrity Web."
          command="ssh -i identity_key user@gateway"
          status="SECURE_CONN"
          statusColor="emerald"
          stats={[
            { label: "Encryption", value: "AES-256" },
            { label: "Handshake", value: "VERIFIED" },
            { label: "Latency", value: "4ms" }
          ]}
          className="max-w-6xl"
        />
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
                  <div className="p-2 bg-slate-900 rounded border border-white/10 text-cyan-400">
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
          <div className="relative">
            {/* Decorative border elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl" />

            <div className="relative bg-slate-950/80 border border-white/10 backdrop-blur-xl p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="font-mono text-xs text-muted-foreground">Term: ID-774A</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
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
