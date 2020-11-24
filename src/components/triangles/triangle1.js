import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { accent, accentThree, dark50 } from 'constants/colors'
import { useSpring, a } from 'react-spring/three'

const RotatingMesh = ({ position, args, rotationSpeed }) => {
  const mesh = useRef(null)
  useFrame(
    () =>
      (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += rotationSpeed)
  )

  const [expand, setExpand] = useState(false)
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    setTimeout(() => setReveal(true), 3500)
  }, [])

  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
    opacity: reveal ? 1 : 0,
    from: { opacity: 0 },
  })

  return (
    <a.mesh
      ref={mesh}
      position={position}
      scale={props.scale}
      onHover={() => setExpand(!expand)}
      onPointerOver={() => setExpand(true)}
      onPointerOut={() => setExpand(false)}
    >
      <tetrahedronBufferGeometry attach="geometry" args={args} />
      <a.meshLambertMaterial
        attach="material"
        color={accentThree}
        opacity={props.opacity}
        transparent={true}
      />
    </a.mesh>
  )
}

function Tetrahedron() {
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

        <RotatingMesh
          args={[0.65, 0]}
          position={[-3, 0.95, 0]}
          rotationSpeed={0.0099}
        />
        <RotatingMesh
          args={[0.65, 0]}
          position={[4, 1.15, 0]}
          rotationSpeed={0.005}
        />
        <RotatingMesh
          args={[0.4, 0]}
          position={[1, -1.25, -5]}
          rotationSpeed={0.0075}
        />
        <RotatingMesh
          args={[0.35, 0]}
          position={[-0.85, -1, 2]}
          rotationSpeed={0.015}
        />
      </Canvas>
    </>
  )
}

export default Tetrahedron
