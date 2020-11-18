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
import { ButtonStyled, Divider, Indicator } from 'components/elements'
import { neutral } from 'constants/colors'
import PageContent from 'components/pageLayout/content'

const HeroButton = styled(Link).withConfig({ displayName: 'HeroButton' })`
  ${ButtonStyled}
`

const MotionButton = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 1.5, duration: 0.5 },
      y: { delay: 1.6, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}

const Index = () => (
  <React.Fragment>
    <IndexLayoutStyles />
    <BodyClassName className="home" />

    {isEdge ? (
      <BrowserNotice>
        <FormattedMessage id="messages.ieNotice" />
      </BrowserNotice>
    ) : null}

    <Hero accentColor={neutral} vantaShine={250}>
      <Title as="h1" size="large">
        <FormattedMessage id="home.intro1" />
        <FormattedMessage id="home.intro2" />
      </Title>

      <Divider />

      <Title as="h2" size="medium">
        <FormattedMessage id="home.name" />
      </Title>

      <p>
        <FormattedMessage id="home.job" />
      </p>

      <motion.div variants={MotionButton} initial="hidden" animate="show">
        <HeroButton to="/about">
          <Indicator />
          <FormattedMessage id="home.button" />
        </HeroButton>
      </motion.div>
    </Hero>
  </React.Fragment>
)

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Index)
