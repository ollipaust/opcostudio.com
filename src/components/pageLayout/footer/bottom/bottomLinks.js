import React from 'react'
import Link from 'components/link'
import { ContainerBottom } from './bottom.css'

const BottomLinks = () => {
  return (
    <ul className="bottomLinks">
      <li>
        <Link to="/imprint" activeClassName="active">
          Imprint
        </Link>
      </li>
      <li>
        <a
          href="https://opcostudio.com/sitemap.xml"
          target="_blank"
          rel="noreferrer"
        >
          Sitemap
        </a>
      </li>
    </ul>
  )
}

export default BottomLinks
