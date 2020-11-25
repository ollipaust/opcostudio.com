import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, light, dark, glass, dark75, black } from 'constants/colors'
import { shine } from 'constants/animations'

export const HeroContainer = styled.section.withConfig({
  displayName: 'HeroContainer',
})`
  position: relative;
  overflow: hidden;
`

export const HeroTextContainer = styled.div.withConfig({
  displayName: 'HeroTextContainer',
})`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  pointer-events: none !important;

  h1 > span {
    text-transform: uppercase;
    display: block;
    color: ${glass};
    -webkit-text-stroke: 3px ${dark75};
    pointer-events: none !important;
    ${shine}
  }

  h2 > span {
    color: ${dark75};
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  p > span {
    margin-bottom: 1.5rem;
  }
`
