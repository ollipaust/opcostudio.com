import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import BackgroundWaves from 'components/animatedBackground/waves'
import { Container, Content, Overlay } from './heading.css'
import { light } from 'constants/colors'

const Slider = ({ className, children }) => (
  <motion.div
    className={className}
    variants={slideUp}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
)

const StyledSlider = styled(Slider).withConfig({
  displayName: 'OverlaySlide',
})`
  position: absolute;
  top: -1px;
  z-index: 1000;
  width: 100%;
  height: calc(100% + 1px);
  background: ${light};
  will-change: transform;
`

const slideUp = {
  hidden: { y: '0%' },
  show: {
    y: '-100%',
    transition: {
      y: { delay: 1.5, duration: 0.5 },
      ease: [0.755, 0.05, 0.855, 0.06],
    },
  },
}

const PageHeading = ({ children, accentColor, shineIntensity }) => {
  return (
    <Container>
      <Content>
        <BackgroundWaves
          accentColor={accentColor}
          shineIntensity={shineIntensity}
        />
        <StyledSlider />
        {children}
      </Content>
    </Container>
  )
}

export default PageHeading
