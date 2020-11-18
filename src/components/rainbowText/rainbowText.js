import React from 'react'
import Rainbow from './rainbow'
import { injectIntl } from 'react-intl'

const RainbowText = ({
  children,
  text,
  className,
  colors,
  opacity,
  font,
  size,
  unit,
  random,
  stroke,
  gradient,
  capital,
}) => {
  let texter = children || text

  if (font === 'default') {
    font = 'Gilbert'
  }

  function sizeValue() {
    let sizeVar = size

    if (size == undefined) {
      return (sizeVar = '5')
    }
    {
      return (sizeVar = size)
    }
  }

  function unitValue() {
    let unitVar = unit

    if (unit == undefined) {
      return (unitVar = 'rem')
    }
    {
      return (unitVar = unit)
    }
  }

  function fontSizeValue() {
    let fs = sizeValue() + unitValue()

    if (unit == undefined && size == undefined) {
      return (fs = '5rem')
    }
    {
      return fs
    }
  }
  function fontValue() {
    let fv = font

    if (font == undefined) {
      return (fv = 'Gilbert')
    }
    {
      return fv
    }
  }

  function childtext() {
    return (
      <Rainbow
        t={texter}
        cn={className}
        c={colors}
        f={fontValue()}
        o={opacity}
        r={random}
        s={fontSizeValue()}
        ts={stroke}
        g={gradient}
        cp={capital}
      />
    )
  }

  return childtext()
}

export default RainbowText
