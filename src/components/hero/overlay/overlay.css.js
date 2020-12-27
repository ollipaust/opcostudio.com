import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { neutral } from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'HeroOverlayContainer',
})`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: calc(100% - 5rem);
  height: 100%;
  padding: 0 2.5rem;
  pointer-events: none;

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }

  @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  ${MEDIA.PHONE`
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
  `}
`

export const LogosContainer = `

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2vmax;

  a {
    margin-right: 2rem;
    pointer-events: all;
  }

  @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
    justify-content: center;
    margin-bottom: 0;

    a {
      margin-right: 1rem;
      &:last-of-type {
        margin-right: 0;
      }
    }

    img {
      transform: scale(0.75)!important;
    }
  }

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    margin-bottom: 0;
    a {
      margin-right: 0 !important;
    }
  }
`

export const NoticeBox = `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2vmax;
  text-align: right;
  font-size: 0.75rem;
  color: ${neutral};

  a {
    pointer-events: all;
  }

  @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
    text-align: center;
  }

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    font-size: 0.45rem;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    margin-bottom: 0.5rem;
  }
`
