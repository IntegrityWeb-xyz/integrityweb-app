'use client'

import dynamic from 'next/dynamic'

const IntegrityNexus = dynamic(() => import('./integrity-nexus').then(mod => mod.IntegrityNexus), {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-50 bg-black" />
})

export function BackgroundCanvas() {
    return (
        <div className="fixed inset-0 -z-50">
            <IntegrityNexus />
        </div>
    )
}
