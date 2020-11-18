import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Link from 'components/link'
import Title from 'components/title'

import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageContent from 'components/pageLayout/content'
import PageContentHeading from 'components/pageLayout/content/contentHeading'
import Pagination from 'components/pageLayout/pagination'

import Portrait from 'components/portrait'

import translatorWrapper from 'components/translator/translatorWrapper'
import { FormattedMessage } from 'react-intl'

const portraitStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
}

const About = () => (
  <PageLayout>
    <BodyClassName className="about" />

    <PageContent>
      <PageContentHeading>
        <Title as="h1" size="medium" className="ContentTitleRight">
          <FormattedMessage id="about.intro1" />
          <sub>
            <FormattedMessage id="about.intro1Sub" />
          </sub>
        </Title>

        <Title as="h1" size="medium" className="ContentTitleRight">
          <FormattedMessage id="about.intro2" />
          <sub>
            <FormattedMessage id="about.intro2Sub" />
          </sub>
        </Title>
      </PageContentHeading>

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
