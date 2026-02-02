import Link from "next/link"
import { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { BuildHero } from "@/components/build/build-hero"
import { SdkGrid } from "@/components/build/sdk-grid"
import { ProtocolExplorer } from "@/components/build/protocol-explorer"
import { DeveloperResources } from "@/components/build/developer-resources"

export const metadata: Metadata = {
  title: 'Build Verifiable Apps | IntegrityWeb SDK',
  description: 'Documentation, SDKs, and tools to build on the Integrity Web. Get started with zero-knowledge proofs and account abstraction.',
}

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-cyan-500/20">
      <Navigation />

      <main className="container mx-auto px-4 py-24 pb-48">

        <BuildHero />

        <div className="max-w-5xl mx-auto">
          <SdkGrid />
          <ProtocolExplorer />
          <DeveloperResources />
        </div>

      </main>
    </div>
  )
}

