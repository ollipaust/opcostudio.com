import styled from 'styled-components'
import { accent, light } from 'constants/colors'

export const LoaderContainer = styled.div.withConfig({
  displayName: 'LoaderContainer',
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  display: flex;
  place-items: center;
  width: 100%;
  height: 100%;
  background: ${accent};
  color: ${light};
  text-align: center;

  &.loading {
    transform: translateY(0%);
    transition: transform 600ms ease 0ms;
  }
  &.loading-done {
    transform: translateY(-100%);
    transition: transform 600ms ease-out 1000ms;
  }
`

export const Cell = styled.div.withConfig({ displayName: 'LoaderCell' })`
  position: relative;
  flex-basis: 100%;
  padding: 1.5em;
  place-items: center;

  [class*='LogoSvg'] {
    margin: 0 auto;
    opacity: 1;
    width: 100px;
    pointer-events: none;

    span.animatedLogo {
      opacity: 1 !important;
    }
  }
`
