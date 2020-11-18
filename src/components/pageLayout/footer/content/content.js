import React from 'react'
import { Container, ContentText } from './content.css'
import Socials from 'components/socials'
import LogoSvg from 'components/logoSvg'
import BottomLinks from '../bottom/bottomLinks'

const Content = () => {
  return (
    <Container>
      <ContentText>
        <span>
          <a href="mailto:hello@opcostudio.com?subject=Let%27s create something amazing!">
            hello@opcostudio.com
          </a>
        </span>
        <span>
          <a href="tel:+49 (0) 175 460 15 17">
            +49&nbsp;(0)&nbsp;175&nbsp;460&nbsp;15&nbsp;17
          </a>
        </span>

        <Socials />
        <BottomLinks />
      </ContentText>
    </Container>
  )
}

export default Content
