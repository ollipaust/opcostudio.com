import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import translatorWrapper from 'components/translator/translatorWrapper'
import { motion } from 'framer-motion'
import BodyClassName from 'react-body-classname'

import { IndexLayoutStyles } from 'components/pageLayout/pageLayout.css'
import Hero from 'components/pageLayout/hero'
import Link from 'components/link'
import Title from 'components/title'
import {
  ButtonStyled,
  HeroButtonsContainer,
  Divider,
  Indicator,
  absoluteMotionDiv,
} from 'components/elements'

import { motionStagger, triangle1, ySpring } from 'constants/animations'
import Triangle from 'components/triangles'
import Zoom from 'react-reveal/Zoom'

const HeroButton = styled(Link).withConfig({ displayName: 'HeroButton' })`
  ${ButtonStyled}
`

const Index = () => (
  <React.Fragment>
    <IndexLayoutStyles />
    <BodyClassName className="home" />

    <div className="3dOverlay">
      <Triangle top="30%" left="20%" rotation="360deg" />
    </div>

    <Hero>
      <Title as="h1" size="super">
        <FormattedMessage id="home.intro1" />
      </Title>

      <Divider />

      <Title as="h2" size="medium">
        <FormattedMessage id="home.name" />
      </Title>
      <p>
        <FormattedMessage id="home.job" />
      </p>

      <HeroButtonsContainer>
        <motion.div variants={motionStagger} initial="hidden" animate="show">
          <motion.div variants={ySpring} className="heroBtn1">
            <HeroButton to="/about">
              <Indicator />
              <FormattedMessage id="home.buttonStart" />
            </HeroButton>
          </motion.div>

          <motion.div variants={ySpring} className="heroBtn2">
            <HeroButton to="/about" className="dark">
              <FormattedMessage id="home.buttonDownload" />
            </HeroButton>
          </motion.div>
        </motion.div>
      </HeroButtonsContainer>
    </Hero>
  </React.Fragment>
)

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Index)
