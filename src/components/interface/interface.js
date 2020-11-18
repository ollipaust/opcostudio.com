import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import BodyClassName from 'react-body-classname'
import hasTouch from 'has-touch'
import { isIE, isEdge } from 'react-device-detect'

import BrowserNotice from 'components/browserNotice'
import { FormattedMessage } from 'react-intl'

import AppView from './appViewWithScrollbars'
import Controller from 'components/controller'
import translatorWrapper from 'components/translator/translatorWrapper'
import useScreenOrientation from './screenOrientation'

import { GlobalStyles } from 'global.css'
import { ScrollbarStyles, UnsortedStyles } from './interface.css'
import { TransitionStyles } from './transitions/transitions.css'

import { TransitionsController, TransitionsView } from './transitions'
import Div100vh from 'react-div-100vh'
import VantaWaves from 'components/animatedBackground/vantaWaves'
import StartLoader from 'components/startLoader'
import { motion } from 'framer-motion'

const Interface = ({ children, location }) => {
  const [startLoading, setStartLoading] = useState(true)

  useLayoutEffect(() => {
    setTimeout(() => setStartLoading(false), 500)
  }, [])

  const screenOrientation = useScreenOrientation()

  const slide = {
    show: { y: 0 },
    hide: {
      y: '-100%',
      transition: {
        y: {
          delay: 1.9,
          duration: 0.4,
          type: 'spring',
          damping: 100,
          stiffness: 100,
        },
      },
    },
  }

  return (
    <Div100vh>
      <GlobalStyles />
      <ScrollbarStyles />
      <UnsortedStyles />
      <TransitionStyles />

      {(process.env.NODE_ENV === 'development') ? null : <StartLoader
      className={startLoading === true ? 'loading' : 'loading-done'}
    />
    }

      <VantaWaves accentColor="#99959C" vantaShine="250" />

      {hasTouch ? (
        <BodyClassName className="has-touch page" />
      ) : (
        <BodyClassName className="has-no-touch" />
      )}

      <TransitionsController location={location}>
        <Controller />
      </TransitionsController>

      <TransitionsView location={location}>
        <AppView>
          {screenOrientation === 'landscape-primary' && hasTouch ? (
            <BrowserNotice>
              <FormattedMessage id="messages.rotate" />
            </BrowserNotice>
          ) : null}

          {children}
        </AppView>
      </TransitionsView>
    </Div100vh>
  )
}

const customProps = {
  localeKey: 'interfaceComponent',
}

Interface.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default translatorWrapper(customProps)(Interface)
