'use client'

import dynamic from 'next/dynamic'

const GenerativeScene = dynamic(() => import('@/components/3d/generative-scene').then(mod => ({ default: mod.GenerativeScene })), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-background" />
})

export default function GenerativeSceneWrapper() {
  return <GenerativeScene />
}
