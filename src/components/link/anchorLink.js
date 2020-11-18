import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { injectIntl } from 'react-intl'

const LocalizedLink = ({ to, intl: { locale }, ...props }) => (
  <AnchorLink {...props} to={`/${locale}${to}`} />
)

export default injectIntl(LocalizedLink)
