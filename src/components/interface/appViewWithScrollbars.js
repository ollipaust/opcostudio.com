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
`

const AppView = ({ children }) => {
  return (
    <ViewContainer>
      <Scrollbar
        syncCallbacks={true}
        renderByPixels={true}
        alwaysShowTracks={true}
        damping={0.075}
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
