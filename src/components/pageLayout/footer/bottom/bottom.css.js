import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import {
  lighter,
  light,
  accent,
  darker,
  darkest,
  black,
} from 'constants/colors'

export const ContainerBottom = styled.div.withConfig({
  displayName: 'FooterBottom',
})`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: ${darker};
  .copyright {
    color: ${lighter};
    font-size: 1em;
    ${MEDIA.PHONE`
          font-size: 0.75em;
        `}
    @media (max-width: 768px) and (orientation: landscape) {
      font-size: 0.75em;
    }
  }
`
