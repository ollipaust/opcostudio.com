import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Scrollbar from 'react-smooth-scrollbar'

const ViewContainer = styled.main.withConfig({
  displayName: 'AppView',
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  pointer-events: none;

  section#ScrollContent {
    pointer-events: none;
    filter: blur(0);
    transition: filter 300ms ease 750ms;

    &.blur {
      filter: blur(6px);
      transition: filter 300ms ease 450ms !important;
    }

    .scroll-content {
      pointer-events: none;

      div:first-of-type {
        pointer-events: none;
      }
    }
  }
`

const AppView = ({ children }) => {
  return (
    <ViewContainer id="AppView">
      <Scrollbar
        syncCallbacks={true}
        renderByPixels={true}
        alwaysShowTracks={true}
        damping={0.125}
        id="ScrollContent"
      >
        {children}
      </Scrollbar>
    </ViewContainer>
  )
}
AppView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppView
