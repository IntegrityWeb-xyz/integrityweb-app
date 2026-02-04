"use client"

import { VideoItem } from "@/lib/videos/types"
import { VideoCard } from "./video-card"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface VideosCarouselProps {
    videos: VideoItem[]
}

export function VideosCarousel({ videos }: VideosCarouselProps) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full relative group"
        >
            <CarouselContent className="-ml-4">
                {videos.map((video) => (
                    <CarouselItem key={video.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <VideoCard video={video} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="hidden md:block">
                <CarouselPrevious className="left-0 -translate-x-1/2 bg-black/50 border-white/10 text-white hover:bg-cyan-500 hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <CarouselNext className="right-0 translate-x-1/2 bg-black/50 border-white/10 text-white hover:bg-cyan-500 hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
        </Carousel>
    )
}
