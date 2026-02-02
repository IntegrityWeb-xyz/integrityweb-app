'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

function BackgroundParticles() {
    const ref = useRef<THREE.Points>(null)

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.05
            ref.current.rotation.y -= delta * 0.075
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points />
        </group>
    )
}

function Points() {
    const ref = useRef<THREE.Points>(null)

    // Custom geometry or simple stars
    return (
        <Stars
            radius={50}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
        />
    )
}

function FloatingGrid() {
    return (
        <group position={[0, -10, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
            <gridHelper args={[100, 50, 0x3b82f6, 0x06b6d4]} position={[0, 0, 0]} />
        </group>
    )
}

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }} gl={{ alpha: true }}>
                <fog attach="fog" args={['#0f0f0f', 5, 40]} />
                <ambientLight intensity={0.5} />
                <BackgroundParticles />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    {/* Subtle floating elements could go here if needed */}
                </Float>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/40 to-background/90" />
        </div>
    )
}
