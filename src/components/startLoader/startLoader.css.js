import styled from 'styled-components'
import { accentGradient150, light } from 'constants/colors'

export const LoaderContainer = styled.div.withConfig({
  displayName: 'LoaderContainer',
})`
  position: absolute;
  z-index: 100000;
  display: flex;
  place-items: center;
  width: 100%;
  height: 100%;
  background: ${accentGradient150};
  color: ${light};
  text-align: center;
  overflow: hidden;

  &.loading-done {
    transform: translateY(-100%);
    transition: transform 600ms ease-out 1000ms;
  }

  [class*='LogoSvg'] {
    width: 100px;
    margin: 0 auto;
    pointer-events: none;

    &.loading-done {
      opacity: 0;
      transform: translateY(700%);
      transition: transform 500ms ease-out 1000ms, opacity 600ms ease-out 1000ms;
    }
  }
`
