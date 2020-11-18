import React from 'react'
import { LoaderContainer, Cell } from './startLoader.css'
import LogoSvg from 'components/logoSvg'
import { motion } from 'framer-motion'
import { fadeIn } from 'constants/animations'
import { light } from 'constants/colors'
import { FormattedMessage } from 'react-intl'

const StartLoader = ({ className }) => {
  return (
    <LoaderContainer className={className}>
      <Cell>
        <LogoSvg
          delay={true}
          speed={750}
          className="animatedLogo"
          strokeWidth="10"
          strokeColor={light}
          fill="none"
        />
      </Cell>
    </LoaderContainer>
  )
}

export default StartLoader
