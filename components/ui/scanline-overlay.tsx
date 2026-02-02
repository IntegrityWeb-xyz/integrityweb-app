'use client'

import { useEffect, useRef } from 'react'

export function ScanlineOverlay() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resize)
        resize()

        let offset = 0

        const render = () => {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw scanlines
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
            for (let y = 0; y < canvas.height; y += 4) {
                ctx.fillRect(0, y, canvas.width, 2)
            }

            // Moving scanbar
            offset = (offset + 2) % canvas.height
            ctx.fillStyle = 'rgba(6, 182, 212, 0.03)' // Cyan tint
            ctx.fillRect(0, offset, canvas.width, 100)

            // Vignette
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                canvas.height / 3,
                canvas.width / 2,
                canvas.height / 2,
                canvas.height
            )
            gradient.addColorStop(0, 'transparent')
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[100] pointer-events-none opacity-50 mix-blend-overlay"
        />
    )
}
