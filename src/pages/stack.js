import React from 'react'

import Title from 'components/title'

import PageLayout from 'components/pageLayout'

import Translator from 'components/interface/translator'
import { FormattedMessage } from 'react-intl'
import Div100vh from 'react-div-100vh'

const Stack = () => (
  <PageLayout prev="projects" next="contact" bodyClass="stack">
    <div className="flexbox">
      <Title as="h1" size="large" className="textLeft intro">
        <FormattedMessage id="stack.intro" />
      </Title>
    </div>
    <Div100vh />
  </PageLayout>
)

const customProps = {
  localeKey: 'stack', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(Stack)
