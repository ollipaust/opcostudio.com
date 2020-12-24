import styled from 'styled-components'
import { accent } from 'constants/colors'
import { rasterStaggers } from 'constants/animations'

export const IoAboutIntroContainer = styled.div`
  place-content: center;
  flex-direction: column;
  height: 90vh;
`

export const IoAboutTextContainer = styled.div`
  flex-direction: column;
  padding: 100px 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease;

  [class*='Divider'] {
    margin: 50px 0;
    align-self: center;
  }
`

export const IoRasterContainer = styled.div`
  position: relative;
  flex-direction: column;
  place-content: center space-between;
  min-height: 100vh;
  width: calc(100vw - 15rem);
  margin: 0 auto;

  .raster-container {
    position: absolute;
    z-index: -1;
    top: 100px;
    width: 100%;
    height: auto;
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

  .raster-text {
    flex-direction: column;
    opacity: ${({ hasBeenVisible }) => (hasBeenVisible ? 1 : 0)};
    transition: opacity 500ms ease 1.2s;
    will-change: opacity;
  }
  .portrait-container {
    opacity: ${({ hasBeenVisible }) => (hasBeenVisible ? 1 : 0)};
    transition: opacity 500ms ease 1.5s;
    will-change: opacity;
  }
`
