import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Users, Zap, Video, Terminal, Radio } from "lucide-react"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 py-24 pb-48">
        <TerminalPageHeader
          title="Temporal Schedule"
          subtitle="Synchronize with global network events and community signals."
          command="./sync_events --global"
          status="TIMELINE_SYNCED"
          statusColor="rose"
          stats={[
            { label: "Upcoming", value: "4" },
            { label: "Community", value: "24k+" },
            { label: "Next Sync", value: "T-48H" }
          ]}
        />

        {/* Timeline View */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">

          {/* Year Marker */}
          <div className="absolute -left-[29px] md:-left-[37px] top-0 flex items-center gap-4">
            <div className="bg-pink-500/20 text-pink-400 font-mono text-xs px-2 py-1 rounded border border-pink-500/50">2026</div>
            <div className="h-px w-8 bg-white/10" />
          </div>

          <div className="space-y-6 pt-8">
            {[
              {
                type: "WORKSHOP_MODULE",
                title: "Building Your First ZK Application",
                date: "2026.03.15",
                time: "10:00 - 13:00 UTC",
                format: "ONLINE_UPLINK",
                location: "REMOTE",
                description: "Initialize your understanding of zero-knowledge proofs. Build a verifiable dApp from scratch.",
                attendees: "250+ NODES",
                icon: Video,
                status: "REGISTRATION_OPEN",
                color: "text-blue-400"
              },
              {
                type: "PHYSICAL_SYNC",
                title: "Bay Area Developer Meetup",
                date: "2026.03.22",
                time: "18:00 - 20:30 PST",
                format: "IN_REAL_LIFE",
                location: "SAN_FRANCISCO_CA",
                description: "Connect with local sub-routines (developers). Discuss best practices and network optimization.",
                attendees: "80+ ATTENDING",
                icon: Users,
                status: "LIMITED_CAPACITY",
                color: "text-purple-400"
              },
              {
                type: "GLOBAL_SUMMIT",
                title: "Verifiable Computing Summit",
                date: "2026.04.05",
                time: "09:00 EST START",
                format: "HYBRID_RELAY",
                location: "NEW_YORK_NY",
                description: "Three days of high-bandwidth knowledge transfer with lead researchers and core developers.",
                attendees: "1000+ EXPECTED",
                icon: Calendar,
                status: "EARLY_ACCESS",
                color: "text-pink-400"
              },
              {
                type: "AI_ALIGNMENT",
                title: "Verifiable Agent Architectures",
                date: "2026.04.20",
                time: "14:00 - 17:00 UTC",
                format: "ONLINE_UPLINK",
                location: "REMOTE",
                description: "Deep dive into autonomous agent alignment using cryptographic constraints.",
                attendees: "450+ NODES",
                icon: Zap,
                status: "REGISTRATION_OPEN",
                color: "text-amber-400"
              }
            ].map((event, i) => (
              <div key={i} className="relative group ml-8 md:ml-0">
                {/* Timeline Node */}
                <div className="absolute -left-[45px] md:-left-[61px] top-6 w-3 h-3 rounded-full bg-slate-950 border border-white/30 group-hover:border-primary group-hover:scale-125 transition-all z-10" />

                <div className="relative bg-slate-950/40 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 rounded-lg p-6 lg:p-8 overflow-hidden group-hover:bg-white/[0.02]">
                  <div className="grid md:grid-cols-4 gap-6">

                    {/* Time/Date Block */}
                    <div className="md:col-span-1 space-y-2 border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 font-mono">
                      <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{event.date}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        {event.time}
                      </div>
                      <div className={`inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 ${event.color} mt-2`}>
                        <Radio className="w-3 h-3 animate-pulse" />
                        {event.format}
                      </div>
                    </div>

                    {/* Info Block */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1 opacity-70">{event.type}</div>
                        <h3 className="text-xl md:text-2xl font-bold font-mono text-white group-hover:text-primary transition-colors">{event.title}</h3>
                      </div>
                      <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          {event.attendees}
                        </div>
                      </div>
                    </div>

                    {/* Action Block */}
                    <div className="md:col-span-1 flex flex-col justify-between items-start md:items-end gap-4">
                      <div className="text-[10px] font-mono px-2 py-1 rounded border border-white/10 text-white/50 bg-black/50 uppercase">
                        STATUS: {event.status}
                      </div>
                      <Button size="sm" className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono tracking-wider hover:border-primary/50 transition-all">
                        [ RSVP ]
                      </Button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-24 p-8 border border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg text-center font-mono">
          <h3 className="text-lg font-bold text-white mb-2">SUBSCRIBE_TO_SIGNALS</h3>
          <p className="text-sm text-muted-foreground mb-6">Receive encrypted transmissions about upcoming protocol events.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="ENTER_EMAIL_HASH"
              className="flex-1 bg-black/50 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-white/20"
            />
            <Button variant="default" className="bg-primary text-black hover:bg-cyan-400 font-bold">
              INIT
            </Button>
          </div>
        </div>

      </main>
    </div>
  )
}
