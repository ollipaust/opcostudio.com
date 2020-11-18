import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from './pagination.css'

const Pagination = ({ children, className }) => {
  return (
    <Container className={className}>
      <Content>{children}</Content>
    </Container>
  )
}

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Pagination
