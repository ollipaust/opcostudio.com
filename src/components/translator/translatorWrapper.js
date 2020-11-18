/* eslint-disable */
import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import PropTypes from 'prop-types'

import Head from 'components/head'
import PageContext from './pageContext'

import deData from 'react-intl/locale-data/de'
import enData from 'react-intl/locale-data/en'
import { translations, languages } from 'components/i18n'

addLocaleData([...deData, ...enData])

const translatorWrapper = customProps => PageComponent => props => {
  const { locale } = props.pageContext
  const { localeKey } = customProps

  const pageContextValue = { custom: customProps, page: props.pageContext }

  const defaultLocale = languages.find(language => language.default).locale
  const pageLocale = locale || defaultLocale
  const pageTitle = locale ? translations[locale][`${localeKey}.title`] : ''

  return (
    <IntlProvider locale={pageLocale} messages={translations[pageLocale]}>
      <PageContext.Provider value={pageContextValue}>
        <Head pageTitle={pageTitle} lang={pageLocale} />
        <PageComponent {...props} />
      </PageContext.Provider>
    </IntlProvider>
  )
}

translatorWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
}

export default translatorWrapper
