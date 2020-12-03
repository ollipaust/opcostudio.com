import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from './pagination.css'

import Link from 'components/link'
import Title from 'components/title'
import { FormattedMessage } from 'react-intl'

const PaginationContainer = ({ children, className }) => {
  return (
    <Container className={className}>
      <Content>{children}</Content>
    </Container>
  )
}

const Pagination = ({ prev, next }) => {
  const PrevPage = () => {
    if (prev !== undefined) {
      return (
        <div className="prev">
          <p>
            <FormattedMessage id="pagination.prev" />
          </p>
          <Link to={'/' + prev}>
            <Title as="h3" size="large" className="left">
              <FormattedMessage id={'pagination.' + prev} />
            </Title>
          </Link>
        </div>
      )
    } else {
      return null
    }
  }
  const NextPage = () => {
    if (next !== undefined) {
      return (
        <div className="next">
          <p>
            <FormattedMessage id="pagination.next" />
          </p>
          <Link to={'/' + next}>
            <Title as="h3" size="large" className="right">
              <FormattedMessage id={'pagination.' + next} />
            </Title>
          </Link>
        </div>
      )
    } else {
      return null
    }
  }
  return (
    <PaginationContainer>
      <PrevPage />
      <NextPage />
    </PaginationContainer>
  )
}
Pagination.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Pagination
