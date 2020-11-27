import styled from 'styled-components'
import { cloudImg } from 'constants/images'

export const LangSwitch = styled.button.withConfig({
  displayName: 'LangSwitch',
})`
  height: 18px;
  width: 32px;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: transform 300ms ease;

  &:nth-of-type(2) {
    margin-left: 1em;
  }

  &.de {
    background-image: url(${cloudImg.de});
    background-size: cover;
    background-position: center center;
  }
  &.en {
    background-image: url(${cloudImg.en});
    background-size: cover;
    background-position: center center;
  }
`
