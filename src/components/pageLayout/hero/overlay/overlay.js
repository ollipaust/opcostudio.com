import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Container, LogosContainer, NoticeBox } from './overlay.css'
import Html5Logo from 'images/html5.png'
import Css3Logo from 'images/css3.png'
import Es6Logo from 'images/es6.png'
import ReactLogo from 'images/react.png'
import GatsbyLogo from 'images/gatsby.png'
import { FormattedMessage } from 'react-intl'

const HeroOverlay = () => {
  return (
    <Container>
      <LogosContainer>
        <a href="https://www.w3.org/TR/html53/" title="W3C HTML5 Standards">
          <motion.img src={Html5Logo} alt="Html5" />
        </a>
        <a href="https://www.w3.org/TR/css-2018/" title="W3C CSS3 Standards">
          <motion.img src={Css3Logo} alt="Css3" />
        </a>
        <a
          href="https://www.ecma-international.org/ecma-262/7.0/"
          title="ECMAScript® 2016 Language Specification"
        >
          <motion.img src={Es6Logo} alt="Es6Logo" />
        </a>
        <a
          href="https://reactjs.org/"
          title="A JavaScript library for building user interfaces "
        >
          <motion.img src={ReactLogo} alt="ReactJS" />
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          title="Gatsby is a free and open source frameportfolio based on React that helps developers build blazing fast websites and apps"
        >
          <motion.img src={GatsbyLogo} alt="GatsbyJS" />
        </a>
      </LogosContainer>
      <NoticeBox>
        <p>
          <FormattedMessage id="home.inDevNotice" />
          <br />
          <FormattedMessage id="home.lastUpdate" />
        </p>
      </NoticeBox>
    </Container>
  )
}

export default HeroOverlay
