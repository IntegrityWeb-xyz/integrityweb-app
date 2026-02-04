'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

// Custom Shader for the Infinite Grid
// Efficiently renders a grid that moves towards the camera
const gridVertexShader = `
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const gridFragmentShader = `
varying vec2 vUv;
varying vec3 vPos;
uniform float uTime;
uniform vec3 uColor;

void main() {
  // Create a moving grid effect
  float speed = 0.5;
  float scale = 20.0;
  
  // Calculate grid lines
  // We offset y by uTime to make it move "forward" (or backward depending on perspective)
  float y = vUv.y * scale - uTime * speed;
  float x = vUv.x * scale;
  
  // Grid line width
  float width = 0.05;
  
  // Create grid pattern using modulo
  float gridX = step(1.0 - width, fract(x));
  float gridY = step(1.0 - width, fract(y));
  
  // Combine axes
  float grid = max(gridX, gridY);
  
  // Fade out towards the horizon (top of the plane UV)
  float alpha = grid * (1.0 - vUv.y); 
  // Also fade out at the very bottom to avoid hard clip
  alpha *= smoothstep(0.0, 0.1, vUv.y);
  
  gl_FragColor = vec4(uColor, alpha * 0.4);
}
`

function InfiniteGrid() {
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta
        }
    })

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#06b6d4') }
    }), [])

    return (
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100, 1, 1]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={gridVertexShader}
                fragmentShader={gridFragmentShader}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

function Monoliths() {
    const count = 100
    const meshRef = useRef<THREE.InstancedMesh>(null)
    const dummy = useMemo(() => new THREE.Object3D(), [])

    const items = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            // Place monoliths scattered in the distance
            const x = (Math.random() - 0.5) * 80
            const z = -Math.random() * 100 // Start far away
            const scale = 1 + Math.random() * 4 // Tall structures
            const speed = 5 + Math.random() * 5 // Moving speed
            temp.push({ x, z, scale, speed })
        }
        return temp
    }, [])

    useFrame((state, delta) => {
        if (!meshRef.current) return

        items.forEach((item, i) => {
            // Move Z forward (towards camera)
            item.z += item.speed * delta

            // Reset if passed camera
            if (item.z > 20) {
                item.z = -100
                item.x = (Math.random() - 0.5) * 80
            }

            dummy.position.set(item.x, 0, item.z)
            dummy.scale.set(1, item.scale, 1)
            dummy.updateMatrix()
            meshRef.current!.setMatrixAt(i, dummy.matrix)
        })
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <boxGeometry args={[1, 2, 1]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} wireframe />
        </instancedMesh>
    )
}

export function IntegrityHorizon() {
    return (
        <div className="w-full h-full relative">
            <Canvas
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                camera={{ position: [0, 2, 10], fov: 60 }}
                performance={{ min: 0.5 }}
            >
                <color attach="background" args={['#000000']} />

                <InfiniteGrid />
                <Monoliths />

                {/* Subtle fog to hide the "spawn" point of monoliths and grid end */}
                <fog attach="fog" args={['#000000', 10, 60]} />

                {/* Stars moving slowly in background */}
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

            </Canvas>

            {/* Aesthetic Overlays */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
            linear-gradient(to bottom, rgba(3, 7, 18, 0.8) 0%, transparent 40%, rgba(3, 7, 18, 0.6) 100%)
          `
                }}
            />
        </div>
    )
}
