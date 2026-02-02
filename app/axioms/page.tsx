import { Metadata } from "next"
import { AxiomsIntegrityWeb } from "@/components/framework/axioms-integrity-web"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: 'The 10 Axioms of the Integrity Web',
    description: 'A Fine Art Declaration of Digital Freedom. Code is Math. Proof Replaces Trust. Privacy is Sovereignty.',
    openGraph: {
        title: 'Axioms of the Integrity Web',
        description: 'The constitution of the verifiable web. 10 principles defining the future of sovereign intelligence.',
        images: ['/iwxyz-card.jpg'],
    }
}

export default function AxiomsPage() {
    return (
        <div className="min-h-screen bg-transparent flex flex-col">
            <Navigation />
            <main className="flex-grow pt-24 pb-12">
                <AxiomsIntegrityWeb />
            </main>
            <Footer />
        </div>
    )
}
