import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Star, Users, Zap, ExternalLink } from "lucide-react"

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navigation />

      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 border-b border-border/30">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Apps & dApps Showcase
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Discover applications built on IntegrityWeb with verifiable computation and cryptographic proofs.
            </p>
            <div className="flex gap-3">
              <Link href="#featured">
                <Button size="lg" className="gradient-button rounded-lg">
                  Explore Apps <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#submit">
                <Button variant="outline" size="lg" className="rounded-lg border-2 border-primary/50 bg-transparent">
                  Submit Your App
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Apps */}
        <section id="featured" className="px-4 py-20 md:py-32 border-b border-border/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Applications</h2>

            <div className="space-y-6">
              {[
                {
                  title: "VerifyAI",
                  category: "AI Agent Platform",
                  description: "Autonomous AI agents with verifiable decision-making and cryptographic proof of computation.",
                  rating: 4.9,
                  users: "5.2K",
                  status: "Production",
                  color: "from-blue-500 to-cyan-500",
                  badge: "Verified",
                  features: ["ZK Proofs", "Multi-Agent", "Real-time Verification"]
                },
                {
                  title: "PrivateFlow",
                  category: "Data Privacy",
                  description: "Enterprise data processing with zero-knowledge guarantees. Process sensitive data without exposure.",
                  rating: 4.8,
                  users: "2.1K",
                  status: "Production",
                  color: "from-cyan-500 to-purple-500",
                  badge: "Verified",
                  features: ["End-to-End Encryption", "Privacy Preserving", "Audit Trail"]
                },
                {
                  title: "GovernanceChain",
                  category: "DAO Governance",
                  description: "Transparent and verifiable voting systems for decentralized organizations.",
                  rating: 4.7,
                  users: "1.8K",
                  status: "Production",
                  color: "from-purple-500 to-pink-500",
                  badge: "Verified",
                  features: ["Verifiable Voting", "Transparent Counting", "Multi-sig Support"]
                },
                {
                  title: "CredentialVault",
                  category: "Identity & Credentials",
                  description: "Self-sovereign digital credentials with instant, cryptographic verification.",
                  rating: 4.9,
                  users: "3.4K",
                  status: "Production",
                  color: "from-pink-500 to-blue-500",
                  badge: "Verified",
                  features: ["Self-Sovereign", "Instant Verify", "Privacy First"]
                },
              ].map((app, i) => (
                <div key={i} className="relative p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 rounded-lg`}></div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold hover:text-primary transition-colors">{app.title}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${app.color} text-white`}>
                          ✓ {app.badge}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{app.category}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${app.color} shadow-md flex-shrink-0`}>
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{app.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border/30">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{app.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{app.users}</div>
                      <p className="text-xs text-muted-foreground">Active Users</p>
                    </div>
                    <div>
                      <div className={`inline-block px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${app.color} text-white`}>
                        {app.status}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <ShieldCheck className={`h-5 w-5 text-green-500`} />
                      <span className="text-xs text-green-500 ml-1">Verified</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.features.map((feature) => (
                      <span key={feature} className="inline-block px-3 py-1 rounded-full text-xs bg-secondary/50 text-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link href="#">
                      <Button className="gradient-button rounded-lg">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#">
                      <Button variant="outline" className="rounded-lg bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Launch App
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Categories */}
        <section className="px-4 py-20 md:py-32 border-b border-border/30 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Browse by Category</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "AI & Agents", count: 12, color: "from-blue-500 to-cyan-500" },
                { name: "Privacy & Security", count: 8, color: "from-cyan-500 to-purple-500" },
                { name: "Governance", count: 6, color: "from-purple-500 to-pink-500" },
                { name: "Identity", count: 5, color: "from-pink-500 to-blue-500" },
                { name: "Finance", count: 9, color: "from-blue-600 to-cyan-600" },
                { name: "Enterprise", count: 4, color: "from-cyan-600 to-purple-600" },
              ].map((category, i) => (
                <Link key={i} href="#">
                  <div className="relative p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                    <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-muted-foreground text-sm">{category.count} verified apps</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Apps Grid */}
        <section className="px-4 py-20 md:py-32 border-b border-border/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8">More Verified Apps</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "DataAudit", desc: "Verifiable audit trails for sensitive operations", verified: true, color: "from-blue-500 to-cyan-500" },
                { title: "ProofMarket", desc: "Marketplace for verified computation services", verified: true, color: "from-cyan-500 to-purple-500" },
                { title: "VeriSign", desc: "Digital signatures with zero-knowledge verification", verified: true, color: "from-purple-500 to-pink-500" },
                { title: "ChainGuard", desc: "Smart contract security verification platform", verified: true, color: "from-pink-500 to-blue-500" },
              ].map((app, i) => (
                <Link key={i} href="#">
                  <div className="relative p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:bg-primary/5 cursor-pointer overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg hover:text-primary transition-colors">{app.title}</h3>
                      {app.verified && (
                        <div className="p-2 rounded bg-gradient-to-r from-green-500 to-emerald-500">
                          <ShieldCheck className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{app.desc}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      View App <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Submit App CTA */}
        <section id="submit" className="px-4 py-20 md:py-32">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Built something <span className="gradient-text-alt">amazing</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">Submit your app to be featured in the IntegrityWeb showcase</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#">
                <Button size="lg" className="gradient-button-alt rounded-lg shadow-lg shadow-cyan-500/40">
                  Submit Your App <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/build">
                <Button variant="outline" size="lg" className="rounded-lg border-2 border-primary/50 bg-transparent">
                  Get Build Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
