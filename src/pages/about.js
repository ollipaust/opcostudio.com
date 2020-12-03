import React from 'react'

import Title from 'components/title'
import { FormattedMessage } from 'react-intl'

import PageLayout from 'components/pageLayout'

import Translator from 'components/interface/translator'
import Div100vh from 'react-div-100vh'

const About = () => (
  <PageLayout prev="home" next="projects" bodyClass="about">
    <div className="flexbox">
      <Title as="h1" size="large" className="textLeft intro">
        <FormattedMessage id="about.intro1" />
      </Title>
    </div>

    <Div100vh />
  </PageLayout>
)

const customProps = {
  localeKey: 'about', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(About)
