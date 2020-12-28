import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'
import { Container } from './animatedBackground.css'

const BackgroundWaves = ({ accentColor, shineIntensity }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setTimeout(() => 
      setVantaEffect(WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 300.0,
        minWidth: 300.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: accentColor,
        shininess: shineIntensity,
        waveHeight: 10.0,
        waveSpeed: 0.5,
        zoom: 1,
      }))
      , 1500)
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <Container ref={vantaRef} />
}

export default BackgroundWaves
