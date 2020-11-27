import React from 'react'

import Link from 'components/link'
import Title from 'components/title'

import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageContent from 'components/pageLayout/content'
import Pagination from 'components/pageLayout/pagination'

import Translator from 'components/interface/translator'
import Div100vh from 'react-div-100vh'

import { FormattedMessage } from 'react-intl'

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

const customProps = {
  localeKey: 'about', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(About)
