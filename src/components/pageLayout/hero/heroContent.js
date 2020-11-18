import React from 'react'
import styled from 'styled-components'
import { HeroTextContainer, HeroTextContent } from './hero.css'

export const HeroContent = ({ children }) => {
  return <HeroTextContainer>{children}</HeroTextContainer>
}
