'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8">
            <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full" />
                <AlertTriangle className="w-24 h-24 text-amber-500 relative z-10" />
            </div>

            <div className="space-y-4 max-w-md">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-amber-500 font-mono">
                    SYSTEM_FAILURE
                </h1>
                <p className="text-muted-foreground text-lg">
                    An unexpected error occurred within the integrity verification protocol.
                </p>
            </div>

            <div className="p-4 bg-zinc-950/50 border border-amber-500/20 rounded-lg font-mono text-sm text-amber-400 mb-8 max-w-sm w-full text-left overflow-hidden">
                <p>&gt; ERROR_TRACE_INITIATED</p>
                <p className="truncate">&gt; MSG: {error.message || 'Unknown Protocol Error'}</p>
                {error.digest && <p>&gt; DIGEST: {error.digest}</p>}
            </div>

            <div className="flex gap-4">
                <Button
                    onClick={() => reset()}
                    className="gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20 hover:text-amber-400"
                >
                    <RefreshCw className="w-4 h-4" />
                    REBOOT_SEQUENCE
                </Button>
            </div>
        </div>
    )
}
