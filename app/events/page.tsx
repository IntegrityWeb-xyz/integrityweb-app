import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Users, Zap, Video, Terminal, Radio } from "lucide-react"
import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { getAllEvents } from "@/lib/events/data"
import { EventItem } from "@/lib/events/types"

const iconMap = {
  Video: Video,
  Users: Users,
  Calendar: Calendar,
  Zap: Zap,
}

export default async function EventsPage() {
  const events = await getAllEvents();

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
        />

        {/* Timeline View */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">

          {/* Year Marker */}
          <div className="absolute -left-[29px] md:-left-[37px] top-0 flex items-center gap-4">
            <div className="bg-pink-500/20 text-pink-400 font-mono text-xs px-2 py-1 rounded border border-pink-500/50">2026</div>
            <div className="h-px w-8 bg-white/10" />
          </div>

          <div className="space-y-6 pt-8">
            {events.map((event, i) => {
              const Icon = iconMap[event.iconName] || Calendar;

              return (
                <div key={i} className="relative group ml-8 md:ml-0">
                  {/* Timeline Node */}
                  <div className="absolute -left-[45px] md:-left-[61px] top-6 w-3 h-3 rounded-full bg-zinc-950 border border-white/30 group-hover:border-primary group-hover:scale-125 transition-all z-10" />

                  <Link href={`/events/${event.slug}`} className="block relative bg-zinc-950/40 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 rounded-lg p-6 lg:p-8 overflow-hidden group-hover:bg-white/[0.02]">
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
                            <Icon className="w-3 h-3" />
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
                          [ INFO ]
                        </Button>
                      </div>

                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>



      </main>
    </div>
  )
}
