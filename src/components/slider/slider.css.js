import styled from 'styled-components'
import { accent, accent33, textDark, light, dark66 } from 'constants/colors'

export const Container = styled.div`
  --slide-size: 80vmin;
  --slide-margin: 4vmin;
  --color-primary: ${accent};
  --base-duration: 500ms;
  --base-ease: cubic-bezier(0.25, 0.46, 0.45, 0.84);

  .icon {
    fill: ${textDark};
    width: 100%;
  }

  .works-button {
    margin-top: 2rem;
    color: ${light}!important;

    &:hover {
      text-shadow: 2px 2px 2px ${dark66};
    }
  }

  .slide-year {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .slider-controls {
    display: flex;
    justify-content: center;
    position: absolute;
    top: calc(100% + 1rem);
    width: 100%;

    .btn {
      --size: 5rem;
      align-items: center;
      background-color: transparent;
      border: 3px solid transparent;
      border-radius: 100%;
      display: flex;
      height: var(--size);
      width: var(--size);
      padding: 0;
      margin: 0 25px;

      &:focus {
        border-color: ${accent};
        outline: none;
      }
      &:hover {
        cursor: pointer;
      }
    }

    .btn--previous > * {
      transform: rotate(180deg);
    }
  }

  .slider {
    height: var(--slide-size);
    margin: 0 auto;
    position: relative;
    width: var(--slide-size);
  }

  .slider-wrapper {
    display: flex;
    margin: 0 calc(var(--slide-margin) * -1);
    position: absolute;
    transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);
  }

  .slide {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    height: var(--slide-size);
    width: var(--slide-size);
    justify-content: flex-end;
    align-items: center;
    border-radius: 2%;
    color: ${light};
    margin: 0 var(--slide-margin);
    opacity: 0.25;
    overflow: hidden;
    text-align: center;
    transition: opacity calc(var(--base-duration) / 2) var(--base-ease),
      transform calc(var(--base-duration) / 2) var(--base-ease);
    z-index: 1;
  }
  .slide-previous:hover,
  .slide-next:hover {
    opacity: 0.5;
  }
  .slide-previous {
    cursor: grab;
  }
  .slide-previous:hover {
    transform: translateX(2%);
  }
  .slide-next {
    cursor: grab;
  }
  .slide-next:hover {
    transform: translateX(-2%);
  }

  .slide-current {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;

    .slide-gatsby-image {
      transform: scale(1);
      transition: transform var(--base-duration) ease;
      cursor: pointer;
    }

    &:hover .slide-gatsby-image {
      transform: scale(1.025);
      transition: transform var(--base-duration) ease;
      cursor: pointer;
    }
  }
  .slide-gatsby-image {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .slide-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;

    .slide-image-container {
      height: 100%;
    }
  }

  .slide-headline {
    font-size: 4rem;
    font-weight: 700;
    position: relative;
  }

  .slide-content {
    position: relative;
    width: 100%;
    background: ${accent33};
    opacity: 0;
    padding: 4vmin;
    transition: transform var(--base-duration) var(--base-ease);
    visibility: hidden;
  }
  .slide-current .slide-content {
    animation: fade-in calc(var(--base-duration) / 2) var(--base-ease) forwards;
    visibility: visible;
  }

  @-webkit-keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
