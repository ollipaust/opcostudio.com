import React, { Component } from 'react'
import '../../../static/js/waves.min.js'
import * as THREE from 'three'
import { Container } from './animatedBackground.css'

class BackgroundWaves extends Component {
  constructor() {
    super()
    this.wavesElement = React.createRef()
  }

  componentDidMount() {
    const wavesElement = this.wavesElement.current
    const accentColor = this.props.accentColor
    const shineIntensity = this.props.shineIntensity

    if (typeof window !== undefined) {
      this.effect = window.VANTA.WAVES({
        el: wavesElement,
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
      })
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }

  render() {
    return <Container ref={this.wavesElement} />
  }
}

export default BackgroundWaves
