import styled from 'styled-components'
import { light, light90, alter50 } from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'MenuBoxContainer',
})`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.active {
    [class*='MenuBoxLeft'] {
      pointer-events: all;
      opacity: 1;
      transform: translateY(0) translateZ(0);
      transition: all 500ms ease-in 1100ms;
    }
    [class*='MenuBoxRight'] {
      pointer-events: all;
      ul li {
        &:nth-of-type(1) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1050ms;
        }
        &:nth-of-type(2) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1150ms;
        }
        &:nth-of-type(3) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1250ms;
        }
        &:nth-of-type(4) {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: all 500ms ease-in 1450ms;
        }
      }
    }
  }
`

export const MenuBoxLeft = styled.div.withConfig({
  displayName: 'MenuBoxLeft',
})`
    font-family: Montserrat;
    font-size: 1rem;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
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
export const MenuBoxRight = styled.div.withConfig({
  displayName: 'MenuBoxRight',
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
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
