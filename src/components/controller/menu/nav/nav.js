import React from 'react'
import Link from 'components/link'
import { Container, LinkContainer } from './nav.css'
import { FormattedMessage } from 'react-intl'

const Nav = () => {
  return (
    <Container>
      <li>
        <LinkContainer>
          <Link
            to="/about"
            activeClassName="active"
            className="about"
            data-info="01"
          >
            <FormattedMessage id="nav.about" />
          </Link>
        </LinkContainer>
      </li>

      <li>
        <LinkContainer>
          <Link
            to="/projects"
            activeClassName="active"
            className="creations"
            data-info="02"
          >
            <FormattedMessage id="nav.projects" />
          </Link>
        </LinkContainer>
      </li>

      <li>
        <LinkContainer>
          <Link
            to="/stack"
            activeClassName="active"
            className="stack"
            data-info="03"
          >
            <FormattedMessage id="nav.stack" />
          </Link>
        </LinkContainer>
      </li>

      <li>
        <LinkContainer>
          <Link
            to="/contact"
            activeClassName="active"
            className="contact"
            data-info="04"
          >
            <FormattedMessage id="nav.contact" />
          </Link>
        </LinkContainer>
      </li>
    </Container>
  )
}

export default Nav
