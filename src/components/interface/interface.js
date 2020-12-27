import React from 'react'
import PropTypes from 'prop-types'

import Head from 'components/head'
import BodyClassName from 'react-body-classname'
import hasTouch from 'has-touch'

import BrowserNotice from 'components/browserNotice'

import AppView from './appViewWithScrollbars'
import Controller from 'components/controller'
import useScreenOrientation from 'helpers/screenOrientation'

import { GlobalStyles } from 'global.css'
import { TransitionStyles } from './transitions/transitions.css'

import { TransitionsController, TransitionsView } from './transitions'
import Div100vh from 'react-div-100vh'
import StartLoader from 'components/startLoader'

import { isIE } from 'react-device-detect'
import { PageLayoutStyles } from 'components/pageLayout/pageLayout.css'

const Interface = ({ children, location }) => {
  const screenOrientation = useScreenOrientation()

  return (
    <Div100vh>
      <GlobalStyles />
      <PageLayoutStyles />
      <TransitionStyles />

      {isIE ? (
        <BrowserNotice>
          <span>iwjefiwje</span>
        </BrowserNotice>
      ) : null}

      <Head />
      <BodyClassName className={hasTouch ? 'has-touch' : 'has-no-touch'} />

      <StartLoader />

      <TransitionsController location={location}>
        <Controller />
      </TransitionsController>

      <TransitionsView location={location}>
        <AppView>
          {screenOrientation === 'landscape-primary' && hasTouch ? (
            <BrowserNotice>
              <span>iwjefiwje</span>
            </BrowserNotice>
          ) : null}

          {children}
        </AppView>
      </TransitionsView>
    </Div100vh>
  )
}

Interface.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Interface
