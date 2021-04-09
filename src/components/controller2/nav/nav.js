import React, { useState, useEffect, useCallback } from 'react'
import { Container, Nav, NavLinksAboutContainer } from './nav.css'
import { AboutContent } from './about'

const NavLinks = ({ className }) => {
  const [isAboutActive, setIsAboutActive] = useState(false)

  const collapsed = isAboutActive ? 'active' : 'inactive'

  const menuBtn =
    typeof document !== 'undefined' ? document.getElementById('MenuBtn') : null
  const navList =
    typeof document !== 'undefined' ? document.getElementById('NavList') : null

  function hideStuff() {
    menuBtn.classList.add('deactivated')
    navList.classList.add('blurred')
  }
  function hideAbout() {
    setIsAboutActive(!isAboutActive)
    menuBtn.classList.remove('deactivated')
    navList.classList.remove('blurred')
  }

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setIsAboutActive(false)
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <Container>
      <NavLinksAboutContainer className={collapsed}>
        {isAboutActive ? hideStuff() : null}
        <button
          className={'close ' + collapsed}
          onClick={() => hideAbout()}
          style={
            isAboutActive === true
              ? { pointerEvents: 'all' }
              : { pointerEvents: 'none' }
          }
        >
          X
        </button>

        <AboutContent className={collapsed} />
      </NavLinksAboutContainer>

      <Nav className={className} id="NavList">
        <li>
          <button
            className="about"
            data-info="01"
            onClick={() => setIsAboutActive(true)}
            style={isAboutActive === true ? { pointerEvents: 'none' } : null}
          >
            <span>About</span>
          </button>
        </li>
        <li>
          <button
            className="work"
            data-info="02"
            style={isAboutActive === true ? { pointerEvents: 'none' } : null}
          >
            <span>Work</span>
          </button>
        </li>
        <li>
          <button
            className="stack"
            data-info="03"
            style={isAboutActive === true ? { pointerEvents: 'none' } : null}
          >
            <span>Stack</span>
          </button>
        </li>
        <li>
          <button
            className="contact"
            data-info="04"
            style={isAboutActive === true ? { pointerEvents: 'none' } : null}
          >
            <span>Contact</span>
          </button>
        </li>
      </Nav>
    </Container>
  )
}

export default NavLinks
