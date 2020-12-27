import React from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import {
  light,
  accentGradient150,
  light33,
  light90,
  alter50,
  textDark,
} from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

const OverlayContainer = ({ className, children }) => (
  <Div100vh className={className}>{children}</Div100vh>
)

export const OverlayContent = styled(OverlayContainer).withConfig({
  displayName: 'MenuContent',
})`
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  pointer-events: none;
  z-index: 1000;
  will-change: transform, opacity;

  [class*='LogoSvgAnimated'] {
    position: absolute;
    z-index: 10000;
    opacity: 0.66;
    width: calc(50% - 5em);
    top: 50%;
    transform: translateY(-50%);
    left: 12.5%;
    pointer-events: none;

    @media (max-width: 1366px) and (max-height: 1024px) and (orientation: landscape) {
      width: 37.5%;
      left: 7.5em;
    }
    @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
      display: none;
    }

    span.animatedLogo {
      opacity: 0 !important;
      transition: opacity 500ms ease 1000ms;
      svg {
        stroke: ${light33};
        stroke-width: 2px;
        fill: none;
        transition: stroke 500ms ease-out 500ms;
      }
    }
  }
  &.inactive {
    [class*='LogoLight'] {
      pointer-events: none;
      opacity: 0;
      transition: opacity 375ms ease 1075ms;
    }
    [class*='LogoSvgAnimated'] {
      span.animatedLogo {
        opacity: 0 !important;
        transition: opacity 375ms ease 500ms;
      }
    }
  }

  &.active {
    z-index: 1000;
    pointer-events: all;

    nav a {
      pointer-events: all;
    }

    [class*='OverlayBackground'] {
      transform: translate3d(0px, 0%, 0px);
      transition: transform 400ms ease 150ms;
      will-change: transform;
    }

    [class*='LogoSvgAnimated'] {
      span.animatedLogo {
        opacity: 1 !important;
        transition: opacity 500ms ease 700ms;
      }
    }
    [class*='OverlayBoxLeft'] {
      pointer-events: all;
      opacity: 1;
      transform: translateY(0) translateZ(0);
      transition: all 500ms ease-in 1100ms;
    }
    [class*='OverlayBoxRight'] {
      pointer-events: all;
      ul li {
        &:nth-of-type(1) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1350ms;
        }
        &:nth-of-type(2) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1450ms;
        }
        &:nth-of-type(3) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1550ms;
        }
        &:nth-of-type(4) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1650ms;
        }
      }
    }
    [class*='LogoLight'] {
      pointer-events: all;
      opacity: 1;
      transition: opacity 500ms ease 150ms;
    }
    [class*='MenuButton'] {
      pointer-events: all;
      opacity: 1;
      transition: opacity 500ms ease 150ms;
    }

    [class*='NavLinks'] li:nth-child(1) [class*='LinkContainer'] {
      opacity: 1;

      transition: all 375ms ease-in 500ms;
    }
    [class*='NavLinks'] li:nth-child(2) [class*='LinkContainer'] {
      opacity: 1;

      transition: all 375ms ease-in 600ms;
    }
    [class*='NavLinks'] li:nth-child(3) [class*='LinkContainer'] {
      opacity: 1;

      transition: all 375ms ease-in 700ms;
    }
    [class*='NavLinks'] li:nth-child(4) [class*='LinkContainer'] {
      opacity: 1;

      transition: all 375ms ease-in 800ms;
    }
    [class*='OverlayNav'] li:nth-child(5) [class*='LinkContainer'] {
      opacity: 1;

      transition: all 375ms ease-in 900ms;
    }
  }
`
export const OverlayBg = styled.div.withConfig({
  displayName: 'OverlayBackground',
})`
  position: relative;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  opacity: 0.97;
  outline: 0;
  background: ${accentGradient150};
  background-size: cover;
  background-position: center;
  transform: translate3d(0px, -100%, 0px);
  transition: transform 375ms ease-in-out 875ms;
`

export const MenuButton = styled.button.withConfig({
  displayName: 'MenuButton',
})`
  height: 48px;
  width: 48px;
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  border: none;
  outline: none;
  z-index: 10000;
  margin-top: -0.5rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: transparent;
  transition: transform 300ms ease-in 150ms;

  @media (min-width: 1280px) {
    &:hover :after {
      transform: translateX(1.4em);
    }
    &:hover :before {
      transform: translateX(-1.4em);
    }
  }

  span,
  span:after,
  span:before {
    pointer-events: none;
    display: block;
    content: '';
    width: 4em;
    border-radius: 0.25em;
    background-color: ${textDark};
    height: 0.495em;
    position: absolute;
    transform: rotate(0);
    transition: top 500ms ease 0ms, left 500ms ease 0ms,
      transform 500ms ease 0ms, background-color 500ms ease 1075ms;
  }
  span:after,
  span:before {
    width: 2.6em;
  }

  &.active {
    span,
    span:after,
    span:before {
      background-color: ${light};
      transition: 500ms background-color 100ms, 200ms top, 200ms left,
        200ms transform;
      transition-delay: 0;
    }
    span:after,
    span:before {
      left: -0.7em;
      top: 0px;
    }
    span:after {
      top: 0.76em;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    span:before {
      top: -0.76em;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
    transform: scale(0.80);
    margin-top: 0.5rem;
  `}
`

export const MenuLines = styled.span.withConfig({
  displayName: 'MenuLines',
})`
  margin-top: -0.133em;

  :after {
    left: 0;
    transform: translateX(0);
    top: -1.25em;
  }
  :before {
    left: 1.4em;
    transform: translateX(0);
    top: 1.25em;
  }
`

export const OverlayNav = styled.nav.withConfig({
  displayName: 'OverlayNav',
})`
  display: flex;
  align-items: center;
  position: absolute;
  width: auto;
  height: 100%;
  top: 0;
  right: 12.5%;
  opacity: 1;
  transition: opacity 1s;
  z-index: 10000;
  pointer-events: none;

  @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
    justify-content: center;
    width: 100%;
    right: 0;
  }

  @media (max-width: 1366px) and (max-height: 1024px) and (orientation: landscape) {
    justify-content: center;
    width: 100%;
    right: 0;
  }

  ul {
    li:nth-child(1) [class*='LinkContainer'] {
      opacity: 0;
      transition: all 375ms ease-out 600ms;
    }
    li:nth-child(2) [class*='LinkContainer'] {
      opacity: 0;
      transition: all 375ms ease-out 500ms;
    }
    li:nth-child(3) [class*='LinkContainer'] {
      opacity: 0;
      transition: all 375ms ease-out 400ms;
    }
    li:nth-child(4) [class*='LinkContainer'] {
      opacity: 0;
      transition: all 375ms ease-out 300ms;
    }
    li:nth-child(5) [class*='LinkContainer'] {
      opacity: 0;
      transition: all 375ms ease-out 200ms;
    }
  }
`

export const OverlaySvg = styled.div.withConfig({
  displayName: 'OverlaySvg',
})`
position: absolute;
z-index: 10000;
width: 50vw;
top: 0;
left: 0;
pointer-events: none;

  span.animatedLogo {
    opacity: 0!important;
    transition: opacity 500ms ease 100ms;
      svg {
        stroke: ${light33};
        stroke-width: 2px
        fill: none;
        transition: stroke 500ms ease-out 500ms;
      }
  }

${MEDIA.PHONE &&
  MEDIA.TABLET`
  position: absolute;
  z-index: 10000;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
`}

`
export const LogoContainer = styled.div.withConfig({
  displayName: 'LogoContainer',
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100px + 2.5em);
  z-index: 10000;
  width: 100%;
  pointer-events: none;

  [class*='LogoLight'] {
    margin-right: 2.5rem;
  }

  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    [class*='LogoLight'] {
      margin-right: 1.5rem;
    }
  }
`

export const OverlayBoxLeft = styled.div.withConfig({
  displayName: 'OverlayBoxLeft',
})`
  font-family: Arial, Helvetica, sans-serif;;
  font-size: 1rem;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: 10000;
  bottom: 2.5em;
  left: 2.5em;
  color: ${light};
  opacity: 0;
  transform: translateY(-50%);
  transition: all 500ms ease-out 100ms;
    > strong {
      font-family: Campton;
      font-weight: 600;
      text-transform: uppercase;
    }

    > span {
      font-size: 0.75rem;
    }

    @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
      text-align: center;
      bottom: 1rem;
      left: 0;
      right: 0;
      width: 100%;
      font-size: 0.75rem; 
    }

    @media (min-height: 824px) and (max-height: 1366px) and 
    (min-width: 451px) and (max-width: 1024px) and 
    (orientation: portrait) {
      text-align: center;
      bottom: 1rem;
      right: 0;
      left: 0
      width: 100%;
    }

    @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
      display: none;
    }
`
export const OverlayBoxRight = styled.div.withConfig({
  displayName: 'OverlayBoxRight',
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: 10000;
  bottom: 2.5em;
  right: 2.5em;
  color: ${light};

  ul {
    margin-bottom: 0;
    li {
      width: 30px;
      height: 30px;
      margin-right: 1em;
      border-color: ${light90};
      opacity: 0;
      transform: translateY(-50%);
      transition: all 500ms ease-out 100ms;

      ::after {
        background: ${alter50};
      }
      &:hover::after {
        background: ${alter50};
      }
      svg {
        fill: ${light90};
      }
    }
  }

  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    bottom: 4rem;
    right: 0;
    width: 100%;
    ul {
      li {
        width: 25px;
        height: 25px;
        margin-right: 1.5em;
        border-color: ${light90};
      }
    }
  }

  @media (min-height: 824px) and (max-height: 1366px) and (min-width: 451px) and (max-width: 1024px) and (orientation: portrait) {
    bottom: 4rem;
    right: 0 !important;
    left: 0 !important;
    width: 100%;
  }

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    display: none;
    ul {
      li {
        width: 20px;
        height: 20px;
        margin-right: 1em;
        border-color: ${light90};
      }
    }
  }
`
