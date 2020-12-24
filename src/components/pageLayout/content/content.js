import React from 'react'
import styled from 'styled-components'

import { ContainerWrapper, ContentContainer } from './content.css'

const Article = ({ className, children }) => {
  return <article className={className}>{children}</article>
}

const StyledDiv = styled(Article).withConfig({
  displayName: 'ContentContainer',
})`
  ${ContentContainer}
`

const PageContent = ({ children }) => (
  <ContainerWrapper>
    <StyledDiv>{children}</StyledDiv>
  </ContainerWrapper>
)

export default PageContent
