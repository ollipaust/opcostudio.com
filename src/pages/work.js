import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Head from 'components/head'

import PageLayout from 'components/interface/pageLayout'
import IoWorkContainer from 'components/io/ioContainers/work/ioContainer'
import Title from 'components/title'
import Slider from 'components/slider'

const Work = ({ data }) => (
  <PageLayout prev="about" next="stack" bodyClass="work">
    <Head pageTitle={data.workJson.pagetitle} />

    <Title as="h1" size="large" className="textLeft">
      Currently in Development...
    </Title>

    <IoWorkContainer className="head-text flexbox">
      <Title as="h1" size="super" className="title">
        {data.workJson.headtitle}
      </Title>

      <Slider slides={data.workJson.slidedata} />
    </IoWorkContainer>

    <IoWorkContainer className="github-text flexbox">
      <div className="left">
        <Title as="h3" size="large" className="textStroke sub-title">
          React GitHub Repository
        </Title>
        <p className="text">
          I&apos;m open-sourcing some of my codes and apps, because I believe
          that sharing such stuff improves the world so that beginners can see
          how experienced developers do things. That&apos;s also how I learned
          coding: learning from others. Check out my GitHub repository if you
          are interested!
        </p>
      </div>
      <div className="right">
        <ul>
          <li>
            <Title as="h5" size="medium" className="number">
              ➥
            </Title>
            <a
              href="https://github.com/ollipaust"
              target="_blank"
              title="GitHub Profile"
              rel="noreferrer"
            >
              <Title as="h3" size="large" className="list-title">
                https://github.com/&#8203;ollipaust
              </Title>
            </a>
          </li>
        </ul>
      </div>
    </IoWorkContainer>
  </PageLayout>
)

Work.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Work

export const query = graphql`
  query WorkQuery {
    workJson {
      pagetitle
      headtitle
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      slidedata {
        index
        headline
        year
        description
        buttonlink
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
