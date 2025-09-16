"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 2000; i++) {
      temp.push((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.6} />
    </points>
  )
}

function ParticleFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/20 dark:from-blue-950/10 dark:via-purple-950/5 dark:to-pink-950/10" />
  )
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={<ParticleFallback />}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
      </Suspense>
    </div>
  )
}
