"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Text3D, Center } from "@react-three/drei"
import type * as THREE from "three"

function InteractiveCube({
  position,
  color,
  text,
}: { position: [number, number, number]; color: string; text: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(hovered ? 1.2 : clicked ? 0.9 : 1)
    }
  })

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[1, 1, 1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <meshStandardMaterial color={hovered ? "#ff6b6b" : color} />
      </Box>
      <Center position={[0, -1.5, 0]}>
        <Text3D font="/fonts/Inter_Bold.json" size={0.2} height={0.05} curveSegments={12}>
          {text}
          <meshStandardMaterial color={color} />
        </Text3D>
      </Center>
    </group>
  )
}

export function SkillsCubes() {
  const skills = [
    { name: "React", color: "#61dafb", position: [-2, 0, 0] as [number, number, number] },
    { name: "Next.js", color: "#000000", position: [0, 0, 0] as [number, number, number] },
    { name: "Node.js", color: "#339933", position: [2, 0, 0] as [number, number, number] },
    { name: "TypeScript", color: "#3178c6", position: [-1, -2, 0] as [number, number, number] },
    { name: "AI", color: "#ff6b6b", position: [1, -2, 0] as [number, number, number] },
  ]

  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {skills.map((skill, index) => (
          <InteractiveCube key={index} position={skill.position} color={skill.color} text={skill.name} />
        ))}
      </Canvas>
    </div>
  )
}
