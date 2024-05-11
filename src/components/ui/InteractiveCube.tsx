/* eslint-disable react/no-unknown-property */
'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const ModelComponent: React.FC = () => {
  const { scene } = useGLTF('/microscope.glb')
  const ref = useRef<THREE.Object3D>()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return <primitive object={scene} ref={ref} scale={1.5} />
}

const InteractiveModel: React.FC = () => {
  return (
    <Canvas style={{ height: '600px', width: '100%' }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={0.1}
        intensity={1}
      />
      <directionalLight
        position={[-8, 20, 8]}
        intensity={0.5}
      />
      <ModelComponent />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default InteractiveModel
