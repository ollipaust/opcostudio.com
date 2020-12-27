import React, { useState, useEffect } from 'react'
import TextLoop from 'react-text-loop'

const RandomWords = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsActive(true), 4000)
  }, [])

  const wordsList = [
    'amazing',
    'beautiful',
    'creative',
    'super-fast',
    'mindful',
    'interactive',
    'enjoyable',
    'animated',
    'modern',
    'authentic',
    'engaging',
    'catchy',
    'effective',
    'performant',
    'effortless',
    'lively',
    'dynamic',
  ]
  if (isActive != true) {
    return null
  } else {
    return <TextLoop interval="1500" children={wordsList} className="loop" />
  }
}
export default RandomWords
