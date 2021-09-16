import styled from 'styled-components'
import { light, light33, light66 } from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'AboutContainer',
})`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 150px 7.5rem;
  background: transparent;
  color: ${light};
  pointer-events: none;

  &.active {
    opacity: 1;
    transition: opacity 500ms ease;
  }
  &.inactive {
    opacity: 0;
    transition: opacity 500ms ease;
  }
`
