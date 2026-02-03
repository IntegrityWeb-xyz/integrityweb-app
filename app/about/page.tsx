import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Globe, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-24">
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <section className="px-4 py-20 md:py-32 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About IntegrityWeb
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              IntegrityWeb is a framework for building verifiable, trustworthy applications grounded in mathematical certainty. Founded on three core axioms—Code is Math, Math is Reality, and Reality is Verifiable—we enable developers to create applications where every claim can be cryptographically proven and independently verified.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-8">
              To empower developers, startups, and organizations to build applications that don't require trust in intermediaries, but instead provide mathematical proof of correctness. We believe the future of computing is verifiable computing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">For Developers</h3>
                <p className="text-muted-foreground">Access powerful tools and frameworks to build verifiable applications with ease</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">For Organizations</h3>
                <p className="text-muted-foreground">Deploy trustworthy systems where compliance and correctness are mathematically guaranteed</p>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/join">
                <Button>Join the Mission</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
