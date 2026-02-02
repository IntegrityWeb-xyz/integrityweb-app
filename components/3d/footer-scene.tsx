"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function IntegrityCube({ hovered }: { hovered: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null)
    const coreRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Rotating Outer Cube
            meshRef.current.rotation.x += delta * (hovered ? 0.2 : 0.05)
            meshRef.current.rotation.y += delta * (hovered ? 0.25 : 0.08)
        }
        if (coreRef.current) {
            // Rotating Inner Core (Counter-rotation)
            coreRef.current.rotation.x -= delta * (hovered ? 0.4 : 0.1)
            coreRef.current.rotation.y -= delta * (hovered ? 0.5 : 0.15)

            // Gentle Pulse
            const scale = 0.6 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02
            coreRef.current.scale.set(scale, scale, scale)
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <group>
                {/* Outer Wireframe Cube */}
                <mesh ref={meshRef}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial
                        color={hovered ? "#06b6d4" : "#3b82f6"}
                        wireframe
                        transparent
                        opacity={0.1}
                        emissive={hovered ? "#06b6d4" : "#1d4ed8"}
                        emissiveIntensity={hovered ? 0.3 : 0.1}
                    />
                </mesh>

                {/* Inner Crystalline Core (Octahedron) */}
                <mesh ref={coreRef}>
                    <octahedronGeometry args={[0.5, 0]} />
                    <meshPhysicalMaterial
                        color={hovered ? "#06b6d4" : "#ffffff"}
                        emissive={hovered ? "#06b6d4" : "#3b82f6"}
                        emissiveIntensity={hovered ? 0.8 : 0.4}
                        metalness={0.9}
                        roughness={0.1}
                        transparent
                        opacity={0.8}
                        wireframe={false}
                    />
                </mesh>

                {/* Inner Core Wireframe overlay for tech feel */}
                <mesh ref={coreRef} scale={[1.05, 1.05, 1.05]}>
                    <octahedronGeometry args={[0.5, 0]} />
                    <meshBasicMaterial
                        color={hovered ? "#ffffff" : "#3b82f6"}
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </group>
        </Float>
    )
}

export function FooterScene({ hovered }: { hovered: boolean }) {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

                <IntegrityCube hovered={hovered} />

            </Canvas>
            {/* No background or fog - relies on global GenerativeScene */}
        </div>
    )
}
