import React from 'react'
import PropTypes from 'prop-types'

import Main from './main'
import PageContent from './content'
import Footer from './footer'
import Pagination from './pagination'

import BodyClassName from 'react-body-classname'

import { PageLayoutStyles } from './pageLayout.css'

const PageLayout = ({ children, prev, next, bodyClass }) => {
  return (
    <React.Fragment>
      <PageLayoutStyles />
      <BodyClassName className={bodyClass} />

      <Main>
        <PageContent>{children}</PageContent>
      </Main>

      <Pagination prev={prev} next={next} />

      <Footer />
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
