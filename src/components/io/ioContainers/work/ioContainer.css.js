import styled from 'styled-components'
import { accent } from 'constants/colors'

export const IoWorkTextContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease;

  .title {
    white-space: pre;
    > span {
      color: ${accent};
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
      margin-top: 150px;
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
    .title {
      margin-bottom: 50px;
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
      .number {
        flex: 0 0 10%;
        > span { color: ${accent}; }
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
