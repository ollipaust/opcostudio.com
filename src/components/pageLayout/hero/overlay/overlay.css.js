import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, neutral, dark33 } from 'constants/colors'

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
  width: calc(100% - 5em);
  height: 100%;
  padding: 0 2.5em;
  pointer-events: none !important;

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }

  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    > div {
      width: 100%;
    }
  }

  ${MEDIA.PHONE`
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
  `}
`

export const LogosContainer = styled.div.withConfig({
  displayName: 'HeroOverlayLogosBox',
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2vmax;
  width: 50%;

  img {
    &.html,
    &.css {
      width: 24px;
      height: 33px;
    }
    &.es6,
    &.react,
    &.gatsby {
      width: 50px;
      height: 33px;
    }
  }

  a {
    margin-right: 2rem;
    pointer-events: all;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    margin-bottom: 0;
    a {
      margin-right: 0 !important;
    }
  }
  ${MEDIA.PHONE`
  width: 100%;

    [class*='HeroOverlayLogosBoxMotion'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    img, a {
      margin-right: 0;
      pointer-events: all;
    }
  `}
`

export const NoticeBox = styled.div.withConfig({
  displayName: 'HeroOverlayText',
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  margin-bottom: 2vmax;
  text-align: right;
  font-size: 0.75rem;
  color: ${neutral};

  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    font-size: 0.45rem;
  }
  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 0.45rem;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    margin-bottom: 0.5rem;
  }
`
