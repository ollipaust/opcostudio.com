import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { light } from 'constants/colors'

import { ContentHeading } from './content.css'

const PageContentHeading = ({ children }) => (
  <ContentHeading>{children}</ContentHeading>
)

export default PageContentHeading
