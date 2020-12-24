import React from 'react'
import { HeroContainer } from './hero.css'
import { HeroContent } from './heroContent'
import HeroOverlay from './overlay'
import Tetrahedrons from 'components/tetras'

import Div100vh from 'react-div-100vh'

const Hero = ({ children }) => {
  return (
    <HeroContainer>
      <Div100vh>
        <HeroOverlay />
        <HeroContent>{children}</HeroContent>
        <Tetrahedrons />
      </Div100vh>
    </HeroContainer>
  )
}

export default Hero
