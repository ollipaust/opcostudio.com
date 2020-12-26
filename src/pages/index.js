import React from 'react'
import Head from 'components/head'

import BodyClassName from 'react-body-classname'

import Hero from 'components/hero'
import Title from 'components/title'
import { HeroButton, Indicator, Divider } from 'constants/elements'
import RandomWords from 'components/randomWords'
import { motion } from 'framer-motion'
import {
  fadeSlideHero1,
  fadeSlideHero2,
  fadeSlideHero3,
  expandHero,
} from 'constants/animations'

const Index = () => (
  <React.Fragment>
    <Head pageTitle="Home" />

    <BodyClassName className="home" />
    <Hero>
      <Title as="h1" size="super">
        <motion.i initial="hidden" animate="show" variants={fadeSlideHero1}>
          I create
        </motion.i>
        <br />
        <RandomWords />
        <br />
        <motion.i initial="hidden" animate="show" variants={fadeSlideHero2}>
          websites
        </motion.i>
      </Title>

      <motion.div
        className="sub-title-container"
        initial="hidden"
        animate="show"
        variants={expandHero}
      >
        <Divider />
        <Title as="h2" size="medium">
          Welcome to my personal Website!
        </Title>
      </motion.div>

      <motion.div initial="hidden" animate="show" variants={fadeSlideHero3}>
        <HeroButton to="/about">
          <Indicator />
          Get to know me!
        </HeroButton>
      </motion.div>
    </Hero>
  </React.Fragment>
)

export default Index
