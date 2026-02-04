"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { EventItem } from "@/lib/events/types"

interface EventsCarouselProps {
    initialEvents: EventItem[];
}

export function EventsCarousel({ initialEvents }: EventsCarouselProps) {
    return (
        <div className="w-full py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-xl font-bold uppercase tracking-wider">
                    <span className="text-primary mr-2">///</span>
                    Upcoming Events
                </h2>
                <Link href="/events">
                    <Button variant="outline" size="sm" className="font-mono text-xs hidden md:flex border-primary/20 hover:border-primary/50 text-muted-foreground hover:text-primary">
                        VIEW_FULL_CALENDAR
                        <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                </Link>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {initialEvents.map((event, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Link href={`/events/${event.slug}`}>
                                    <Card className="bg-slate-950/40 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all group overflow-hidden h-full">
                                        <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-muted-foreground group-hover:text-primary group-hover:border-primary/30">
                                                {event.type}
                                            </span>
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-4 pt-2">
                                                <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                                    {event.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                                                    {event.description}
                                                </p>
                                            </div>

                                            <div className="space-y-2 pt-4 border-t border-white/5">
                                                <div className="flex items-center text-xs text-muted-foreground font-mono">
                                                    <Calendar className="mr-2 h-3 w-3 text-primary/70" />
                                                    {event.date}
                                                </div>
                                                <div className="flex items-center text-xs text-muted-foreground font-mono">
                                                    <MapPin className="mr-2 h-3 w-3 text-primary/70" />
                                                    {event.location}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4 pr-1">
                    <CarouselPrevious className="static translate-y-0 text-muted-foreground hover:text-white border-white/10 hover:bg-white/5" />
                    <CarouselNext className="static translate-y-0 text-muted-foreground hover:text-white border-white/10 hover:bg-white/5" />
                </div>
            </Carousel>

            <div className="md:hidden mt-6 text-center">
                <Link href="/events">
                    <Button variant="outline" className="w-full font-mono text-xs border-primary/20">
                        VIEW_FULL_CALENDAR
                    </Button>
                </Link>
            </div>
        </div>
    )
}
