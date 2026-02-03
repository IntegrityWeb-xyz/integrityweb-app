"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ScrollBackground() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        // Check initial scroll
        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={cn(
                "fixed inset-0 -z-40 transition-all duration-700 pointer-events-none",
                scrolled ? "bg-background/60 backdrop-blur-2xl" : "bg-transparent"
            )}
        />
    )
}
