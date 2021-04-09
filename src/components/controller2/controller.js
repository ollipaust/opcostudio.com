import React, { useState, useEffect } from 'react'

import { Container, Content, AppControllerWrapper } from './controller.css'

import Logo from './logo'
import MenuButton from './menu/menuButton'
import MenuBackground from './menu/menuBg'
import MenuContent from './menu/menuContent'
import NavLinks from './nav'

const Controller = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const toggled = isMenuActive ? 'active' : 'inactive'

  const appView =
    typeof document !== 'undefined' ? document.getElementById('AppView') : null

  function hideStuff() {
    appView.classList.add('blurred')
  }
  function hideMenu() {
    setIsMenuActive(!isMenuActive)
    appView.classList.remove('blurred')
  }
  function removeBlur() {
    appView.classList.remove('blurred')
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
    const appView = document.getElementById('AppView')
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setIsMenuActive(false)
        appView.classList.remove('blurred')
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
      {isMenuActive ? hideStuff() : null}
      <NavLinks className={toggled} />
      <Container>
        <Content>
          <MenuButton className={toggled} onClick={() => hideMenu()} />
          <Logo className={toggled} />
        </Content>
      </Container>

      <MenuContent className={toggled} />
      <MenuBackground className={toggled} />
    </AppControllerWrapper>
  )
}
export default Controller
