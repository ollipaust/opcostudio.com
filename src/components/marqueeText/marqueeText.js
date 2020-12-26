import React, { useState } from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'
import { Container } from './marqueText.css'
import { wordsList } from 'constants/elements'
import random from 'random-key-generator'

const MarqueeText = ({ direction }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const [moving, setMoving] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker move={moving} speed={10} direction={direction}>
          {() => (
            <>
              {shuffle(wordsList).map(function(words) {
                return (
                  <h1
                    onMouseEnter={() => setMoving(false)}
                    onMouseLeave={() => setMoving(true)}
                    key={random() + '-' + words}
                  >
                    {words}
                  </h1>
                )
              })}
            </>
          )}
        </Ticker>
      )}
    </PageVisibility>
  )
}

const Marquee = () => {
  return (
    <Container>
      <MarqueeText key={random()} />
      <MarqueeText key={random()} direction="toRight" />
      <MarqueeText key={random()} />
      <MarqueeText key={random()} direction="toRight" />
    </Container>
  )
}

export default Marquee
