import React, { useState, useEffect } from 'react'
import TextLoop from 'react-text-loop'

const RandomWords = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsActive(true), 3250)
  }, [])

  const wordsList = [
    'nice',
    'amazing',
    'beautiful',
    'creative',
    'super-fast',
    'interactive',
    'enjoyable',
    'animated',
    'modern',
    'authentic',
    'engaging',
    'unforgettable',
    'effective',
    'performant',
    'effortless',
    'lively',
    'dynamic',
  ]
  console.log(isActive)
  const toggle = isActive ? 'active' : 'inactive'

  return (
    <TextLoop
      interval="1500"
      children={wordsList}
      className={`loop ${toggle}`}
    />
  )
}
export default RandomWords
