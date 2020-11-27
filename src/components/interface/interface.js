import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import BodyClassName from 'react-body-classname'
import hasTouch from 'has-touch'

import BrowserNotice from 'components/browserNotice'
import { FormattedMessage } from 'react-intl'

import AppView from './appViewWithScrollbars'
import Controller from 'components/controller'
import Translator from './translator'
import useScreenOrientation from 'helpers/screenOrientation'

import { GlobalStyles } from 'global.css'
import { TransitionStyles } from './transitions/transitions.css'

import { TransitionsController, TransitionsView } from './transitions'
import Div100vh from 'react-div-100vh'
import BackgroundWaves from 'components/animatedBackground/waves'
import StartLoader from 'components/startLoader'

import { neutral } from 'constants/colors'
import { isIE } from 'react-device-detect'
import { PageLayoutStyles } from 'components/pageLayout/pageLayout.css'

const Interface = ({ children, location }) => {
  const [startLoading, setStartLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setStartLoading(false), 1000)
  }, [])

  const screenOrientation = useScreenOrientation()

  return (
    <Div100vh>
      <GlobalStyles />
      <PageLayoutStyles />
      <TransitionStyles />

      {isIE ? (
        <BrowserNotice>
          <FormattedMessage id="messages.ieNotice" />
        </BrowserNotice>
      ) : null}

      <BodyClassName className={hasTouch ? 'has-touch' : 'has-no-touch'} />

      <StartLoader
        className={startLoading === true ? 'loading' : 'loading-done'}
      />

      <BackgroundWaves accentColor={neutral} shineIntensity={250} />

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

export default Translator(customProps)(Interface)
