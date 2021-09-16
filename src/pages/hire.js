import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Head from 'components/head'

import PageLayout from 'components/interface/pageLayout'
import Title from 'components/title'
import { accent } from 'constants/colors'

import Step1 from 'components/multiForm/step1';
import Step2 from 'components/multiForm/step2';
import FinalStep from 'components/multiForm/finalStep';


const Hire = ({ data }) => (
  <PageLayout prev="about" next="stack" bodyClass="hire">

    <Head pageTitle={data.hireJson.pagetitle} />

   <div style={{width: '100%', height: '30vh', backgroundColor: accent, marginBottom: '50px'}} />

<p>hi</p>

<div style={{width: '100%', height: '50vh'}} />
   
  </PageLayout>
)

Hire.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hire

export const query = graphql`
  query HireQuery {
    hireJson {
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
