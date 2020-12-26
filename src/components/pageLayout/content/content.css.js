import styled from 'styled-components'
import { textDark } from 'constants/colors'

export const ContainerWrapper = styled.section.withConfig({
  displayName: 'ContentWrapper',
})`
  position: relative;
  margin: 0 auto;
  z-index: 10;
  pointer-events: none;
  overflow: hidden;
  will-change: opacity;

  @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
  }
`

export const ContentContainer = `
position: relative;
height: 100%;
margin: 0;
padding: 150px 7.5rem;
pointer-events: all;

@media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
  padding: 2.5rem;

}

[class*='Title-'] {
  > span {
    color: ${textDark};
  }
}
`
