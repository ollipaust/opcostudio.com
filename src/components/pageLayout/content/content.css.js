import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { light, accent, darker60 } from 'constants/colors'

export const ContainerWrapper = styled.section.withConfig({
  displayName: 'ContentWrapper',
})`
  position: relative;
  margin: 0 auto;
  z-index: 10;
  pointer-events: none;
  overflow: hidden;

  @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
  }
`

export const Content = styled.article.withConfig({
  displayName: 'ContentContainer',
})``

export const ContentHeading = styled.article.withConfig({
  displayName: 'ContentHeading',
})`
  display: flex;
  width: 100%;
  position: relative;
  height: auto;
  justify-content: space-between;
  margin-bottom: 112.5px;

  @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
    flex-direction: column;
    [class*='Title-'] {
      &:nth-of-type(1) {
        padding-right: 0!important;
      }
      &:nth-of-type(2) {
        padding-left: 0!important;
      }
      > span {
        text-align: center;
      }
    }
  }

  [class*='Title-'] {
    font-family: Campton;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 2.5rem;

    > span:nth-of-type(1) {
      font-weight: 800;
      margin-bottom: 2rem;
    }

    &:nth-of-type(1) {
      padding-right: 2.5rem;
    }
    &:nth-of-type(2) {
      padding-left: 2.5rem;
    }
  }
  sub {
    text-align: justify;
    transform: scale(1, 1.15);

    span {
      font-family: Roboto;
      font-size: 16px;
      line-height: 1;
    }
    .inline {
      span {
        display: inline-block;
        border-bottom: ${accent} 1px solid;
      }
    }
  }
`
export const ContentContainer = `
display: flex;
flex-direction: column;
place-content: flex-start;
position: relative;
height: 100%;
margin: 150px 7.5vw 0;
padding: 5rem;
z-index: 10000;
pointer-events: all;
will-change: transform, opacity;

@media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
  margin: 100px 7.5vw 0;
}

[class*='Title-'] {
  > span {
    color: ${darker60};
  }
}

@media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
  padding: 1.5rem;
}


p,
p > span {
  font-size: 18px;
}
`
