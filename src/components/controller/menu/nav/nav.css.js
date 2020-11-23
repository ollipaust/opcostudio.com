import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { light, light33, alter66 } from 'constants/colors'

export const Container = styled.ul.withConfig({
  displayName: 'NavLinks',
})`
  list-style: none;
  text-align: right;
  height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -2.5rem;

  @media (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait) {
    text-align: center;
    margin-top: -5vh;
  }
  @media (max-height: 1024px) and (max-width: 1366px) and (orientation: landscape) {
    text-align: center;
    margin-top: -7vh;
  }

  li {
    list-style: none;
    line-height: normal;
    overflow: hidden;
    margin-bottom: -2.5vmax;

    @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
      margin-bottom: 1vh;
      line-height: 2;

      &:last-child {
        margin-bottom: 0;
      }
      a {
        font-size: 6vh !important;
      }
    }

    @media (min-height: 824px) and (min-width: 451px) and (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
      margin-bottom: 1vh;
      line-height: 2;

      &:last-child {
        margin-bottom: 0;
      }
      a {
        font-size: 8.125vh !important;
      }
    }

    @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
      margin-bottom: 0;

      &:last-child {
        margin-bottom: 0;
      }
      a {
        font-size: 6vw !important;
      }
    }

    @media (min-width: 824px) and (min-height: 451px) and (max-width: 1366px) and (max-height: 1024px) and (orientation: landscape) {
      margin-bottom: 1vw;

      &:last-child {
        margin-bottom: 0;
      }
      a {
        font-size: 8.125vw !important;
      }
    }

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

  li a {
    display: block;
    position: relative;
    font-size: 8.25vw;
    font-weight: 800;
    text-transform: uppercase;
    color: transparent;
    transition: color 300ms cubic-bezier(0.165, 0.8, 0.45, 1) 150ms;
    -webkit-text-stroke: 0.02em ${light};
    transform: scale(1, 0.9);

    > span {
      font-family: Campton;
    }

    :hover {
      color: ${alter66};
      transform: scale(1, 0.9);
      transition: color 500ms cubic-bezier(0.165, 0.8, 0.45, 1) 150ms;
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
  }
`
export const LinkContainer = styled.div.withConfig({
  displayName: 'LinkContainer',
})``
