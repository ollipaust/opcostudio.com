import styled from 'styled-components'
import { accent } from 'constants/colors'
import { rasterStaggers } from 'constants/animations'

export const IoAboutTextContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease;

  .title {
    > span {
      color: ${accent};
    }
  }

  .text {
    margin-bottom: 2rem;
  }

  &.aqua-text {
    flex-direction: column;
    padding: 50px 0;

    .quote {
      width: 50%;
      align-self: center;
    }
  }

  &.love-text {
    flex-direction: column;
    p {
      font-size: 1.5rem;
      text-align: justify;
      width: 50%;
      align-self: center;
    }
  }

  &.marquee-text {
    position: relative;
    min-height: 75vh;
    flex-direction: column;
    padding: 50px 0;

    [class*='Divider'] {
      margin: 0 0 50px 0;
      align-self: center;
    }
  }

  &.statement {
    padding: 50px 0;
  }

  &.raster-text {
    position: relative;
    height: 100vh;

    .raster-container {
      position: relative;
      z-index: -1;
      width: calc(91.66667vw + 1px);
      left: -2.5rem;

      @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
        left: -1.5rem;
      }
    }
    .raster-v-container {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .raster-line-v {
      width: 1px;
      display: inline-block;
      height: 100%;
      margin-right: calc(2.08333vw - 1px);
      transform: ${({ isVisible }) =>
        isVisible
          ? 'matrix(1, 0, 0, 1, 0, 0) scale(1, 1)'
          : 'matrix(1, 0, 0, 1, 0, 0) scale(1, 0)'};
      transition: transform 1s ease-in-out;
      will-change: transform;
    }
    .raster-line-h {
      width: 100%;
      height: 1px;
      margin-bottom: calc(2.08333vw - 1px);
      transform: ${({ isVisible }) =>
        isVisible
          ? 'matrix(1, 0, 0, 1, 0, 0) scale(1, 1)'
          : 'matrix(1, 0, 0, 1, 0, 0) scale(0, 1)'};
      transition: transform 0.75s ease-in-out;
      will-change: transform;
    }
    .raster-line-h,
    .raster-line-v {
      position: relative;
      background-color: ${accent};
      opacity: 1;
    }

    .raster-line-v:last-of-type {
      margin-right: -1px;
    }
    .raster-line-h:last-of-type {
      margin-bottom: -1px;
    }

    ${rasterStaggers}

    .raster-text-container {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .portrait-container {
        flex-basis: 40%;
        height: 800px;
        overflow: hidden;
        opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
        transition: opacity 500ms ease
          ${({ isVisible }) => (isVisible ? '1.2s' : '0s')};
        will-change: opacity;

        @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
        }
      }
      .raster-text {
        flex-basis: 50%;
        padding-top: 75px;
        opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
        transition: opacity 500ms ease
          ${({ isVisible }) => (isVisible ? '1.4s' : '0s')};
        will-change: opacity;

        p {
          font-size: 1.5rem;
          text-align: justify;
        }
      }
    }
  }
`
