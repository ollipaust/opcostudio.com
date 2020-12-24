import React from 'react'
import { Container, Content } from './pagination.css'
import { Link } from 'gatsby'
import Title from 'components/title'

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
            <span>prev</span>
          </p>
          <Link to={'/' + (prev === 'home' ? '' : prev)}>
            <Title as="h3" size="large" className="left">
              {prev}
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
            <span>next</span>
          </p>
          <Link to={'/' + next}>
            <Title as="h3" size="large" className="right">
              {next}
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

export default Pagination
