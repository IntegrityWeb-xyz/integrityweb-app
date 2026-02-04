'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function NetworkGlobe() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.02
        }
    })

    return (
        <group>
            {/* Massive wireframe globe encompassing the viewer */}
            <mesh ref={meshRef} scale={45}>
                <icosahedronGeometry args={[1, 4]} />
                <meshBasicMaterial
                    color="#06b6d4"
                    wireframe
                    transparent
                    opacity={0.08}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    )
}

function CivilizationalParticles() {
    const count = 600 // Increased count for "civilization" feel
    const meshRef = useRef<THREE.InstancedMesh>(null)
    const dummy = useMemo(() => new THREE.Object3D(), [])

    // Procedural Orbit Generation
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            // Create distinct orbital belts
            const belt = Math.random()
            let radius, speed, ySpread, orbitType

            if (belt > 0.7) {
                // Outer Geostationary Ring
                radius = 25 + Math.random() * 5
                speed = 0.02 + Math.random() * 0.02
                ySpread = 2
                orbitType = 'ring'
            } else if (belt > 0.3) {
                // Middle Trade Routes (Spiral)
                radius = 15 + Math.random() * 10
                speed = 0.05 + Math.random() * 0.05
                ySpread = 15
                orbitType = 'spiral'
            } else {
                // Inner Core Activity
                radius = 5 + Math.random() * 8
                speed = 0.1 + Math.random() * 0.1
                ySpread = 8
                orbitType = 'chaotic'
            }

            const phase = Math.random() * Math.PI * 2
            const tilt = (Math.random() - 0.5) * Math.PI // Random orbit tilt
            temp.push({ radius, speed, phase, ySpread, tilt, orbitType })
        }
        return temp
    }, [count])

    useFrame((state) => {
        if (!meshRef.current) return

        const time = state.clock.getElapsedTime()

        particles.forEach((p, i) => {
            let x, y, z

            if (p.orbitType === 'ring') {
                // Steady ring rotation
                const angle = p.phase + time * p.speed
                x = Math.cos(angle) * p.radius
                z = Math.sin(angle) * p.radius
                y = Math.sin(time * 0.1 + p.phase) * p.ySpread // Gentle wave
            } else if (p.orbitType === 'spiral') {
                // Helix motion
                const angle = p.phase + time * p.speed
                x = Math.cos(angle) * p.radius
                z = Math.sin(angle) * p.radius
                y = Math.sin(angle * 2) * (p.ySpread * 0.5)
            } else {
                // Chaotic core
                const angle = p.phase + time * p.speed
                x = Math.cos(angle) * p.radius
                y = Math.sin(angle * 1.5) * p.radius
                z = Math.sin(angle * 2.5) * p.radius
            }

            dummy.position.set(x, y, z)

            // Pulse effect (breathing civilization)
            const scale = (Math.sin(time * 2 + i) * 0.3 + 0.8) * 0.3
            dummy.scale.set(scale, scale, scale)

            dummy.updateMatrix()
            meshRef.current!.setMatrixAt(i, dummy.matrix)
        })
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[1, 0]} /> {/* Slightly more complex shape */}
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
        </instancedMesh>
    )
}

export function IntegrityWireframe() {
    return (
        <div className="w-full h-full relative">
            <Canvas
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
                camera={{ position: [0, 0, 30], fov: 60 }}
                performance={{ min: 0.5 }}
            >
                <NetworkGlobe />
                <CivilizationalParticles />

                {/* Subtle background depth */}
                <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />

                <fog attach="fog" args={['#030712', 15, 60]} />
            </Canvas>

            {/* Aesthetic Overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
            radial-gradient(circle at 50% 50%, transparent 0%, rgba(3, 7, 18, 0.5) 100%),
            linear-gradient(to bottom, rgba(3, 7, 18, 0.2), rgba(3, 7, 18, 0.4))
          `
                }}
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
        </div>
    )
}
