import React from 'react'
import Head from 'components/head'

import Title from 'components/title'

import PageLayout from 'components/pageLayout'

import { cloudImg } from 'constants/cloudRes'
import IoAboutContainer from 'components/io/ioContainers/about/ioContainer'
import { Raster, Divider } from 'constants/elements'
import Marquee from 'components/marqueeText'

const About = () => (
  <PageLayout prev="home" next="work" bodyClass="about">
    <Head pageTitle="About" />

    <IoAboutContainer className="raster-text">
      <div className="raster-text-container">
        <div className="portrait-container">
          <img
            src={cloudImg.portrait}
            className="portrait"
            title="That's me"
            alt="Portrait"
          />
        </div>
        <div className="raster-text">
          <Title as="h1" size="super">
            Hey, hi,
            <br />
            hello, yo,
            <br /> what&apos;s up?
          </Title>
          <p>
            Thank you🙏 for browsing my website, I&apos;m so glad that you made
            it here!😼 I&apos;m Olliver aka Olli 👋 and I&apos;m an Aquarius♒.
            Furthermore a web designer and coder by ❤️, specializing in Frontend
            Development using React/Gatsby with a focus👀 on responsive📱,
            animated💨 and interactive👐 content/UXUI. I&apos;m 2️⃣7️⃣ years
            young, born in the Philippines 🇵🇭 and raised in Berlin, Germany 🇩🇪 -
            the best city in the world. Ever since I was a little kid I loved to
            be artsy and creative🎨 and started my career💼 in IT🖥️ a veeery
            long time ago as an autodidact.
          </p>
        </div>
      </div>
      <Raster />
    </IoAboutContainer>

    <IoAboutContainer className="aqua-text flexbox">
      <Title as="h3" size="larger" className="textCenter title">
        Personality
      </Title>
      <Title as="h3" size="large" className="quote">
        &quot;Aquarius is known for being progressive, idealistic, intelligent,
        and highly creative - not to mention a little quirky!&quot;
      </Title>
      <Title as="p" size="small" className="textCenter source">
        Source:{' '}
        <a
          href="https://blog.prepscholar.com/aquarius-traits-personality"
          target="_blank"
          title="Quote source"
          rel="noreferrer"
        >
          https://blog.prepscholar.com/aquarius-traits-personality
        </a>
      </Title>
    </IoAboutContainer>

    <IoAboutContainer className="love-text flexbox">
      <Title as="h3" size="larger" className="textCenter title">
        Why I fell in love with
        <br />
        Web Design &amp; Development...
      </Title>
      <p className="text">
        Sometimes it&apos;s easy to lose sight of the why of what we do. Maybe
        we started off with inspiration and lost it somewhere along the way.
        Because other things came up. Because life demanded it. Because money
        was involved. Because we wanted to promote certain personal aspects.
      </p>

      <p className="text">
        This happened to me in my journey in IT and I feel that it&apos;s
        important to reconnect with my &quot;why I do this&quot; and &quot;why I
        started&quot;. I started creating websites when I was a kid. I learned
        coding through Forum-Softwares like MyBB in order to build a
        board-system for my online gaming friends (guild) and ended up building
        and hosting a forum with almost 5k users with topics ranging from games,
        fun, technology and daily life.
      </p>
      <p className="text">
        What I love the most about websites and apps is that they are almost
        all-encompassing, omniscient and omnipresent. It influences and affects
        so many aspects in businesses and our personal lives. Whether you send a
        letter to a loved one within a blink of an eye, connect with like-minded
        people around the globe, who you&apos;d never get to meet otherwise or
        share your art, thoughts, works, crafts or products.
      </p>
      <p className="text">
        What motivated me then was the same thing that motivates me today -
        Creating something with a purpose. Fun. Play. I just want to create
        something special. Something beautiful. Something that shows dedication
        and mindfulness. And I find it truly amazing that everyone is able to
        contribute to a things that billions of people use daily.
      </p>
    </IoAboutContainer>

    <IoAboutContainer className="marquee-text flexbox">
      <Title as="h2" size="larger" className="textCenter title">
        Things that I work with
      </Title>
      <Divider />
      <Marquee />
    </IoAboutContainer>

    <IoAboutContainer className="statement">
      <Title as="h2" size="larger" className="title">
        Brilliant frontends can be achieved for all requirements. It is
        important to start off simplistic, understand the emphasis, adjust
        alignments, balance designs and then scale.
      </Title>
    </IoAboutContainer>
  </PageLayout>
)

export default About
