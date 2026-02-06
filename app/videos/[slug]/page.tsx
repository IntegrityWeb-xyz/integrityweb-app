
import { getVideoBySlug } from "@/lib/videos/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Share2, Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const video = getVideoBySlug(slug);

    if (!video) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20 pt-24 text-foreground bg-transparent selection:bg-cyan-500/20">


            <main className="container mx-auto px-4 max-w-5xl">

                {/* Back Link */}
                <div className="mb-8">
                    <Link href="/videos" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-cyan-400 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        RETURN_TO_ARCHIVES
                    </Link>
                </div>

                {/* Player Container */}
                <div className="relative aspect-video bg-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-900/10 mb-8 group">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* Corner decorative elements (Overlay pointer-events-none) */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-500/50 pointer-events-none z-10">[SECURE_STREAM]</div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 pointer-events-none z-10">
                        <div className="w-1/3 h-full bg-cyan-500" />
                    </div>
                </div>

                {/* Info Block */}
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-widest">
                                {video.category}
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">{video.date}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{video.title}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {video.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {video.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono text-zinc-500 px-2 py-1 rounded bg-white/5">#{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex md:flex-col gap-4 shrink-0">
                        <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                            <Share2 className="w-4 h-4" /> Share
                        </Button>
                        <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                            <Download className="w-4 h-4" /> Save
                        </Button>
                    </div>
                </div>

            </main>
        </div>
    )
}
