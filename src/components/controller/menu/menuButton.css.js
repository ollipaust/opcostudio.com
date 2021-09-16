import styled from 'styled-components'
import { light, accent } from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.nav.withConfig({
  displayName: 'MenuButtonContainer',
})`
  position: relative;
`

export const Button = styled.button.withConfig({
  displayName: 'MenuButton',
})`
  z-index: 10;
  height: 48px;
  width: 48px;
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  border: none;
  outline: none;
  margin-top: -0.5rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: transparent;
  transition: transform 300ms ease-in 150ms, visibility 100ms ease 50ms;

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
    background-color: ${accent};
    height: 0.495em;
    position: absolute;
    transform: rotate(0);
    transition: top 500ms ease 0ms, left 500ms ease 0ms,
      transform 500ms ease 0ms, background-color 375ms ease 850ms;
  }
  span:after,
  span:before {
    width: 2.6em;
  }

  &.deactivated {
    visibility: hidden !important;
    transition: visibility 100ms ease 50ms;
    pointer-events: none !important;
  }

  &.active {
    span,
    span:after,
    span:before {
      background-color: ${light};
      transition: background-color 500ms ease 350ms, 200ms top, 200ms left,
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
      transform: rotate(45deg);
    }
    span:before {
      top: -0.76em;

      transform: rotate(-45deg);
    }
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      transform: scale(0.80);
      margin-top: 0.5rem;
    `}
`

export const MenuButtonLines = styled.span.withConfig({
  displayName: 'MenuButtonLines',
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
