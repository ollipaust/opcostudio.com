import React from 'react'
import { Container } from './menuBg.css'

const MenuBackground = ({ className }) => {
  return (
    <Container className={className}>
      <div className={className + ' alpha'} />
      <div className={className + ' beta'} />
    </Container>
  )
}

export default MenuBackground
