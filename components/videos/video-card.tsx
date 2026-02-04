import Link from "next/link"
import { PlayCircle, Clock, Eye } from "lucide-react"
import { VideoItem } from "@/lib/videos/types"
import Image from "next/image"

interface VideoCardProps {
    video: VideoItem
}

export function VideoCard({ video }: VideoCardProps) {
    return (
        <Link href={`/videos/${video.slug}`} className="group block">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 rounded-xl overflow-hidden mb-4 group-hover:border-cyan-500/50 transition-all duration-300">

                {/* Thumbnail */}
                {(video.thumbnail || video.youtubeId) ? (
                    <img
                        src={video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                ) : (
                    <div className="absolute inset-0 bg-zinc-800" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                    <PlayCircle className="w-6 h-6 text-white group-hover:text-cyan-400 fill-current" />
                </div>


                <div className="absolute bottom-3 right-3 px-1.5 py-0.5 bg-black/80 text-[10px] font-mono text-white rounded border border-white/10 backdrop-blur-md">
                    {video.duration}
                </div>
            </div>

            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {video.title}
            </h3>

            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {video.views}
                </span>
                <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {video.date}
                </span>
            </div>
        </Link>
    )
}
