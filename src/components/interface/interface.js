import React from 'react'
import PropTypes from 'prop-types'

import Head from 'components/head'

import AppView from './appViewWithScrollbars'
import Controller from 'components/controller/controller'

import { GlobalStyles } from 'global.css'
import { TransitionStyles } from './transitions/transitions.css'

import { TransitionsController, TransitionsView } from './transitions'
import Div100vh from 'react-div-100vh'
import BackgroundWaves from 'components/animatedBackground'
import StartLoader from 'components/startLoader'
import LandscapeNotice from './landscapeNotice'

import { neutral } from 'constants/colors'

const Interface = ({ children, location }) => {
  return (
    <Div100vh>
      <GlobalStyles />
      <TransitionStyles />

      <LandscapeNotice />

      <Head />

      <StartLoader />

      <BackgroundWaves accentColor={neutral} shineIntensity={250} />

      <TransitionsController location={location}>
        <Controller />
      </TransitionsController>

      <TransitionsView location={location}>
        <AppView>{children}</AppView>
      </TransitionsView>
    </Div100vh>
  )
}

Interface.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Interface
