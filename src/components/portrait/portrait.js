import React from 'react'
import { PortraitWrapper } from './portrait.css'
import PortraitContent from './portraitContent'

const Portrait = ({ caption }) => {
  return (
    <PortraitWrapper>
      <PortraitContent />
      <p className="caption">{caption}</p>
    </PortraitWrapper>
  )
}

export default Portrait
