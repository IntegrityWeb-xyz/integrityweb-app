import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sovereign Agents | IntegrityWeb',
    description: 'Build validatable, autonomous AI agents that own their identity and wallet. The Integrity Web provides the cryptographic primitives for sovereign intelligence.',
    openGraph: {
        title: 'Sovereign Agents | IntegrityWeb',
        description: 'Build validatable, autonomous AI agents on the Integrity Web.',
    }
}

export default function AgenticLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
