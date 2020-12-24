import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Container, LogosContainer, NoticeBox } from './overlay.css'
import Html5Logo from 'images/html5.png'
import Css3Logo from 'images/css3.png'
import Es6Logo from 'images/es6.png'
import ReactLogo from 'images/react.png'
import GatsbyLogo from 'images/gatsby.png'
import { motionStaggerLogos, slideUp, ySpring } from 'constants/animations'

const HeroOverlay = () => {
  const MotionHeroLogosContainer = ({ className, children }) => (
    <motion.div
      className={className}
      variants={motionStaggerLogos}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  )
  const MotionHeroNoticeContainer = ({ className, children }) => (
    <motion.div
      className={className}
      variants={slideUp}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  )
  const StyledMotionHeroLogosContainer = styled(
    MotionHeroLogosContainer
  ).withConfig({
    displayName: 'HeroOverlayLogosBoxMotion',
  })`
    ${LogosContainer}
  `
  const StyledMotionHeroNoticeContainer = styled(
    MotionHeroNoticeContainer
  ).withConfig({
    displayName: 'HeroOverlayTextMotion',
  })`
    ${NoticeBox}
  `

  return (
    <Container>
      <StyledMotionHeroLogosContainer>
        <a href="https://www.w3.org/TR/html53/" title="W3C HTML5 Standards">
          <motion.img
            variants={ySpring}
            src={Html5Logo}
            width="24"
            height="33"
            alt="Html5"
            className="html"
          />
        </a>
        <a href="https://www.w3.org/TR/css-2018/" title="W3C CSS3 Standards">
          <motion.img
            variants={ySpring}
            src={Css3Logo}
            width="24"
            height="33"
            alt="Css3"
            className="css"
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
            height="33"
            alt="Es6Logo"
            className="es6"
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
            height="33"
            alt="ReactJS"
            className="react"
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
            height="33"
            alt="GatsbyJS"
            className="gatsby"
          />
        </a>
      </StyledMotionHeroLogosContainer>
      <StyledMotionHeroNoticeContainer>
        <p>
          <span>
            Frontend Design &amp; Development by{' '}
            <a href="https://github.com/ollipaust" title="Github Profile">
              Olli Paust
            </a>
          </span>
          <br />
          <span>Latest update: 23.12.2020</span>
        </p>
      </StyledMotionHeroNoticeContainer>
    </Container>
  )
}

export default HeroOverlay
