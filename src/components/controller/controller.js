import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Container, Content } from './controller.css'

import Menu from './menu'
import { LogoDark } from './logo'

const Controller = () => (
  <Container>
    <Content>
      <LogoDark />
      <Menu />
    </Content>
  </Container>
)

export default Controller
