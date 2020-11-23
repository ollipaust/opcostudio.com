import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, dark, dark33, light } from 'constants/colors'

export const Container = styled.section.withConfig({
  displayName: 'PaginationContainer',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  z-index: 10;
  width: 100vw;
  height: 25vh;
  margin-top: 50px;
  overflow-x: hidden;
`
export const Content = styled.div.withConfig({
  displayName: 'PaginationContent',
})`
  font-family: Campton;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0;

  a {
    display: block;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    transition: color 500ms cubic-bezier(0.165, 0.8, 0.45, 1) 150ms;
    -webkit-text-stroke: 1.5px ${dark};
    perspective: 35vw;

    @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
      -webkit-text-stroke: 1px ${dark};
    }

    @media (max-height: 450px) and (max-width: 823px) and (orientation: landscape) {
      -webkit-text-stroke: 1px ${dark};
    }

    h3 {
      transition: transform 300ms ease 50ms;
    }

    :hover {
      color: ${dark33};
      transition: color 1s cubic-bezier(0.165, 0.8, 0.45, 1) 150ms;

      h3.left {
        transform: translateX(-10px);
        transition: transform 300ms ease 50ms;
      }
      h3.right {
        transform: translateX(10px);
        transition: transform 300ms ease 50ms;
      }
    }

    h3 > span {
      font-weight: 800 !important;
      margin: 0 2.5vw;

      @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
        font-size: 1.125rem !important;
        margin: 0.5rem 3vw;
      }

      :nth-of-type(1) {
        text-align: left;
      }
      :nth-of-type(2) {
        text-align: right;
      }
    }
  }
  .prev {
    position: relative;
    p > span {
      position: absolute;
      top: -2.5vw;
      white-space: nowrap;
      left: 2.5vw;
      font-size: 1.5vmax;
      font-weight: 700;
      ${MEDIA.PHONE`
        top: -2.5vw;    
        `}
    }
  }
  .next {
    position: relative;
    p > span {
      position: absolute;
      top: -2.5vw;
      white-space: nowrap;
      right: 2.5vw;
      font-size: 1.5vmax;
      font-weight: 700;
      ${MEDIA.PHONE`
        top: -2.5vw;    
        `}
    }
  }
`
