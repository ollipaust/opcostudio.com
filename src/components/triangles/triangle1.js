import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { accent, accentThree, accentBlue } from 'constants/colors'
import { useSpring, a } from 'react-spring/three'

const RotatingMesh = ({ position, args, rotationSpeed, color }) => {
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
    scale: expand ? [1, 1, 1] : [2, 2, 2],
    opacity: reveal ? 1 : 0,

    from: { opacity: 0 },
  })

  return (
    <a.mesh
      ref={mesh}
      position={position}
      scale={props.scale}
      onLoad={useEffect(() => {
        setTimeout(() => setExpand(true), 3750)
      }, [])}
      onPointerOver={() => setExpand(false)}
      onPointerOut={() => setExpand(true)}
    >
      <tetrahedronBufferGeometry attach="geometry" args={args} />
      <a.meshPhongMaterial
        attach="material"
        color={color}
        opacity={props.opacity}
        transparent={true}
        shininess={25}
        wireframe={true}
      />
    </a.mesh>
  )
}

function Tetrahedrons() {
  return (
    <Canvas
      colorManagement
      camera={{ position: [-5, 2, 10], fov: 30 }}
      className="canvors"
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={2.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} decay={0.9} />
      <pointLight position={[0, -10, 0]} intensity={1} decay={0.9} />

      <RotatingMesh
        args={[0.65, 0]}
        position={[-3.05, 0.5, 0]}
        rotationSpeed={0.0099}
        color={accentThree}
      />
      <RotatingMesh
        args={[0.65, 0]}
        position={[4, 1.15, 0]}
        rotationSpeed={0.005}
        color={accentBlue}
      />
      <RotatingMesh
        args={[0.3, 0]}
        position={[1, -0.85, -5]}
        rotationSpeed={0.0075}
        color={accentThree}
      />
      <RotatingMesh
        args={[0.35, 0]}
        position={[-1, -1, 2]}
        rotationSpeed={0.015}
        color={accent}
      />
    </Canvas>
  )
}

export default Tetrahedrons
