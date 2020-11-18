import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'

import Link from 'components/link'
import Title from 'components/title'

import Head from 'components/head'
import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageHeading from 'components/pageLayout/heading'
import PageContent from 'components/pageLayout/content'
import Pagination from 'components/pageLayout/pagination'

import translatorWrapper from 'components/translator/translatorWrapper'
import { FormattedMessage } from 'react-intl'

const Stack = () => (
  <PageLayout>
    <BodyClassName className="stack" />
    <PageContent>
      <p>
        <FormattedMessage id="stack.intro" />
      </p>

      <div style={{ height: '50vh', width: '100%' }} />
      <div style={{ height: '50vh', width: '100%' }} />
      <div style={{ height: '50vh', width: '100%' }} />
    </PageContent>

    <Pagination>
      <div className="prev">
        <p>
          <FormattedMessage id="pagination.prev" />
        </p>
        <Link to="/portfolio">
          <Title as="h3" size="large" className="left">
            <FormattedMessage id="pagination.portfolio" />
          </Title>
        </Link>
      </div>
      <div className="next">
        <p>
          <FormattedMessage id="pagination.next" />
        </p>
        <Link to="/contact">
          <Title as="h3" size="large" className="right">
            <FormattedMessage id="pagination.contact" />
          </Title>
        </Link>
      </div>
    </Pagination>
  </PageLayout>
)

const customProps = {
  localeKey: 'stack', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Stack)
