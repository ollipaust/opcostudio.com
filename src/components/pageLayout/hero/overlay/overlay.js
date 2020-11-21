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
  const MotionHeroLogosContainer = ({ className, children }) => (
    <LogosContainer>
      <motion.div
        className={className}
        variants={MotionLogos}
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
        variants={MotionNotice}
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

  const MotionLogos = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        opacity: { ease: 'easeIn' },
        staggerChildren: 0.25,
        delayChildren: 0.25,
      },
    },
  }

  const MotionNotice = {
    hidden: { opacity: 0, y: '50%' },
    show: {
      opacity: 1,
      y: '0%',
      transition: {
        delay: 1.25,
        opacity: { duration: 0.5 },
        y: { type: 'spring', damping: 300, stiffness: 50 },
      },
    },
  }
  const items = {
    hidden: { y: '200%' },
    show: {
      y: '0%',
      transition: {
        y: { type: 'spring', damping: 300, stiffness: 10 },
      },
    },
  }
  return (
    <Container>
      <StyledMotionHeroLogosContainer>
        <a href="https://www.w3.org/TR/html53/" title="W3C HTML5 Standards">
          <motion.img variants={items} src={Html5Logo} alt="Html5" />
        </a>
        <a href="https://www.w3.org/TR/css-2018/" title="W3C CSS3 Standards">
          <motion.img variants={items} src={Css3Logo} alt="Css3" />
        </a>
        <a
          href="https://www.ecma-international.org/ecma-262/7.0/"
          title="ECMAScript® 2016 Language Specification"
        >
          <motion.img variants={items} src={Es6Logo} alt="Es6Logo" />
        </a>
        <a
          href="https://reactjs.org/"
          title="A JavaScript library for building user interfaces "
        >
          <motion.img variants={items} src={ReactLogo} alt="ReactJS" />
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          title="Gatsby is a free and open source frameportfolio based on React that helps developers build blazing fast websites and apps"
        >
          <motion.img variants={items} src={GatsbyLogo} alt="GatsbyJS" />
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
