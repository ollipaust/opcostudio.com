import React from 'react'
import IO from 'components/io'
import { Container } from './ioContainer.css'

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOContainer = ({ children, className }) => (
  <IO rootMargin="-50%">
    {({ isVisible, hasBeenVisible }) => (
      <Container
        isVisible={isVisible}
        hasBeenVisible={hasBeenVisible}
        className={className}
      >
        {children}
      </Container>
    )}
  </IO>
)

export default IOContainer
