import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Head from 'components/head'

import PageLayout from 'components/interface/pageLayout'
import Title from 'components/title'
import IoAboutContainer from 'components/io/ioContainers/about/ioContainer'
import { Raster, Divider } from 'constants/elements'
import Marquee from 'components/marqueeText'
import Image from 'components/image'

const About = ({ data }) => (
  <PageLayout prev="home" next="work" bodyClass="about">
    <Head pageTitle={data.aboutJson.pagetitle} />

    <IoAboutContainer className="head-text">
      <div className="head-text-container">
        <Image items={data.aboutJson.portrait} className="portrait-container" />

        <div className="raster-text">
          <Title as="h1" size="super" className="title">
            {data.aboutJson.headtitle}
          </Title>
          <div
            dangerouslySetInnerHTML={{
              __html: data.aboutJson.introtext.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
      <Raster />
    </IoAboutContainer>

    <IoAboutContainer className="aqua-text flexbox">
      <Title as="h3" size="larger" className="textCenter title">
        {data.aboutJson.aquatexttitle}
      </Title>
      <div
        className="quote"
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.aquatext.childMarkdownRemark.html,
        }}
      />
      <Title as="p" size="small" className="textCenter source">
        Source:{' '}
        <a
          href="https://blog.prepscholar.com/aquarius-traits-personality"
          target="_blank"
          title="Quote source"
          rel="noreferrer noopener"
        >
          https://blog.prepscholar.com/aquarius-traits-personality
        </a>
      </Title>
    </IoAboutContainer>

    <IoAboutContainer className="love-text flexbox">
      <Title as="h3" size="larger" className="textCenter title">
        {data.aboutJson.lovetexttitle}
      </Title>
      <div
        className="love-text-content flexbox"
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.lovetext.childMarkdownRemark.html,
        }}
      />
    </IoAboutContainer>

    <IoAboutContainer className="marquee-text flexbox">
      <Title as="h2" size="larger" className="textCenter title">
        {data.aboutJson.marqueetexttitle}
      </Title>
      <Divider />
      <Marquee />
    </IoAboutContainer>

    <IoAboutContainer className="statement-text">
      <Title as="h2" size="larger">
        {data.aboutJson.statementtext.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </IoAboutContainer>
  </PageLayout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    aboutJson {
      pagetitle
      headtitle
      introtext {
        childMarkdownRemark {
          html
        }
      }
      aquatexttitle
      aquatext {
        childMarkdownRemark {
          html
        }
      }
      lovetexttitle
      lovetext {
        childMarkdownRemark {
          html
        }
      }
      marqueetexttitle
      statementtext {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      portrait {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
