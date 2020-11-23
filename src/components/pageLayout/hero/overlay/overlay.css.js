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

  img,
  a {
    margin-right: 2em;
    pointer-events: all;

    :last-child {
      margin-right: 0;
    }
    :nth-of-type(1),
    :nth-of-type(2) {
      height: 33px;
    }
    :nth-of-type(3) {
      width: 53px;
    }
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    margin-bottom: 0;
    a {
      margin-right: 0 !important;
      > img {
        transform: scale(0.66) !important;
      }
      &:nth-of-type(2) > img {
        margin-right: 5px !important;
      }
      &:nth-of-type(n + 3) > img {
        margin-left: -10px !important;
      }
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

        :last-child {
          margin-right: 0;
        }
        :nth-of-type(1),
        :nth-of-type(2) {
          height: 25px;
        }
        :nth-of-type(3) {
          width: 30px;
        }
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
