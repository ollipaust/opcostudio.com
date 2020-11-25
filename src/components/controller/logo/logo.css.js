import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import * as color from 'constants/colors'

export const ContainerDark = styled.figure.withConfig({
  displayName: 'LogoDark',
})`
  padding-left: 2.5rem;
  z-index: 100;
  pointer-events: all;

  svg {
    width: 48px;
    height: 48px;
    transform: scale(1) translateZ(0);
    transition: transform 300ms ease 50ms;

    .a {
      fill: ${color.dark66};
    }
    .b {
      fill: ${color.accent};
    }

    :hover {
      transform: scale(1.025);
      transition: transform 300ms ease 50ms;
    }
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      top: 2em;
      left: 1.25em;
      
        svg {
          width: 48px;
          height: 48px;
        }
  `}
`

export const ContainerLight = styled.figure.withConfig({
  displayName: 'LogoLight',
})`
  padding-left: 2.5rem;
  z-index: 10000;
  pointer-events: none;

  svg {
    width: 48px;
    height: 48px;
    transform: scale(1);
    transition: transform 300ms ease 50ms;
    .a {
      fill: ${color.light};
    }
    .b:nth-of-type(5) {
      fill: ${color.light};
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 200ms;
    }
    .b:nth-of-type(8) {
      fill: ${color.light};
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 400ms;
    }
    .b:nth-of-type(7) {
      fill: ${color.light};
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 600ms;
    }
    .b:nth-of-type(6) {
      fill: ${color.light};
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 800ms;
    }
  }
  :hover svg {
    .b:nth-of-type(5) {
      fill: transparent;
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 200ms;
    }
    .b:nth-of-type(8) {
      fill: transparent;
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 400ms;
    }
    .b:nth-of-type(7) {
      fill: transparent;
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 600ms;
    }
    .b:nth-of-type(6) {
      fill: transparent;
      stroke: ${color.light};
      stroke-width: 0.9px;
      transition: all 250ms ease-in 800ms;
    }
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      top: 2em;
      left: 1.25em;

      svg {
        width: 48px;
        height: 48px;
        transform: scale(1);
        transition: transform 300ms ease 50ms;
          .a {
            fill: ${color.light};
          }
          .b {
            fill: ${color.light};
          }
      }

      :hover svg {
        transform: scale(1.05);
        transition: transform 300ms ease 50ms;
      }
    `}
`
