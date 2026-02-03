import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Slack, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-24">
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <section className="px-4 py-20 md:py-32 border-b border-border">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Have questions? We'd love to hear from you.
            </p>

            <div className="grid gap-6">
              <div className="p-8 border border-border rounded-lg">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-4">hello@integritywebs.org</p>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-border rounded-lg">
                <div className="flex items-start gap-4">
                  <Slack className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground mb-4">Join our Slack community for real-time discussions</p>
                    <Button size="sm" variant="outline">Join Community</Button>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-border rounded-lg">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Forum</h3>
                    <p className="text-muted-foreground mb-4">Ask questions and share ideas in our community forum</p>
                    <Button size="sm" variant="outline">Visit Forum</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
