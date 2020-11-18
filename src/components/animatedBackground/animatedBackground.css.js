import styled from 'styled-components'

export const VantaContainer = styled.div.withConfig({
  displayName: 'AnimatedBackground',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.33;
`
