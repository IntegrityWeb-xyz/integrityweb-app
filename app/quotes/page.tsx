import { TerminalPageHeader } from "@/components/ui/terminal-page-header"
import { Navigation } from "@/components/navigation"
import { getAllQuotes } from "@/lib/quotes/data"
import { QuoteCard } from "@/components/quotes/quote-card"

export default function QuotesPage() {
    const quotes = getAllQuotes();

    return (
        <div className="min-h-screen pb-20 pt-24 text-foreground bg-transparent selection:bg-cyan-500/20">
            <Navigation />

            <div className="container mx-auto px-4 max-w-7xl">
                <TerminalPageHeader
                    title="Community Signals"
                    subtitle="Transmissions from the architects of the digital civilization."
                    command="./listen_signals"
                    status="RECEIVING"
                    statusColor="cyan"
                />

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {quotes.map((quote, i) => (
                        <div key={i} className="break-inside-avoid">
                            <QuoteCard quote={quote} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
