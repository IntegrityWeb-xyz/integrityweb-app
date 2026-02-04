import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, ShieldCheck, Tag, Globe, Github, Twitter, Layers } from "lucide-react"
import { getResourceBySlug } from "@/lib/resources/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const resource = await getResourceBySlug(slug);

    if (!resource) {
        notFound();
    }

    return (
        <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Navigation />

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/4" />
            </div>

            <main className="container mx-auto px-4 pt-32 pb-48 relative z-10">

                {/* Breadcrumb Navigation */}
                <div className="mb-8 flex items-center gap-4">
                    <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <span className="font-mono tracking-wide">RESOURCE_DATABASE</span>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Hero Glass Card */}
                        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-8 md:p-12">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)] opacity-20 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                {/* Logo Box */}
                                <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                    <img src={resource.media.logoUrl} alt={resource.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            {resource.verified && (
                                                <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1">
                                                    <ShieldCheck className="w-3 h-3" />
                                                    VERIFIED
                                                </div>
                                            )}
                                            <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-muted-foreground border border-white/10 uppercase tracking-wider">
                                                {resource.type}
                                            </div>
                                        </div>
                                        <h1 className="text-4xl font-bold text-white tracking-tight">{resource.name}</h1>
                                        <p className="text-lg text-muted-foreground mt-2 font-light">{resource.short_description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {resource.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/[0.03] border border-white/5 text-muted-foreground/80 font-mono">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Panel */}
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/20 backdrop-blur-md p-8 md:p-12 min-h-[300px]">
                            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                                <span className="w-8 h-px bg-white/20"></span>
                                System Description
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed">
                                <p>{resource.description}</p>
                            </div>

                            {/* Gallery placeholder if available */}
                            {resource.media.previewUrl && (
                                <div className="mt-8 rounded-lg overflow-hidden border border-white/10 relative group bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                                        <span className="font-mono text-xs text-white">Preview Interface</span>
                                    </div>
                                    <img src={resource.media.previewUrl} alt="Preview" className="w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                            )}
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Widgets */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Actions Widget */}
                        <div className="rounded-xl border border-white/10 bg-zinc-950/20 backdrop-blur-md p-6 sticky top-24">
                            <h3 className="text-sm font-bold text-white mb-4">Connect</h3>
                            <div className="space-y-3">
                                {resource.links.website && (
                                    <a href={resource.links.website} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full bg-primary hover:bg-cyan-400 text-black font-bold justify-between group">
                                            Visit Website
                                            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </a>
                                )}
                                <div className="grid grid-cols-2 gap-3">
                                    {resource.links.twitter && (
                                        <a href={resource.links.twitter} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-white justify-center">
                                                <Twitter className="w-4 h-4" />
                                            </Button>
                                        </a>
                                    )}
                                    {resource.links.github && (
                                        <a href={resource.links.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-white justify-center">
                                                <Github className="w-4 h-4" />
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase mb-1">Contract Status</div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${resource.contracts.length > 0 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-500'}`} />
                                        <span className="text-sm font-mono text-white">
                                            {resource.contracts.length > 0 ? 'Contracts Verified' : 'No Contracts'}
                                        </span>
                                    </div>
                                </div>

                                {resource.tokens.length > 0 && (
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase mb-1">Tokens</div>
                                        <div className="flex gap-2">
                                            {resource.tokens.map(t => (
                                                <span key={t} className="px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-primary">
                                                    ${t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
