import React from 'react'
import styled from 'styled-components'

import { ContainerWrapper, ContentContainer } from './content.css'

const Div = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const StyledDiv = styled(Div).withConfig({ displayName: 'ContentContainer' })`
  ${ContentContainer}
`

const PageContent = ({ children }) => (
  <ContainerWrapper>
    <StyledDiv>{children}</StyledDiv>
  </ContainerWrapper>
)

export default PageContent
