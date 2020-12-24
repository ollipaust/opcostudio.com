import styled from 'styled-components'

export const Container = styled.header.withConfig({
  displayName: 'AppController',
})`
  width: 100%;
  height: calc(100px + 2.5em);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  pointer-events: none;

  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    height: 75px;

    [class*='LogoDark'],
    [class*='LogoLight'] {
      padding-left: 1rem;
      padding-top: 1rem;
    }
    [class*='LogoContainer'] {
      height: 75px !important;
    }
    [class*='ControlsContainer'] {
      height: 75px;
      padding-right: 1rem;
    }
  }

  @media (min-height: 824px) and (max-height: 1366px) and (min-width: 451px) and (max-width: 1024px) and (orientation: portrait) {
    height: 100px;

    [class*='LogoDark'],
    [class*='LogoLight'] {
      padding-left: 2rem;
      padding-top: 2rem;
    }
    [class*='LogoContainer'] {
      height: 150px !important;
    }
    [class*='ControlsContainer'] {
      padding-right: 2rem;
      padding-top: 2rem;
    }
  }

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    height: 75px;

    [class*='LogoDark'],
    [class*='LogoLight'] {
      padding-left: 1rem;
    }
    [class*='LogoContainer'] {
      height: 75px !important;
    }
    [class*='ControlsContainer'] {
      padding-right: 1rem;
      margin-top: -1rem;
    }
  }

  @media (min-width: 824px) and (max-width: 1366px) and (min-height: 451px) and (max-height: 1024px) and (orientation: landscape) {
    height: 150px;

    [class*='LogoDark'],
    [class*='LogoLight'] {
      padding-left: 1rem;
    }
    [class*='LogoContainer'] {
      height: 150px !important;
    }
    [class*='ControlsContainer'] {
      padding-right: 1.5rem;
    }
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  &:nth-of-type(n + 3) {
    opacity: 0 !important;
  }
  &.enter-active {
    opacity: 0 !important;
  }
  &.enter-done {
    opacity: 1 !important;
  }
`

export const Content = styled.header.withConfig({
  displayName: 'AppControllerContent',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: auto;
  height: 100%;
  padding: 0 calc(2.5rem + 16px) 0 2.5rem;
`
