import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import hoverEffect from 'hover-effect'
import { CanvasWrapper, CanvasContainer } from './portrait.css'
import Img1 from 'images/olli_lines.jpg'
import Img2 from 'images/olli_photo.jpg'
import splash from 'images/olli_splash.jpg'

const PortraitContent = () => {
  const container = useRef()

  useEffect(() => {
    setTimeout(() => {
      new hoverEffect({
        parent: container.current,
        intensity: 0.1,
        speed: 2,
        speedIn: 3,
        speedOut: 3,
        imagesRatio: 1593 / 2389,
        image1: Img1,
        image2: Img2,
        displacementImage: splash,
      })
    }, 0)
  }, [container])

  return (
    <CanvasWrapper>
      <CanvasContainer ref={container} />
    </CanvasWrapper>
  )
}

export default PortraitContent
