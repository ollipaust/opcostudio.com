import React from 'react'
import { TriangleWrapper } from './triangles.css'
import shortid from 'shortid'

const Triangle = ({
  left,
  right,
  top,
  bottom,
  scale,
  mainColor,
  shadowColor,
  rotation,
}) => {
  return (
    <TriangleWrapper
      key={shortid.generate()}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      scale={scale}
      mainColor={mainColor}
      shadowColor={shadowColor}
      rotation={rotation}
    >
      <div className="rotor-x">
        <div className="rotor-y">
          <div className="rotor-z">
            <div className="triangle face-1"></div>
            <div className="triangle face-2"></div>
            <div className="triangle face-3"></div>
            <div className="triangle face-4"></div>
          </div>
        </div>
      </div>
    </TriangleWrapper>
  )
}

export default Triangle
