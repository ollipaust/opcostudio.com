import React from 'react'

import { Container, MenuBoxLeft, MenuBoxRight } from './menuBoxes.css'
import Socials from 'components/socials'

const MenuBoxes = ({ className }) => (
  <Container className={className}>
    <MenuBoxLeft>
      <strong>
        <span>WWW.OLLIPAUST.DEV</span>
      </strong>
      <span>Personal Website &amp; Portfolio</span>
    </MenuBoxLeft>

    <MenuBoxRight>
      <Socials />
    </MenuBoxRight>
  </Container>
)

export default MenuBoxes
