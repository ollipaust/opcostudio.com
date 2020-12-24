import React from 'react'
import IO from 'components/io'
import { IoAboutTextContainer } from './ioContainer.css'

const IoAboutRaster = ({ children, className }) => (
  <IO rootMargin="-50%">
    {({ isVisible, hasBeenVisible }) => (
      <IoAboutTextContainer
        isVisible={isVisible}
        hasBeenVisible={hasBeenVisible}
        className={className}
      >
        {children}
      </IoAboutTextContainer>
    )}
  </IO>
)

export default IoAboutRaster
