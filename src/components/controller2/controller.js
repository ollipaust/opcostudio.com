import React, { useState, useEffect } from 'react'

import { Container, Content, AppControllerWrapper } from './controller.css'

import Logo from './logo'
import MenuButton from './menu/menuButton'
import MenuBackground from './menu/menuBg'
import MenuBoxes from './menu/menuBoxes'
import NavLinks from './nav'

const Controller = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isAboutActive, setIsAboutActive] = useState(false)

  const toggled = isMenuActive ? 'active' : 'inactive'

  const blurContent =
    typeof document !== 'undefined'
      ? document.getElementById('ScrollContent')
      : null

  function addBlur() {
    blurContent.classList.add('blur')
  }

  function hideMenu() {
    setIsMenuActive(!isMenuActive)
    blurContent.classList.remove('blur')
  }

  function OverflowHider() {
    if (isMenuActive === true) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
      document.documentElement.style.overflow = 'visible'
    }
  }

  useEffect(() => {
    const blurContent = document.getElementById('ScrollContent')
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setIsMenuActive(false)
        blurContent.classList.remove('blur')
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <AppControllerWrapper>
      {typeof document !== 'undefined' ? OverflowHider() : null}
      {isMenuActive ? addBlur() : null}
      <NavLinks
        className={toggled}
        setIsMenuActive={setIsMenuActive}
        isAboutActive={isAboutActive}
        setIsAboutActive={setIsAboutActive}
      />
      <Container>
        <Content>
          <MenuButton className={toggled} onClick={() => hideMenu()} />
          <Logo
            className={toggled}
            setIsMenuActive={setIsMenuActive}
            setIsAboutActive={setIsAboutActive}
          />
        </Content>
      </Container>

      <MenuBoxes className={toggled} />
      <MenuBackground className={toggled} />
    </AppControllerWrapper>
  )
}
export default Controller
