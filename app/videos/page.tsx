import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Navigation } from "@/components/navigation"
import { getAllVideos } from "@/lib/videos/data"
import { VideosGrid } from "@/components/videos/videos-grid"

export default function VideosPage() {
    const videos = getAllVideos();

    return (
        <div className="min-h-screen pb-20 pt-24 text-foreground bg-transparent selection:bg-cyan-500/20">
            <Navigation />

            <div className="container mx-auto px-4 max-w-7xl">
                <TerminalPageHeader
                    title="Visual Archives"
                    subtitle="Documenting the rise of the Integrity Web. Lectures, tutorials, and sovereign transmissions."
                    command="./stream_archives"
                    status="BROADCASTING"
                    statusColor="cyan"
                    stats={[
                        { label: "Total Archives", value: String(videos.length) },
                        { label: "Storage", value: "Decentralized" },
                    ]}
                />

                <VideosGrid videos={videos} />
            </div>
        </div>
    )
}
