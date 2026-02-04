'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload, Html } from '@react-three/drei'
import * as THREE from 'three'

// Generate random points in a sphere that create a mesh-like structure
function GenerativeParticles() {
  const ref = useRef<THREE.Points>(null)
  const { size } = useThree()

  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3)

    // Create procedural particles that form patterns
    let idx = 0
    for (let i = 0; i < 1000; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 10 + Math.random() * 20

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
    ref.current.rotation.x += 0.0002
    ref.current.rotation.y += 0.0003
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// Animated geometric shapes
function AnimatedCube() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.008
    ref.current.position.z = Math.sin(Date.now() * 0.001) * 2
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        emissive="#06b6d4"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

// Interconnected blockchain blocks representing integrity web
function BlockChain() {
  const ref = useRef<THREE.Group>(null)
  const blockRefs = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.1
    ref.current.rotation.y = state.clock.elapsedTime * 0.15

    // Animate individual blocks in a wave pattern
    blockRefs.current.forEach((block, idx) => {
      if (block) {
        block.position.z = Math.sin(state.clock.elapsedTime * 0.5 + idx) * 1.5
        block.rotation.x += 0.002
        block.rotation.y += 0.003
      }
    })
  })

  const blocks = [
    { pos: [-4, 0, 0], color: '#60a5fa' },
    { pos: [0, 0, 0], color: '#06b6d4' },
    { pos: [4, 0, 0], color: '#3b82f6' },
    { pos: [-2, 3, 0], color: '#0ea5e9' },
    { pos: [2, 3, 0], color: '#22d3ee' },
  ]

  return (
    <group ref={ref} position={[0, 0, -12]}>
      {blocks.map((block, idx) => (
        <mesh
          key={idx}
          position={block.pos as [number, number, number]}
          ref={(el) => {
            if (el) blockRefs.current[idx] = el
          }}
          scale={1.2}
        >
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial
            color={block.color}
            wireframe
            emissive={block.color}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      {/* Connection lines between blocks */}

    </group>
  )
}

export function GenerativeScene() {
  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 40], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />

        <GenerativeParticles />
        <AnimatedCube />
        <BlockChain />

        <Preload all />
      </Canvas>

    </div>
  )
}
