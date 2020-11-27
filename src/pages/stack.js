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

import Translator from 'components/interface/translator'
import { FormattedMessage } from 'react-intl'
import Div100vh from 'react-div-100vh'

const Stack = () => (
  <PageLayout>
    <BodyClassName className="stack" />
    <PageContent>
      <Div100vh />
    </PageContent>

    <Pagination>
      <div className="prev">
        <p>
          <FormattedMessage id="pagination.prev" />
        </p>
        <Link to="/caseStudies">
          <Title as="h3" size="large" className="left">
            <FormattedMessage id="pagination.caseStudies" />
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

export default Translator(customProps)(Stack)
