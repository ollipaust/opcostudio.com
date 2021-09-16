import styled from 'styled-components'

export const Container = styled.div.withConfig({
  displayName: 'accordion-container',
})`
  position: relative;
  width: 100%;
  min-height: 25vh;
  border: 1px solid black;

  .toggle {
      padding: 2.5rem;
      text-align: right;
      border-bottom: 1px solid black;
  }

  section {
      padding: 2.5rem;
      height: 100%;

      &.open {
          transform: scaleY(1);
          transition: transform 500ms ease;
      }
      &.close {
        transform: scaleY(0);
        transition: transform 500ms ease;
    }
  }
`
