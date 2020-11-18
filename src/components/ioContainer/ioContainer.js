import React from 'react'
import IO from 'components/io'
import Title from 'components/title'
import { Container } from './ioContainer.css'
import LogoSvg from 'components/logoSvg'

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOContainer = ({ children }) => (
  <IO rootMargin="-50px">
    {({ isVisible, hasBeenVisible }) => (
      <Container isVisible={isVisible} hasBeenVisible={hasBeenVisible}>
        {children}
      </Container>
    )}
  </IO>
)

export default IOContainer
