import styled from 'styled-components'

export const Text = styled.span.withConfig({
  displayName: 'Title',
})`

  margin-bottom: 4rem;

  @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
    margin-bottom: 3rem;
  }

  > span {
    font-family: Campton;
    line-height: 1em;
    pointer-events: all;
    display: block;

    font-weight: ${({ size }) => () => {
      switch (size) {
        case 'super':
          return '800'
        case 'larger':
          return '700'
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
          return '7.25rem'
        case 'larger':
          return '6rem'
        case 'large':
          return '3.5rem'
        case 'medium':
          return '2rem'
        default:
          return '1.3rem'
      }
    }};

    @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
      font-weight: ${({ size }) => () => {
        switch (size) {
          case 'super':
            return '800'
          case 'larger':
            return '700'
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
            return '2.8rem'
          case 'larger':
            return '2.4rem'
          case 'large':
            return '2rem'
          case 'medium':
            return '1.4rem'
          default:
            return '1rem'
        }
      }};
}

@media (min-height: 813px) and (max-height: 1366px) and (min-width: 415px) and (max-width: 1024px) and (orientation: portrait) {
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'super':
        return '800'
      case 'larger':
        return '700'
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
        return '6rem'
      case 'larger':
        return '4rem'
      case 'large':
        return '2rem'
      case 'medium':
        return '1.25rem'
      default:
        return '1rem'
    }
  }};
}
`
