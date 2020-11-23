import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { light33, light, accent, darkest } from 'constants/colors'

export const Container = styled.ul.withConfig({
  displayName: 'Socials',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75em;
  li {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${accent};
    border-radius: 2px;
    width: 40px;
    height: 40px;
    margin-top: 0.5em;
    margin-right: 0.5em;
    overflow: hidden;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
      width: 27.5px;
      height: 27.5px;
    }
    ${MEDIA.TABLET`
    width: 35px;
    height: 35px;
    `}
    :hover {
      color: ${light};
      cursor: pointer !important;
      transition: all 300ms ease 100ms;
      svg {
        width: 32px;
        fill: ${light};
        transition: fill 200ms ease 0s;
      }
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${accent};
      z-index: -1;
      transform: translateY(-100%) translateZ(0);
      transition: transform 500ms ease-in-out 50ms;
    }
    :hover::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${accent};
      z-index: -1;
      transform: translateY(-50%) translateZ(0);
      transition: transform 500ms ease-in-out 0ms;
    }
    svg {
      width: 32px;
      fill: ${light33};
      transition: fill 200ms ease 200ms;
    }
  }
`
