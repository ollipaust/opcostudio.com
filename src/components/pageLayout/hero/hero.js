/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { HeroContainer } from './hero.css'
import { HeroContent } from './heroContent'
import HeroOverlay from './overlay'
import VantaWaves from 'components/animatedBackground/vantaWaves'
import Div100vh from 'react-div-100vh'
import Triangle1 from 'components/triangles/triangle1'

const Hero = ({ children }) => {
  return (
    <HeroContainer>
      <Div100vh>
        <HeroOverlay />
        <Triangle1 />
        <HeroContent>{children}</HeroContent>
      </Div100vh>
    </HeroContainer>
  )
}

export default Hero
