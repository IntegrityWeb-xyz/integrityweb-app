import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8">
            <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                <AlertCircle className="w-24 h-24 text-red-500 relative z-10 animate-pulse" />
            </div>

            <div className="space-y-4 max-w-md">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-red-500 font-mono">
                    404_ERROR
                </h1>
                <p className="text-muted-foreground text-lg">
                    The requested primitive could not be found in the Integrity Web.
                    It may have been purged or never existed.
                </p>
            </div>

            <div className="p-4 bg-zinc-950/50 border border-red-500/20 rounded-lg font-mono text-sm text-red-400 mb-8 max-w-sm w-full">
                <p>&gt; SEARCH_STATUS: FAILED</p>
                <p>&gt; LOCATING_TARGET: ...</p>
                <p>&gt; ERROR_CODE: NOT_FOUND</p>
            </div>

            <Link href="/">
                <Button variant="outline" className="gap-2 border-red-500/20 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500">
                    <ArrowLeft className="w-4 h-4" />
                    RETURN_TO_NEXUS
                </Button>
            </Link>
        </div>
    )
}
