"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  const spheres = []
  const radius = 1.5
  const height = 8
  const segments = 50

  for (let i = 0; i < segments; i++) {
    const y = (i / segments) * height - height / 2
    const angle1 = (i / segments) * Math.PI * 4
    const angle2 = angle1 + Math.PI

    const x1 = Math.cos(angle1) * radius
    const z1 = Math.sin(angle1) * radius
    const x2 = Math.cos(angle2) * radius
    const z2 = Math.sin(angle2) * radius

    spheres.push(
      <Sphere key={`sphere1-${i}`} position={[x1, y, z1]} args={[0.1, 16, 16]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>,
    )

    spheres.push(
      <Sphere key={`sphere2-${i}`} position={[x2, y, z2]} args={[0.1, 16, 16]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Sphere>,
    )

    if (i % 5 === 0) {
      spheres.push(
        <mesh key={`connector-${i}`} position={[0, y, 0]}>
          <cylinderGeometry args={[0.02, 0.02, radius * 2, 8]} />
          <meshStandardMaterial color="#64748b" />
          <primitive object={new THREE.Euler(0, 0, Math.PI / 2)} attach="rotation" />
        </mesh>,
      )
    }
  }

  return <group ref={groupRef}>{spheres}</group>
}

export function DNAVisualization() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <DNAHelix />
      </Canvas>
    </div>
  )
}
