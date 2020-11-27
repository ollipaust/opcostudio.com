import React from 'react'
import { graphql } from 'gatsby'

import Title from 'components/title'

import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageContent from 'components/pageLayout/content'
import PageContentHeading from 'components/pageLayout/content/contentHeading'

import Translator from 'components/interface/translator'
import { FormattedMessage } from 'react-intl'

const Error404 = () => (
  <PageLayout>
    <BodyClassName className="error404" />

    <PageContent>
      <PageContentHeading>
        <Title as="h1" size="medium" className="ContentTitleRight">
          <FormattedMessage id="error404.intro1" />
          <sub>
            <FormattedMessage id="error404.intro1Sub" />
          </sub>
        </Title>

        <Title as="h1" size="medium" className="ContentTitleRight">
          <FormattedMessage id="error404.intro2" />
          <sub>
            <FormattedMessage id="error404.intro2Sub" />
          </sub>
        </Title>
      </PageContentHeading>
    </PageContent>
  </PageLayout>
)

const customProps = {
  localeKey: 'error404', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(Error404)

export const query = graphql`
  query Error404Query {
    error404Json {
      title
    }
  }
`
