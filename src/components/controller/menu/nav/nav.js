import React from 'react'
import { Link } from 'gatsby'
import { Container, LinkContainer } from './nav.css'

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
            <span>About</span>
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
            <span>Projects</span>
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
            <span>Techstack</span>
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
            <span>Contact</span>
          </Link>
        </LinkContainer>
      </li>
    </Container>
  )
}

export default Nav
