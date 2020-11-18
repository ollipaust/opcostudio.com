import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, light, dark, darkest, darker2, black } from 'constants/colors'

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
  z-index: 100;
  text-align: center;

  h1 {
    > span {
      display: block;
      color: transparent;
      -webkit-text-stroke: 3px ${darker2};
    }
  }

  h2 {
    color: ${dark};
    display: block;
  }
`
