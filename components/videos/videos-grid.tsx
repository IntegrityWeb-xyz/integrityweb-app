import { VideoItem } from "@/lib/videos/types"
import { VideoCard } from "./video-card"

interface VideosGridProps {
    videos: VideoItem[]
}

export function VideosGrid({ videos }: VideosGridProps) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
                <VideoCard key={video.slug} video={video} />
            ))}
        </div>
    )
}
