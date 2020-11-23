import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { accent, neutral } from 'constants/colors'
import { useSpring, a } from 'react-spring/three'

const RotatingMesh = ({ position, args }) => {
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  const [expand, setExpand] = useState(false)

  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  })

  return (
    <a.mesh
      ref={mesh}
      position={position}
      scale={props.scale}
      onHover={() => setExpand(!expand)}
      onPointerOver={e => setExpand(true)}
      onPointerOut={e => setExpand(false)}
    >
      <tetrahedronBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={accent} />
    </a.mesh>
  )
}

function Triangle1() {
  return (
    <>
      <Canvas
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 30 }}
        className="canvors"
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <RotatingMesh args={[2, 0]} position={[-2, 0, -10]} />
        <RotatingMesh args={[1, 0]} position={[-2, 0, -5]} />
        <RotatingMesh position={[2, 0, 2]} />
      </Canvas>
    </>
  )
}

export default Triangle1
