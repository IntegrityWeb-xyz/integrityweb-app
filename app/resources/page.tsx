import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllResources } from "@/lib/resources/data"
import { ResourcesGrid } from "@/components/resources/resources-grid"
import { Activity } from "lucide-react"

export default async function ResourcesPage() {
  const resources = await getAllResources();

  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-24">
      <main className="flex-grow container mx-auto px-4 py-12">

        {/* Header Section */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Resources for the Integrity Web
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tools, frameworks, services and protocols for building the verifiable web.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <ResourcesGrid initialResources={resources} />

      </main>
    </div>
  )
}
