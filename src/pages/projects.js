import React from 'react'

import PageLayout from 'components/pageLayout'

import Gallery from 'components/gallery'

import Translator from 'components/interface/translator'
import { FormattedMessage } from 'react-intl'

const Projects = () => (
  <PageLayout prev="about" next="stack" bodyClass="projects">
    <Gallery />
    <div style={{ height: '50vh', width: '100%' }} />
  </PageLayout>
)

const customProps = {
  localeKey: 'projects', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(Projects)
