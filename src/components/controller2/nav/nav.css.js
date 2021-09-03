import styled from 'styled-components'
import { light, light33, light66, accent } from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.nav.withConfig({
  displayName: 'NavLinksContainer',
})`
  position: absolute;
  top: 0;
  left: calc(5rem + 48px);
  width: 50%;
  height: 100%;
`
export const NavLinksAboutContainer = styled.div.withConfig({
  displayName: 'NavLinksAboutContainer',
})`
  position: fixed;
  z-index: 1000;
  display: inline-block;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;

  &.active {
    opacity: 0.85;
    transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 250ms;
    pointer-events: all !important;
  }

  &.inactive {
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    pointer-events: none !important;
  }

  .close {
    position: fixed;
    background: none;
    outline: none;
    border: none;
    z-index: 10000;
    top: 2.5rem;
    left: 2.5rem;
    width: 50px;
    height: 50px;
    opacity: 0;
    font-size: 12px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    border: none;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: transparent;
    transform: rotate(45deg);
    transition: transform 300ms ease-in 150ms, visibility 100ms ease 50ms,
      opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    :hover {
      > span,
      span:after {
        background-color: ${accent}!important;
        transition: background-color 100ms ease 0ms;
      }
    }

    @media (min-width: 1280px) {
      &:hover :after {
        transform: translateX(1.4em);
      }
    }

    span,
    span:after {
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
    span:after {
      width: 4em;
    }

    &.active {
      opacity: 1;
      transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 250ms;

      span,
      span:after {
        background-color: ${light};
        transition: background-color 500ms ease 750ms, 200ms top, 200ms left,
          200ms transform;
        transition-delay: 0;
      }
      span:after {
        left: 0;
        top: 0px;
      }
      span:after {
        top: 0;
        transform: rotate(90deg);
      }
    }

    ${MEDIA.PHONE &&
      MEDIA.TABLET`
        transform: scale(0.80);
        margin-top: 0.5rem;
      `}
  }
`

export const Nav = styled.ul.withConfig({
  displayName: 'NavLinks',
})`
  position: relative;
  z-index: 999;
  list-style: none;
  text-align: right;
  width: auto;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -2.5rem;
  filter: blur(0px);
  transition: filter 500ms ease;

  &.blur {
    filter: blur(5px);
    transition: filter 500ms ease;
  }
  @media (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait) {
    text-align: center;
    margin-top: -5vh;
  }
  @media (max-height: 1024px) and (max-width: 1366px) and (orientation: landscape) {
    text-align: center;
    margin-top: -7vh;
  }

  &.inactive {
    li button {
      pointer-events: none;
    }

    li:nth-child(1) {
      opacity: 0;
      transition: opacity 375ms ease-out 750ms;
      pointer-events: none;
    }
    li:nth-child(2) {
      opacity: 0;
      transition: opacity 375ms ease-out 600ms;
      pointer-events: none;
    }
    li:nth-child(3) {
      opacity: 0;
      transition: opacity 375ms ease-out 450ms;
      pointer-events: none;
    }
    li:nth-child(4) {
      opacity: 0;
      transition: opacity 375ms ease-out 300ms;
      pointer-events: none;
    }
  }
  &.active {
    li button {
      pointer-events: all;
    }

    li:nth-child(1) {
      opacity: 1;
      transition: opacity 375ms ease-in 1.2s;
    }
    li:nth-child(2) {
      opacity: 1;
      transition: opacity 375ms ease-in 1.35s;
    }
    li:nth-child(3) {
      opacity: 1;
      transition: opacity 375ms ease-in 1.5s;
    }
    li:nth-child(4) {
      opacity: 1;
      transition: opacity 375ms ease-in 1.65s;
    }
  }

  li {
    list-style: none;
    line-height: normal;
    overflow: hidden;
    margin-bottom: -2.5vmax;

    :first-child a:before {
      content: attr(data-info);
      white-space: pre;
      margin-right: 0.75em;
      width: 200px;
      text-align: right;
      font-size: 1.25vw;
      font-weight: 500;
      -webkit-text-stroke: 0px;
      color: ${light33};
      pointer-events: none;
    }
  }

  li button {
    display: block;
    position: relative;
    font-size: 8.25vw;
    font-weight: 800;
    background: none;
    outline: 0;
    border: none;
    text-transform: uppercase;
    color: transparent;
    transition: color 300ms cubic-bezier(0.165, 0.8, 0.45, 1) 150ms;
    -webkit-text-stroke: 0.02em ${light};
    transform: scale(1, 0.9);

    a {
      color: transparent;
    }

    span {
      font-family: Campton;
    }

    :before {
      content: attr(data-info);
      white-space: pre;
      margin-right: 0.5em;
      width: 200px;
      text-align: right;
      font-size: 1.25vw;
      font-weight: 500;
      -webkit-text-stroke: 0px;
      color: ${light33};
      pointer-events: none;
    }

    :hover {
      color: ${light66};
      cursor: pointer;
      transform: scale(1, 0.9);
      transition: color 500ms cubic-bezier(0.165, 0.8, 0.45, 1) 150ms;
    }
  }
`
