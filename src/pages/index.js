import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import translatorWrapper from 'components/translator/translatorWrapper'
import { motion } from 'framer-motion'

import Head from 'components/head'
import BodyClassName from 'react-body-classname'
import { isIE, isEdge } from 'react-device-detect'

import { IndexLayoutStyles } from 'components/pageLayout/pageLayout.css'

import Hero from 'components/pageLayout/hero'
import Link from 'components/link'
import Title from 'components/title'
import BrowserNotice from 'components/browserNotice'
import {
  ButtonStyled,
  HeroButtonsContainer,
  Divider,
  Indicator,
} from 'components/elements'
import { slideFade2s, slideFade3s } from 'constants/animations'

const HeroButton = styled(Link).withConfig({ displayName: 'HeroButton' })`
  ${ButtonStyled}
`

const Index = () => (
  <React.Fragment>
    <IndexLayoutStyles />
    <BodyClassName className="home" />

    {isEdge ? (
      <BrowserNotice>
        <FormattedMessage id="messages.ieNotice" />
      </BrowserNotice>
    ) : null}

    <Hero>
      <Title as="h1" size="super" className="HomeHeading">
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
        <motion.div
          variants={slideFade2s}
          initial="hidden"
          animate="show"
          className="heroBtn1"
        >
          <HeroButton to="/about">
            <Indicator />
            <FormattedMessage id="home.buttonStart" />
          </HeroButton>
        </motion.div>

        <motion.div
          variants={slideFade3s}
          initial="hidden"
          animate="show"
          className="heroBtn2"
        >
          <HeroButton to="/about" className="dark">
            <FormattedMessage id="home.buttonDownload" />
          </HeroButton>
        </motion.div>
      </HeroButtonsContainer>
    </Hero>
  </React.Fragment>
)

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Index)
