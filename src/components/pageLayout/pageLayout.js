import React from 'react'
import PropTypes from 'prop-types'

import Main from './main'
import Footer from './footer'

import { PageLayoutStyles } from './pageLayout.css.js'

const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <PageLayoutStyles />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
