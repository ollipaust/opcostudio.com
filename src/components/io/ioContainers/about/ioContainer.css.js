import styled from 'styled-components'
import { accent } from 'constants/colors'
import { rasterStaggers } from 'constants/animations'

export const IoAboutIntroContainer = styled.div`
  place-content: center;
  flex-direction: column;
  height: 90vh;
`

export const IoAboutTextContainer = styled.div`

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease;

  &.about-text {
    margin-top: 200px; 

    h6 {
      margin-bottom: 75px;
    }

    .flexbox {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      p {
        text-align: justify;
        flex: 0 0 47.5%;

        > span {
          font-family: Arial, sans-serif;
          font-weight: 500;
        }
      }
    }
  }

  &.marquee-text {
    position: relative;
    height: 100vh;
    flex-direction: column;
  
    
    [class*='Divider'] {
      margin: 50px 0;
      align-self: center;
    }
  }

  &.statement {
    padding: 100px 0;
  }

  &.reasons {
    flex-direction: row;
    justify-content: space-between;

    .title {
      margin-bottom: 50px;
    }

    div {
      &:nth-of-type(1) {
        flex: 0 0 20%; 
      }
      &:nth-of-type(2) {
        flex: 0 0 70%; 
      }
    }

    ul > li {
      display: flex;
      flex-direction: row;
      justify-content: space-between
      padding-top: 25px;
      padding-bottom: 100px;
      border-top: 2px solid ${accent};

      .number {
        flex: 0 0 10%;
        > span { color: ${accent}; }
      }
      .title  {
        flex: 0 0 60%;
      }
      .text {
        flex: 1 0 0;
      }
    }
  }
`

export const IoRasterContainer = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 100px;

  .raster-container {
    position: relative;
    z-index: -1;
    width: calc(91.66667vw + 1px);
    left: -2.5rem;
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
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-25%);
    width: 100%;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 500ms ease
      ${({ isVisible }) => (isVisible ? '1.2s' : '0.5s')};
    will-change: opacity;
  }
  .portrait-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-20%);
    width: 100%;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 500ms ease
      ${({ isVisible }) => (isVisible ? '1.5s' : '0.5s')};
    will-change: opacity;
  }
`
