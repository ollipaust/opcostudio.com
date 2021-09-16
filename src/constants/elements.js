import React from 'react'
import styled from 'styled-components'
import { accent, accentGradient150, dark, light } from 'constants/colors'
import { pulseRings } from 'constants/animations'
import { Link } from 'gatsby'
import { PointLightShadow } from 'three'

export const StyledButton = styled(Link).withConfig({
  displayName: 'StyledButton',
})`
  display: inline-flex;
  place-content: center
  position: relative;
  color: ${light};
  font-family: Campton;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  background: transparent;
  border-radius: 0.25em;
  border-width: 2px;
  border-style: solid;
  border-color: ${accent};
  margin: 1rem;
  padding: 15px 20px;
  overflow: hidden;
  text-decoration: none;
  pointer-events: all;
  transition: color 350ms ease 175ms;

  @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
    font-size: 0.75rem;
    padding: 7.5px 12.5px !important;
    display: block !important;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    font-size: 0.66rem;
    padding: 7.5px 12.5px !important;
  }

  &.dark {
    border-color: ${dark}!important;
    color: ${light}!important;

  }
  
  :hover,
  :active {
      color: ${dark};
      transition: color 350ms ease 150ms;

      &.dark {
        color: ${dark}!important;
        transition: color 350ms ease 150ms;
    
      }
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 200px;
    background: ${accentGradient150};
    z-index: -1;
    transform: translateY(0%) translateZ(0);
    transition: transform 500ms ease-in-out 50ms;
  }
  :hover::after,
  :active::after {
    transform: translateY(-100%) translateZ(0);
    transition: transform 500ms ease-in-out 0ms;
  }

  &.dark {
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 200px;
      background: ${dark};
      z-index: -1;
      transform: translateY(0%) translateZ(0);
      transition: transform 500ms ease-in-out 50ms;
    }
    :hover::after,
    :active::after {
      transform: translateY(-100%) translateZ(0);
      transition: transform 500ms ease-in-out 0ms;
    }
  }

  ${pulseRings}
`

export const Divider = styled.span.withConfig({
  displayName: 'Divider',
})`
  display: inline-block;
  height: 0.4em;
  width: 10%;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
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

export const wordsList = [
  'React.JS',
  'HTML',
  'CSS',
  'WordPress',
  'Gatsby.JS',
  'Frontend',
  'Responsiveness',
  'Redux',
  'SEO',
  'MongoDB',
  'Express',
  'Elasticsearch',
  'Yarn',
  'Node.JS',
  'JAMstack',
  'Next.JS',
  'JavaScript',
  'ES6',
  'Netlify',
  'Framer-Motion',
  'THREE.JS',
  'React-Three-Fiber',
  'GSAP',
  'React-Transition-Group',
  'AWS',
  'Git',
  'Client-Side-Rendering',
  'Server-Side-Rendering',
  'UX Design',
  'Hyper Terminal',
  'UI Design',
  'Web Design',
  'Graphic Design',
  'Adobe Photoshop',
  'Styled-Components',
  'Figma',
  'Joomla',
  'NPM',
  'PWA',
  'GitHub',
  'Restful API',
  'Agile',
  'Bootstrap',
  'Chrome',
  'FireFox',
  'jQuery',
  'MySQL',
  'Version Control',
]
