import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { isIE, isEdge } from 'react-device-detect'
import { notice } from 'constants/colors'
import { Container } from './browserNotice.css'

const Div = ({ className, children, open, show }) => (
  <motion.div
    className={className}
    initial={{ y: '-105%' }}
    animate={{ y: '0' }}
    transition={{
      y: { delay: 1, duration: 1 },
    }}
  >
    {children}
  </motion.div>
)
const NoticeBar = styled(Div).withConfig({
  displayName: 'BrowserNotice',
})`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: auto;
  background: ${notice};
  &.inactive {
    transform: translateY(-125%) !important;
    transition: transform 500ms ease;
  }
`

class BrowserNotice extends PureComponent {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = { collapsed: true }
  }
  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { children } = this.props
    const collapsed = this.state.collapsed
    const toggled = !collapsed ? 'inactive' : 'active'

    return (
      <NoticeBar className={`${toggled}`}>
        <Container>
          {children}
          <button
            onClick={this.toggleNavbar}
            aria-label="Overlay Navigation"
            tabIndex="0"
          >
            X
          </button>
        </Container>
      </NoticeBar>
    )
  }
}

export default BrowserNotice
