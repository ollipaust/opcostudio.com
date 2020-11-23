import React from 'react'
import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import {
  accent,
  accentGradient,
  accentGradient150,
  dark,
  light,
} from 'constants/colors'
import { pulse } from 'constants/animations'

export const ButtonStyled = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: inline-block;
  text-align: center;
  background: transparent;
  border-radius: 0.25em;
  border-width: 2px;
  border-style: solid;
  border-color: ${accent};
  margin: 2vmax 0.5rem 0;
  padding: 15px 20px;
  overflow: hidden;
  text-decoration: none;
  pointer-events: all;

    &.dark {
      border-color: ${dark};

        > span {
          color: ${accent};
        }

        ::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: ${dark};
          z-index: -1;
          transform: translateY(-100%) translateZ(0);
          transition: transform 500ms ease-in-out 50ms;
        }
        :hover::after, :active::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: ${dark};
          z-index: -1;
          transform: translateY(-50%) translateZ(0);
          transition: transform 500ms ease-in-out 0ms;
        }

    }

    @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
      padding: 7.5px 12.5px!important;
    }
    @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
      padding: 7.5px 12.5px!important;
    }

    span {
      color: ${dark};
      font-family: Campton;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: color 300ms ease 175ms;

        @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
          font-size: 0.75rem;
        }
        @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
          font-size: 0.66rem;
        }
    }

    :hover, :active {

      span {
        color: ${light};
        transition: color 300ms ease 100ms;
      }
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${accentGradient150};
      z-index: -1;
      transform: translateY(-100%) translateZ(0);
      transition: transform 500ms ease-in-out 50ms;
    }
    :hover::after, :active::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${accentGradient150};
      z-index: -1;
      transform: translateY(-50%) translateZ(0);
      transition: transform 500ms ease-in-out 0ms;
    }

    .pulsing-rings {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      pointer-events: none;
      transition: opacity 350ms ease-in-out 2.5s;
    }
    .pulsing-rings .pulsing-ringlet {
      position: absolute;
  
      width: 250px;
      height: 250px;
      background: transparent;
      border: 3px solid rgba(135, 0, 255, 0.15);
      border-radius: 50%;
      transform: scale(0.1, 0.1);
      opacity: 0;
      animation: pulse 13s ease-out infinite;
      animation-delay: 3s;
    }
    .pulsing-rings .pulsing-ringlet:nth-of-type(2) {
      animation-delay: 3.3s;
    }
    .pulsing-rings .pulsing-ringlet:nth-of-type(3) {
      animation-delay: 3.6s;
    }


    ${pulse}
`
export const HeroButtonsContainer = styled.span.withConfig({
  displayName: 'HeroButtonsContainer',
})`
  display: block;
`
export const Divider = styled.span.withConfig({
  displayName: 'Divider',
})`
  display: inline-block;
  height: 0.4em;
  width: 10%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background: ${accentGradient150};
  border-radius: 0.25em;

  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    height: 0.25em;
    border-radius: 1rem;
    margin-top: 0.55rem;
    margin-bottom: 0.55rem;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    height: 0.25em;
    border-radius: 1rem;
    margin-top: 0.55rem;
    margin-bottom: 0.55rem;
  }
`

export const Indicator = () => {
  return (
    <div className="pulsing-rings">
      <div className="pulsing-ringlet"></div>
      <div className="pulsing-ringlet"></div>
      <div className="pulsing-ringlet"></div>
    </div>
  )
}

export const Hr = styled.hr.withConfig({
  displayName: 'HorizontalLine',
})`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border: 0px;
  width: 87.5%;
  height: 1px;
  background-image: -webkit-linear-gradient(left, ${light}, ${dark}, ${light});
`

export const absoluteMotionDiv = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
}
