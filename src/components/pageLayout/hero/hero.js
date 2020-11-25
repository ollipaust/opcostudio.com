/* eslint-disable */
import React from 'react'
import { HeroContainer } from './hero.css'
import { HeroContent } from './heroContent'
import HeroOverlay from './overlay'
import Div100vh from 'react-div-100vh'
import Tetrahedrons from 'components/triangles/triangle1'

const Hero = ({ children }) => {
  return (
    <HeroContainer>
      <Div100vh>
        <HeroOverlay />
        <Tetrahedrons />
        <HeroContent>{children}</HeroContent>
      </Div100vh>
    </HeroContainer>
  )
}

export default Hero
