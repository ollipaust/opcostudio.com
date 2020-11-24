import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

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

const Blog = ({ data }) => (
  <PageLayout>
    <PageHeading background={data.blogJson.imageUrl}>
      <h1>
        <FormattedMessage id="blog.title" />
      </h1>
    </PageHeading>

    <Head pageTitle={data.blogJson.title} />
    <BodyClassName className="blog" />

    <PageContent>
      <p>
        <FormattedMessage id="blog.intro" />
      </p>

      <div style={{ height: '50vh', width: '100%' }} />
      <div
        className="vanta"
        id="vanta"
        style={{ height: '30vh', width: '100%', background: 'red' }}
      ></div>
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
        <Link to="/caseStudies">
          <Title as="h3" size="large" className="right">
            <FormattedMessage id="pagination.caseStudies" />
          </Title>
        </Link>
      </div>
    </Pagination>
  </PageLayout>
)

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

const customProps = {
  localeKey: 'blog', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Blog)

export const query = graphql`
  query BlogQuery {
    blogJson {
      title
      imageUrl
    }
  }
`
