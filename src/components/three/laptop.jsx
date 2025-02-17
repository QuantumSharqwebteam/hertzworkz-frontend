import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'

function Model({ open, hinge, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mac.glb')

  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
  })
  
  // Events and spring animations
  return (
    <group ref={group} {...props} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={(e) => setHovered(false)} dispose={null}>
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function Laptop() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(0)
  
  // Spring animation for the transition effect (background color change and zoom)
  const props = useSpring({ open: Number(open), scale: open ? 1 : 0.4, opacity: open ? 1 : 0 })
  
  // Scroll handler for zoom effect
  const handleScroll = (event) => {
    const scrollTop = window.scrollY
    setScroll(scrollTop)
    console.log(scrollTop)
    if (scrollTop > 5500) {  // Start transitioning after 100px of scroll
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  // Add event listener to track scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <web.main style={{ background: props.open.to([0, 1], ['#fff', '#d25578']), height: '100vh' }}>
      <web.h1 style={{
        opacity: props.open.to([0, 1], [1, 0]),
        transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`)
      }}>
        Scroll to See More
      </web.h1>
      
      <Canvas dpr={[1, 2]} camera={{ position: [35, 10, 20], fov: 35 }}>
        <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <OrbitControls
            enableZoom={false}
          />
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      </Canvas>
    </web.main>
  )
}
