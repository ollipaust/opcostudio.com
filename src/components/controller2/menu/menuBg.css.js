import styled from 'styled-components'
import { accentDeep } from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div.withConfig({
  displayName: 'MenuOverlayBackground',
})`
  position: absolute;
  width: 100vw;
  height: 200vh;
  overflow: hidden;
  opacity: 0.8;
  outline: 0;
  background-size: cover;
  background-position: center;
  pointer-events: none;
  transform: translateX(0) translateY(0%) scale(2);
  transition: transform 0 0;

  .bg {
    background: ${accentDeep};
    filter: saturate(1.5);
    width: 100vw;
    height: 100vh;
    transform: translateY(-100%);
    transition: transform 1s ease-out 1s;
  }

  &.active {
    transform: translateX(0) translateY(0%) scale(2);
    transition: transform 0 0;

    .bg {
      transform: translateY(0%);
      transition: transform 1s ease-in 100ms;
      will-change: transform;
    }
  }
`
