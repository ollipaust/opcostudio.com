import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

import De from '../../images/de.jpg'
import Eng from '../../images/eng.jpg'

export const LangSwitch = styled.button.withConfig({
  displayName: 'LangSwitch',
})`
  height: 18px;
  width: 32px;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease;

  &:nth-of-type(2) {
    margin-left: 1em;
  }

  &.de {
    background-image: url(${De});
    background-size: cover;
    background-position: center center;
  }
  &.en {
    background-image: url(${Eng});
    background-size: cover;
    background-position: center center;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 300ms ease;
  }
`
