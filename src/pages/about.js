import React from 'react'
import Head from 'components/head'

import Title from 'components/title'

import PageLayout from 'components/pageLayout'

import { cloudImg } from 'constants/cloudRes'
import IoAboutRaster from 'components/io/ioContainers/about/raster'
import IoAboutTextContainer from 'components/io/ioContainers/about/text'
import { Raster, Divider } from 'constants/elements'
import Marquee from 'components/marqueeText'

const About = () => (
  <PageLayout prev="home" next="projects" bodyClass="about">
    <Head pageTitle="About" />

    <IoAboutRaster className="flexbox">
      <div className="raster-text">
        <Title as="h1" size="super" className="textCenter">
          Hey! I&apos;m Olli Paust!
          <br />
          I&apos;m a Coder &amp; Designer
          <br />
          from Berlin ❤️
        </Title>
      </div>
      <div className="portrait-container">
        <img
          src={cloudImg.portrait}
          className="portrait"
          title="Portrait"
          alt="Portrait"
        />
      </div>

      <Raster />
    </IoAboutRaster>

    <IoAboutTextContainer className="flexbox">
      <Title as="h6" size="medium" className="textCenter title">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
        ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie consequat, vel illum dolore eu feugiat
        nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
        blandit praesent luptatum zzril delenit augue duis dolore te feugait
        nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue
        nihil imperdiet doming id quod mazim placerat facer
      </Title>
    </IoAboutTextContainer>

    <IoAboutTextContainer className="flexbox">
      <Title as="h2" size="larger" className="textCenter title">
        Things that I have experience with
      </Title>
      <Divider />

      <Marquee />
    </IoAboutTextContainer>
  </PageLayout>
)

export default About
