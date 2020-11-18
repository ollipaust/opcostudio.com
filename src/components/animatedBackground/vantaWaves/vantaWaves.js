import React from 'react'
import WAVES from './vanta.waves.min.js'
import * as THREE from 'three'
import { VantaContainer } from '../animatedBackground.css'
import { motion } from 'framer-motion'

class VantaWaves extends React.Component {
  constructor() {
    super()
    this.vantaElement = React.createRef()
    this.childKey = 0
  }

  componentDidMount() {
    const vantaElement = this.vantaElement.current
    const accentColor = this.props.accentColor
    const vantaShine = this.props.vantaShine

    if (typeof window !== undefined) {
      setTimeout(() => {
        this.effect = window.VANTA.WAVES({
          el: vantaElement,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: accentColor,
          shininess: vantaShine,
          waveHeight: 10.0,
          waveSpeed: 0.5,
          zoom: 1,
        })
      }, 1500)
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
    ++this.childKey
  }

  render() {
    return <VantaContainer ref={this.vantaElement} key={this.childKey} />
  }
}

export default VantaWaves
