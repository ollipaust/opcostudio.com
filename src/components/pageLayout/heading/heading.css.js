import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { dark, light, dark33, dark75, black } from 'constants/colors'
import shineImg from 'images/shine.png'

export const Container = styled.section.withConfig({
  displayName: 'PageHeadingContainer',
})`
  display: inline-flex;
  position: relative;
  top: 150px;
  z-index: 100;
  width: 100vw;
  height: calc(100vh - 300px);
  text-align: center;
  z-index: 1;
  overflow: hidden;

  @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
    top: 15vh;
    height: 70vh;
  }
`

export const Overlay = styled.div.withConfig({
  displayName: 'OverlaySlider',
})`
  position: absolute;
  top: -1px;
  z-index: 1000;
  width: 100%;
  height: calc(100% + 1px);
  background: ${light};
`

export const Content = styled.div.withConfig({
  displayName: 'PageHeadingContent',
})`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: all;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    background: url(${shineImg}),
      linear-gradient(
        0deg,
        rgba(89, 0, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.2) 50%
      );
    -webkit-background-clip: text;
    background-position-x: -1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    -webkit-text-stroke: 3px ${dark75};
    filter: drop-shadow(25px 20px 5px ${dark33});
    font-size: 7.5vmax;
    font-weight: 800;
    text-transform: uppercase;
    width: 100%;
    height: calc(100% - 150px);
    animation: shine 500ms cubic-bezier(0, 1, 1, 0.01) 4s;

    @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
      font-size: 7vmax;
      -webkit-text-stroke: 1px ${black};
      text-align: center;
    }

    @media (min-height: 824px) and (max-height: 1366px) and (min-width: 451px) and (max-width: 1024px) and (orientation: portrait) {
      font-size: 7vmax;
      -webkit-text-stroke: 2px ${black};
      text-align: center;
    }

    @keyframes shine {
      0% {
        background-position-x: -500px;
        background-position-y: 0%;
      }
      100% {
        background-position-x: 1000px;
        background-position-y: 50%;
      }
    }
  }

  p {
    font-size: 22px;
    color: ${light};
    filter: drop-shadow(2px 2px 1px ${dark});

    > span {
      text-align: left;
      width: 100%;
    }
  }
`
