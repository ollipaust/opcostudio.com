import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { ContainerBottom } from './bottom.css'

const Copyright = ({ siteTitleShort }) => {
  return (
    <ContainerBottom>
      <span className="copyright">
        &copy; {new Date().getFullYear()} {siteTitleShort} - All rights
        reserved.
      </span>
    </ContainerBottom>
  )
}

Copyright.propTypes = {
  siteTitle: PropTypes.string,
}

const CopyrightWithQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitleShort
          }
        }
      }
    `}
    render={data => <Copyright {...data.site.siteMetadata} {...props} />}
  />
)

export default CopyrightWithQuery
