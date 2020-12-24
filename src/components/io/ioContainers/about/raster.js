import React from 'react'
import IO from 'components/io'
import { IoRasterContainer } from './ioContainer.css'

const IoAboutRaster = ({ children, className }) => (
  <IO rootMargin="-50%">
    {({ isVisible, hasBeenVisible }) => (
      <IoRasterContainer
        isVisible={isVisible}
        hasBeenVisible={hasBeenVisible}
        className={className}
      >
        {children}
      </IoRasterContainer>
    )}
  </IO>
)

export default IoAboutRaster
