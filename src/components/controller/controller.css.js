import React from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

const ControllerOverlayContainer = ({ className, children }) => (
  <Div100vh className={className}>{children}</Div100vh>
)

export const AppControllerWrapper = styled(
  ControllerOverlayContainer
).withConfig({
  displayName: 'AppControllerWrapper',
})`
  position: fixed;
  overflow: hidden;
  z-index: 10;
  width: 100vw;
  background: transparent;
  pointer-events: none;
`

export const Container = styled.header.withConfig({
  displayName: 'AppController',
})`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: calc(100px + 2.5em);
  top: 0;
  left: 0;
  pointer-events: none;
`

export const Content = styled.div.withConfig({
  displayName: 'AppControllerContent',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: auto;
  height: 100%;
  padding: 0 2.5rem;
`
