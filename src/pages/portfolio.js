import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'

import Link from 'components/link'
import Title from 'components/title'
import Gallery from 'components/gallery'

import Head from 'components/head'
import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageContent from 'components/pageLayout/content'
import PageContentHeading from 'components/pageLayout/content/contentHeading'
import Pagination from 'components/pageLayout/pagination'

import translatorWrapper from 'components/translator/translatorWrapper'
import { FormattedMessage } from 'react-intl'

const Portfolio = () => (
  <PageLayout>
    <BodyClassName className="portfolio" />

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

      <p>
        <FormattedMessage id="portfolio.intro" />
      </p>

      <Gallery />
      <div style={{ height: '50vh', width: '100%' }} />
    </PageContent>

    <Pagination>
      <div className="prev">
        <p>
          <FormattedMessage id="pagination.prev" />
        </p>
        <Link to="/about">
          <Title as="h3" size="large" className="left">
            <FormattedMessage id="pagination.about" />
          </Title>
        </Link>
      </div>
      <div className="next">
        <p>
          <FormattedMessage id="pagination.next" />
        </p>
        <Link to="/stack">
          <Title as="h3" size="large" className="right">
            <FormattedMessage id="pagination.stack" />
          </Title>
        </Link>
      </div>
    </Pagination>
  </PageLayout>
)

const customProps = {
  localeKey: 'portfolio', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Portfolio)
