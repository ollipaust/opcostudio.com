import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Langs from '../langswitch'
import { FormattedMessage } from 'react-intl'

import Nav from './nav'
import { LogoLight } from '../logo'
import {
  OverlayBg,
  OverlayContent,
  OverlayNav,
  MenuButton,
  MenuLines,
  ControlsContainer,
  LogoContainer,
  LangSwitchContainer,
  OverlayBoxRight,
  OverlayBoxLeft,
} from './menu.css'
import LogoSvg from 'components/logoSvg'
import Socials from 'components/socials'

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = { collapsed: true }
  }
  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed })
  }
  escapeNavbar = () => {
    if (!this.collapsed && event.key === 'Escape') {
      this.toggleNavbar()
    }
  }
  disableScrolling = () => {
    if (!this.state.collapsed) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
      document.documentElement.style.overflow = 'visible'
    }
  }

  render() {
    const { hideLangs } = this.props
    const collapsed = this.state.collapsed
    const toggled = !collapsed ? 'active' : 'inactive'

    if (typeof document !== 'undefined') {
      this.disableScrolling()
    }

    return (
      <React.Fragment>
        <ControlsContainer>
          <LangSwitchContainer>{!hideLangs && <Langs />}</LangSwitchContainer>

          <MenuButton
            className={toggled}
            onClick={this.toggleNavbar}
            onKeyDown={this.escapeNavbar}
            aria-label="Overlay Menu"
            tabIndex="0"
            type="button"
          >
            <MenuLines />
          </MenuButton>
        </ControlsContainer>

        <OverlayContent className={toggled} role="navigation">
          <OverlayBg
            className={toggled}
            onClick={this.toggleNavbar}
            onKeyDown={this.escapeNavbar}
            tabIndex="0"
          />

          <LogoSvg delay={2000} speed={5000} className="animatedLogo" />
          <LogoContainer>
            <LogoLight />
          </LogoContainer>

          <OverlayNav>
            <Nav />
          </OverlayNav>

          <OverlayBoxLeft>
            <strong>
              <FormattedMessage id="menu.siteUrl" />
            </strong>
            <FormattedMessage id="menu.text" />
          </OverlayBoxLeft>

          <OverlayBoxRight>
            <Socials />
          </OverlayBoxRight>
        </OverlayContent>
      </React.Fragment>
    )
  }
}

Menu.propTypes = {
  hideLangs: PropTypes.bool,
}

Menu.defaultProps = {
  hideLangs: false,
}
export default Menu
