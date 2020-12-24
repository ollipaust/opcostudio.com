import React from 'react'
import IO from 'components/io'
import { IoAboutIntroContainer } from './ioContainer.css'

const IoAboutIntro = ({ children, className }) => (
  <IO rootMargin="-50%">
    {({ isVisible, hasBeenVisible }) => (
      <IoAboutIntroContainer
        isVisible={isVisible}
        hasBeenVisible={hasBeenVisible}
        className={className}
      >
        {children}
      </IoAboutIntroContainer>
    )}
  </IO>
)

export default IoAboutIntro
