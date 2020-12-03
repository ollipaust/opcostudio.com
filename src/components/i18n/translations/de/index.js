import flatten from 'flat'

import error404 from './404'
import home from './home'
import about from './about'
import projects from './projects'
import stack from './stack'
import blog from './blog'
import contact from './contact'
import imprint from './imprint'

import nav from './components/nav'
import menu from './components/menu'
import pagination from './components/pagination'
import messages from './components/messages'

const message = {
  error404,
  home,
  about,
  projects,
  stack,
  blog,
  contact,
  imprint,
  nav,
  menu,
  pagination,
  messages,
}

export default flatten(message)
