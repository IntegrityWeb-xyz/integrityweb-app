import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Resources() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navigation />
      <main className="container mx-auto px-4 py-20 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Resources & Guides</h1>
        <p className="text-muted-foreground mb-8 text-lg">Comprehensive collection of learning materials and guides</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Written Guides</h3>
            <p className="text-muted-foreground mb-4 text-sm">In-depth guides covering core concepts and best practices</p>
            <Button size="sm" variant="outline">Read Guides</Button>
          </div>
          <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
            <p className="text-muted-foreground mb-4 text-sm">Video walkthroughs of common development patterns</p>
            <Button size="sm" variant="outline">Watch Videos</Button>
          </div>
          <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">API Reference</h3>
            <p className="text-muted-foreground mb-4 text-sm">Complete API documentation and code examples</p>
            <Button size="sm" variant="outline">View Reference</Button>
          </div>
          <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Case Studies</h3>
            <p className="text-muted-foreground mb-4 text-sm">Real-world examples of successful IntegrityWeb applications</p>
            <Button size="sm" variant="outline">Explore Cases</Button>
          </div>
          <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Security Best Practices</h3>
            <p className="text-muted-foreground mb-4 text-sm">Guidelines for building secure and verifiable applications</p>
            <Button size="sm" variant="outline">Learn Security</Button>
          </div>
          <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Whitepaper</h3>
            <p className="text-muted-foreground mb-4 text-sm">Technical whitepaper describing IntegrityWeb architecture</p>
            <Button size="sm" variant="outline">Download PDF</Button>
          </div>
        </div>

        <Link href="/dashboard" className="mt-8 inline-block">
          <Button>Back to Dashboard</Button>
        </Link>
      </main>
      <Footer />
    </div>
  )
}
