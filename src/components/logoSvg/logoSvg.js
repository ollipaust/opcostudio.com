import React from 'react'
import SvgLines from 'react-mt-svg-lines'
import { Container } from './logoSvg.css'
import PropTypes from 'prop-types'

const LogoSvg = ({
  delay,
  speed,
  className,
  fill,
  strokeWidth,
  strokeColor,
}) => {
  console.log(speed)
  return (
    <Container className={className}>
      <SvgLines
        className={className}
        animate={delay}
        duration={speed}
        timing={'ease'}
        playback={'infinite alternate both'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 706.24 706.24">
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M435.47,127.53c-75.59,0-136.87,60-136.87,134s61.28,134.05,136.87,134.05,136.88-60,136.88-134S511.07,127.53,435.47,127.53Zm0,207.77c-41.57,0-75.28-33-75.28-73.73s33.71-73.72,75.28-73.72,75.29,33,75.29,73.72S477.05,335.3,435.47,335.3Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M682.42,373.53a138.27,138.27,0,0,0,75.28,22.09c75.6,0,136.88-60,136.88-134s-61.28-134-136.88-134S620.89,187.48,620.83,261.46h0V395.62h61.59ZM757.7,187.85c41.58,0,75.28,33,75.28,73.72s-33.7,73.73-75.28,73.73-75.28-33-75.28-73.73S716.12,187.85,757.7,187.85Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M437.29,504.3a75.38,75.38,0,0,1,68.4,42.93h64.84C556.32,488,502.06,444,437.29,444c-75.59,0-136.87,60-136.87,134s61.28,134,136.87,134c64.77,0,119-44.06,133.24-103.24H505.69a75.4,75.4,0,0,1-68.4,42.93c-41.58,0-75.28-33-75.28-73.73S395.71,504.3,437.29,504.3Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M757.7,444c-75.59,0-136.87,60-136.87,134s61.28,134,136.87,134,136.88-60,136.88-134S833.3,444,757.7,444Zm0,207.77c-41.58,0-75.28-33-75.28-73.73s33.7-73.72,75.28-73.72S833,537.31,833,578,799.28,651.75,757.7,651.75Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M335.05,458.45l-39.93-39.93,37.42-37.42a159.42,159.42,0,0,1-26-27.41l-64.4,64.4,67.16,67.17A159.24,159.24,0,0,1,335.05,458.45Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M637.67,681.12l-40,40-39.81-39.81A158.29,158.29,0,0,1,537.07,701c-2.26,1.78-4.57,3.48-6.92,5.13l68,68L666,706.18A159.26,159.26,0,0,1,637.67,681.12Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M883,358.44a159.26,159.26,0,0,1-26.48,26.06l38.87,38.87-34.9,34.9a159.41,159.41,0,0,1,26,27.38l61.85-61.85Z"
            transform="translate(-242.16 -67.83)"
          />
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fill}
            d="M555.42,158.23l37.43-37.44,41.51,41.51a159.71,159.71,0,0,1,27-25.54L592.42,67.83,527.05,133.2A160,160,0,0,1,555.42,158.23Z"
            transform="translate(-242.16 -67.83)"
          />
        </svg>
      </SvgLines>
    </Container>
  )
}

LogoSvg.propTypes = {
  speed: PropTypes.number.isRequired,
}

export default LogoSvg
