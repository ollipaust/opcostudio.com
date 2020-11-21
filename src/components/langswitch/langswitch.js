import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import { injectIntl } from 'react-intl'

import languages from 'components/i18n/languages'
import PageContext from 'components/translator/pageContext'

import { LangSwitch } from './langswitch.css'

const LangButton = ({ label, locale, chosen, onClick }) => (
  <LangSwitch
    onClick={onClick}
    className={locale}
    title={label}
    style={{
      opacity: chosen ? '1' : '0.177',
    }}
  />
)

const Langswitcher = ({ intl: { locale } }) => {
  const pageContext = useContext(PageContext)

  const handleSetLang = language => {
    const { originalPath } = pageContext.page
    const newPathname = `/${language}${originalPath}`

    localStorage.setItem('language', language)
    navigate(newPathname)
  }

  if (!pageContext.custom.localeKey) return null
  return (
    <React.Fragment>
      {languages.map(language => (
        <LangButton
          key={language.locale}
          label={language.label}
          locale={language.locale}
          chosen={language.locale === locale}
          onClick={() => handleSetLang(language.locale)}
        />
      ))}
    </React.Fragment>
  )
}

export default injectIntl(Langswitcher)
