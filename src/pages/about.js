import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Link from 'components/link'
import Title from 'components/title'

import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageContent from 'components/pageLayout/content'
import Pagination from 'components/pageLayout/pagination'
import Portrait from 'components/portrait'

import IOContainer from 'components/ioContainer'
import translatorWrapper from 'components/translator/translatorWrapper'
import Div100vh from 'react-div-100vh'

import { FormattedMessage } from 'react-intl'

const portraitStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
}

const About = () => (
  <PageLayout>
    <BodyClassName className="about" />

    <PageContent>
      <div className="flexbox">
        <Title as="h1" size="large" className="textLeft  intro">
          <FormattedMessage id="about.intro1" />
        </Title>
      </div>

      <Div100vh />

      <div style={portraitStyles}>
        <Portrait caption={<FormattedMessage id="about.thatsMe" />} />
        <div style={{ width: '50%', padding: '0 0 0 50px' }}>
          <h1
            style={{
              fontSize: '10rem',
              fontWeight: '800',
              color: 'transparent',
              lineHeight: 0.85,
              WebkitTextStroke: '3px #373345',
            }}
          >
            INFOS
          </h1>
        </div>
      </div>
    </PageContent>

    <Pagination>
      <div className="prev">
        <p>
          <FormattedMessage id="pagination.prev" />
        </p>
        <Link to="/">
          <Title as="h3" size="large" className="left">
            <FormattedMessage id="pagination.home" />
          </Title>
        </Link>
      </div>
      <div className="next">
        <p>
          <FormattedMessage id="pagination.next" />
        </p>
        <Link to="/portfolio">
          <Title as="h3" size="large" className="right">
            <FormattedMessage id="pagination.portfolio" />
          </Title>
        </Link>
      </div>
    </Pagination>
  </PageLayout>
)

const customProps = {
  localeKey: 'about', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(About)
