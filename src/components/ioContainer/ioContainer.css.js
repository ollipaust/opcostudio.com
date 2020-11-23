import styled from 'styled-components'
import { accent, accentGradient150, dark, dark33 } from 'constants/colors'

export const Container = styled.div`
  background: ${accentGradient150};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease 0ms;
`
