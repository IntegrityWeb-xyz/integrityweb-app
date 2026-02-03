"use client"

import { useRef } from "react"
import { ResourceItem } from "@/lib/resources/types"
import { ResourceCard } from "./resource-card"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecentResourcesCarouselProps {
    resources: ResourceItem[]
}

export function RecentResourcesCarousel({ resources }: RecentResourcesCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400 // Approx card width + gap
            const currentScroll = scrollContainerRef.current.scrollLeft
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount

            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            })
        }
    }

    // Take the first 5-8 resources as "recent"
    const recentResources = resources.slice(0, 8)

    if (recentResources.length === 0) return null

    return (
        <div className="w-full space-y-6">
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <h2 className="text-lg font-mono uppercase tracking-wider text-muted-foreground">
                        Recent_Additions
                    </h2>
                </div>

                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('left')}
                        className="h-8 w-8 rounded-full border-white/10 bg-black/20 hover:bg-white/10"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('right')}
                        className="h-8 w-8 rounded-full border-white/10 bg-black/20 hover:bg-white/10"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {recentResources.map((resource) => (
                    <div
                        key={resource.name}
                        className="min-w-[300px] md:min-w-[350px] h-[400px] snap-center first:pl-2"
                    >
                        <ResourceCard resource={resource} />
                    </div>
                ))}
            </div>
        </div>
    )
}
