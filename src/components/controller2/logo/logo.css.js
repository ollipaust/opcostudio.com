import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, darkBlue, pink, light, textDark } from 'constants/colors'

export const Container = styled.figure.withConfig({
  displayName: 'AppLogo',
})`
  position: relative;
  pointer-events: all;

  svg {
    fill: ${accent};
    width: 40px;
    height: 40px;
    transform: scale(1) translateZ(0);
    transition: transform 300ms ease 50ms, fill 500ms ease 950ms;

    #a stop {
      stop-color: ${darkBlue};
      transition: stop-color 500ms ease 950ms;
    }
    #b stop {
      stop-color: ${pink};
      transition: stop-color 500ms ease 950ms;
    }

    :hover {
      transform: scale(1.025);
      transition: transform 300ms ease 50ms;
    }

    &.active {
      fill: ${light}!important;
      transition: fill 500ms ease 950ms;

      #a stop {
        stop-color: ${darkBlue}!important;
        transition: stop-color 500ms ease 950ms;
      }
      #b stop:nth-of-type(1) {
        stop-color: ${light}!important;
        transition: stop-color 500ms ease 950ms;
      }
      #b stop:nth-of-type(2) {
        stop-color: ${darkBlue}!important;
        transition: stop-color 500ms ease 950ms;
      }
    }
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      top: 2em;
      left: 1.25em;
      
        svg {
          width: 40px;
          height: 40px;
          overflow: visible;
        }
  `}
`
export const SiteName = styled.span.withConfig({
  displayName: 'SiteName',
})`
  position: absolute;
  right: calc(2.5rem + 10px);
  height: 100%;
  top: 0;
  display: flex;
  white-space: nowrap;
  align-items: center;

  span {
    font-family: Campton;
    font-weight: bold;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${textDark};
    opacity: 0.66;
    transition: color 375ms ease 950ms;
  }

  &.active {
    span {
      color: ${light};
      transition: color 500ms ease 950ms;
    }
  }

  ${MEDIA.PHONE`
   display: none;
    `}
`
