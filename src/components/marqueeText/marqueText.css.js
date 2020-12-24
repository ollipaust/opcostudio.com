import styled from 'styled-components'
import { darkest, accent } from 'constants/colors'

export const Container = styled.section.withConfig({
  displayName: 'Marquee-Text-Container',
})`
  position: relative;
  height: 100%;
  width: 100vw;

  h1 {
    display: inline-block !important;
    white-space: nowrap;
    font-size: 6rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 1.5rem;
    padding: 0;
    white-space: nowrap;
    color: transparent !important;
    transition: color 500ms ease;
    -webkit-text-stroke: 2px ${darkest} !important;

    &:first-of-type {
      margin-left: 0.5rem !important;
    }
    &:last-of-type {
      margin-right: 0.5rem !important;
    }
    &:hover {
      color: ${accent}!important;
      transition: color 500ms ease;
      cursor: grab;
    }
  }

  .ticker__element {
    display: inline-block !important;
    width: fit-content;
    white-space: nowrap;
    margin: 0;
    padding: 0;
  }
`
