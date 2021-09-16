import React from 'react'

import { Container, Button, MenuButtonLines } from './menuButton.css'

const MenuButton = ({ className, onClick }) => (
  <Container>
    <Button
      aria-label="Overlay Menu"
      id="MenuBtn"
      tabIndex="0"
      role="button"
      className={className}
      onClick={onClick}
    >
      <MenuButtonLines />
    </Button>
  </Container>
)

export default MenuButton
