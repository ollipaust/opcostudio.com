import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Text = styled.span.withConfig({
  displayName: 'Title',
})`
  > span {
    font-family: Campton;
    line-height: 1em;
    pointer-events: all;
    display: block;

    &.stroke {
      word-wrap: break-word;
      text-transform: uppercase;
      transition: color 500ms ease;
    }

    font-weight: ${({ size }) => () => {
      switch (size) {
        case 'super':
          return '800'
        case 'large':
          return '700'
        case 'medium':
          return '600'
        default:
          return '500'
      }
    }};
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'super':
          return '8rem'
        case 'large':
          return '4rem'
        case 'medium':
          return '2rem'
        default:
          return '1rem'
      }
    }};

    @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
      font-weight: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '800'
          case 'large':
            return '700'
          case 'medium':
            return '600'
          default:
            return '500'
        }
      }};
      font-size: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '2.5rem'
          case 'large':
            return '1.75rem'
          case 'medium':
            return '1.25rem'
          default:
            return '1rem'
        }
      }};
    }
    @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
      font-weight: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '800'
          case 'large':
            return '700'
          case 'medium':
            return '600'
          default:
            return '500'
        }
      }};
      font-size: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '2rem'
          case 'large':
            return '1.5rem'
          case 'medium':
            return '1.25rem'
          default:
            return '1rem'
        }
      }};
    }
    @media (min-height: 824px) and (min-width: 451px) and (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
      font-weight: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '800'
          case 'large':
            return '700'
          case 'medium':
            return '600'
          default:
            return '500'
        }
      }};
      font-size: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '3.5rem'
          case 'large':
            return '2.75rem'
          case 'medium':
            return '2rem'
          default:
            return '1rem'
        }
      }};
    }
    @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
      font-weight: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '800'
          case 'large':
            return '700'
          case 'medium':
            return '600'
          default:
            return '500'
        }
      }};
      font-size: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '3rem'
          case 'large':
            return '1.5rem'
          case 'medium':
            return '1.25rem'
          default:
            return '1rem'
        }
      }};
    }
  }
`
