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
import { motionStagger, slideUp2s, ySpring } from 'constants/animations'

const HeroOverlay = () => {
  const MotionHeroLogosContainer = ({ className, children }) => (
    <LogosContainer>
      <motion.div
        className={className}
        variants={motionStagger}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </LogosContainer>
  )
  const MotionHeroNoticeContainer = ({ className, children }) => (
    <NoticeBox>
      <motion.div
        className={className}
        variants={slideUp2s}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </NoticeBox>
  )
  const StyledMotionHeroLogosContainer = styled(
    MotionHeroLogosContainer
  ).withConfig({
    displayName: 'HeroOverlayLogosBoxMotion',
  })``
  const StyledMotionHeroNoticeContainer = styled(
    MotionHeroNoticeContainer
  ).withConfig({
    displayName: 'HeroOverlayTextMotion',
  })``

  return (
    <Container>
      <StyledMotionHeroLogosContainer>
        <a href="https://www.w3.org/TR/html53/" title="W3C HTML5 Standards">
          <motion.img
            variants={ySpring}
            src={Html5Logo}
            width="24"
            heiht="33"
            alt="Html5"
          />
        </a>
        <a href="https://www.w3.org/TR/css-2018/" title="W3C CSS3 Standards">
          <motion.img
            variants={ySpring}
            src={Css3Logo}
            width="24"
            heiht="33"
            alt="Css3"
          />
        </a>
        <a
          href="https://www.ecma-international.org/ecma-262/7.0/"
          title="ECMAScript® 2016 Language Specification"
        >
          <motion.img
            variants={ySpring}
            src={Es6Logo}
            width="50"
            heiht="33"
            alt="Es6Logo"
          />
        </a>
        <a
          href="https://reactjs.org/"
          title="A JavaScript library for building user interfaces "
        >
          <motion.img
            variants={ySpring}
            src={ReactLogo}
            width="50"
            heiht="33"
            alt="ReactJS"
          />
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          title="Gatsby is a free and open source frameportfolio based on React that helps developers build blazing fast websites and apps"
        >
          <motion.img
            variants={ySpring}
            src={GatsbyLogo}
            width="50"
            heiht="33"
            alt="GatsbyJS"
          />
        </a>
      </StyledMotionHeroLogosContainer>
      <StyledMotionHeroNoticeContainer>
        <p>
          <FormattedMessage id="home.inDevNotice" />
          <br />
          <FormattedMessage id="home.lastUpdate" />
        </p>
      </StyledMotionHeroNoticeContainer>
    </Container>
  )
}

export default HeroOverlay
