import styled from 'styled-components'
import { accent } from 'constants/colors'

export const IoWorkTextContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease;
  min-height: 75vh;

  .title {
    white-space: pre;
    > span {
      color: ${accent};
    }
    @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
      white-space: normal;
    }
  }

  .text {
    margin-bottom: 2rem;
  }


  &.head-text {
    min-height: 60vh;
    flex-direction: column;
    place-content: center flex-start;

    .title {
    }

    .work-slider {
      padding-top: 200px;
      padding-bottom: 200px;
    }
  }

  &.github-text {
    flex-direction: row;
    justify-content: space-between;
    width 90%;
    margin: 0 auto 100px;

    @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
      display: block;

    .sub-title span {
      -webkit-text-stroke: 1px #26232f !important;
      font-size: 2.5rem;
    }
    }

    .title {
      margin-bottom: 50px;

      @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
        span {
          font-size: 1.5rem!important;
        }
      }
    }

    .left {
        flex: 0 0 25%; 
      }
     .right {
        flex: 0 0 70%; 
      }
      .text {
        flex: 1 0 0;
      }

    ul > li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding-top: 25px;
      padding-bottom: 100px;
      border-top: 2px solid ${accent};

      @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
        display: block;
      }

      .number {
        flex: 0 0 10%;
        > span { color: ${accent}; }

        @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
          margin-bottom: 1rem;
        }
      }
      .list-title  {
        &:hover {
          text-decoration: underline;
        }
        }
      }
    }
  }
`
