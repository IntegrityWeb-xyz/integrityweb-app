'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles, Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function NexusCore() {
    const meshRef = useRef<THREE.Group>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= delta * 0.1
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
        }
    })

    return (
        <group ref={meshRef}>
            {/* Inner Glowing Core */}
            <mesh scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.3} />
            </mesh>

            {/* Outer Protective Shell */}
            <mesh scale={3.5}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
            </mesh>
        </group>
    )
}

function GlobalNetwork() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.03 // Slow majestic rotation
        }
    })

    return (
        <mesh ref={meshRef} scale={18}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshBasicMaterial
                color="#1e293b"
                wireframe
                transparent
                opacity={0.1}
            />
        </mesh>
    )
}

function DataStream() {
    const pointsRef = useRef<THREE.Points>(null)
    const count = 500 // Moderate count for good performance

    // Create particles in a spiral pattern
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const sizes = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360)
            const phi = THREE.MathUtils.randFloatSpread(360)

            // Spiral-ish distribution
            const r = 4 + Math.random() * 8

            const x = r * Math.sin(theta) * Math.cos(phi)
            const y = r * Math.sin(theta) * Math.sin(phi)
            const z = r * Math.cos(theta)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            sizes[i] = Math.random() * 0.5
        }

        return { positions, sizes }
    }, [count])

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05
            pointsRef.current.rotation.z += delta * 0.02
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={particles.sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#60a5fa"
                transparent
                opacity={0.6}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    )
}

function GenerativeParticles() {
    const ref = useRef<THREE.Points>(null)
    const count = 3000

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        // Original logic from generative-scene.tsx
        let idx = 0
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI
            const r = 20 + Math.random() * 40 // Scaled up slightly for the larger Nexus scene

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = r * Math.cos(phi)

            positions[idx * 3] = x
            positions[idx * 3 + 1] = y
            positions[idx * 3 + 2] = z
            idx++
        }
        return positions
    }, [])

    useFrame((state) => {
        if (!ref.current) return
        // Matching the original rotation speed
        ref.current.rotation.x += 0.0002
        ref.current.rotation.y += 0.0003
    })

    return (
        <group>
            <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#60a5fa"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
            {/* Added Sparkles back but with cleaner motion */}
            <Sparkles count={500} scale={40} size={1} speed={0.4} opacity={0.2} color="#06b6d4" />
        </group>
    )
}

export function IntegrityNexus() {
    return (
        <div className="w-full h-full relative">
            <Canvas
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                camera={{ position: [0, 0, 15], fov: 50 }}
                performance={{ min: 0.5 }}
            >
                <color attach="background" args={['#000000']} />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <NexusCore />
                </Float>

                <GlobalNetwork />
                <DataStream />

                {/* Orbital Particle System */}
                <GenerativeParticles />

                <fog attach="fog" args={['#000000', 10, 50]} />
            </Canvas>

            {/* Cinematic Overlays */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
            linear-gradient(to bottom, rgba(2, 6, 23, 0.5) 0%, transparent 50%, rgba(2, 6, 23, 0.8) 100%),
            radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.6) 100%)
          `
                }}
            />
        </div>
    )
}
