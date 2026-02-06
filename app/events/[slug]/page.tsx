
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, Zap, Video, Terminal, Radio, ExternalLink, Share2, Clock } from "lucide-react"
import { getEventBySlug } from "@/lib/events/data"
import { notFound } from "next/navigation"
import Link from "next/link"

const iconMap = {
    Video: Video,
    Users: Users,
    Calendar: Calendar,
    Zap: Zap,
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = await getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    const Icon = iconMap[event.iconName] || Calendar;

    // Helper to get status color badge style
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'REGISTRATION_OPEN': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'LIMITED_CAPACITY': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            case 'EARLY_ACCESS': return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
            case 'SOLD_OUT': return 'bg-red-500/10 text-red-400 border-red-500/20';
            case 'COMPLETED': return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
            default: return 'bg-primary/10 text-primary border-primary/20';
        }
    };

    return (
        <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">


            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${event.color.replace('text-', 'bg-')}/10 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/4`} />
            </div>

            <main className="container mx-auto px-4 pt-32 pb-48 relative z-10">

                {/* Breadcrumb Navigation */}
                <div className="mb-8 flex items-center gap-4">
                    <Link href="/events" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <span className="font-mono tracking-wide">TIMELINE_RETREAT</span>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Hero Glass Card */}
                        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12">
                            {/* Subtle grid pattern overlay */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)] opacity-20 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className={`px-3 py-1 rounded-full text-xs font-mono border ${getStatusStyle(event.status)} uppercase tracking-wider`}>
                                        {event.status.replace('_', ' ')}
                                    </div>
                                    <div className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                        <Radio className="w-3 h-3 animate-pulse text-primary" />
                                        {event.format.replace('_', ' ')}
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50 mb-6 tracking-tight leading-tight">
                                    {event.title}
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                                    {event.description}
                                </p>
                            </div>
                        </div>

                        {/* Content Glass Card */}
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md p-8 md:p-12">
                            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                                <span className="w-8 h-px bg-white/20"></span>
                                Transmission Content
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-loose">
                                <p>{event.content || event.description}</p>
                                <p>
                                    Join the network of verified participants. This session will establish the foundational protocols for
                                    the next generation of integrity-first applications. Prepare your local environment and ensure your
                                    cryptographic keys are ready for signatures.
                                </p>
                                <h3>Required Protocols</h3>
                                <ul className="list-disc pl-4 space-y-2 text-muted-foreground/80 marker:text-primary/50">
                                    <li>Basic understanding of Zero-Knowledge proofs</li>
                                    <li>Node.js v18+ environment installed</li>
                                    <li>A secure Ethereum wallet (Metamask or similar)</li>
                                    <li>Git CLI installed and configured</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Widgets / HUD */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Registration Widget */}
                        <div className="rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-xl p-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white">
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Secure Your Spot</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Limited capacity. Cryptographic proof of attendance will be issued.
                                </p>
                                <Button className="w-full bg-primary hover:bg-cyan-400 text-black font-bold h-12 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                    REGISTER NOW
                                </Button>
                            </div>
                        </div>

                        {/* Date & Time Widget */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:bg-white/[0.05] transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-md bg-white/5 border border-white/10 text-white">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-muted-foreground uppercase mb-1">Date Sequence</div>
                                    <div className="text-white font-medium">{event.date}</div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-4">
                                <div className="p-2 rounded-md bg-white/5 border border-white/10 text-white">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-muted-foreground uppercase mb-1">Time Signal</div>
                                    <div className="text-white font-medium">{event.time}</div>
                                </div>
                            </div>
                        </div>

                        {/* Location Widget */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:bg-white/[0.05] transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-md bg-white/5 border border-white/10 text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-muted-foreground uppercase mb-1">Coordinates</div>
                                    <div className="text-white font-medium">{event.location}</div>
                                    <a href="#" className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline decoration-primary/50 underline-offset-4">
                                        View Map <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Attendees Widget */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:bg-white/[0.05] transition-colors">
                            <h4 className="text-xs font-mono text-muted-foreground uppercase mb-4">Confirmed Nodes</h4>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex -space-x-2 overflow-hidden">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/20" />
                                    ))}
                                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] text-white font-mono">
                                        +42
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-white">{event.attendees}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}
