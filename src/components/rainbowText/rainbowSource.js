import { isUndefined } from 'lodash'
import React from 'react'

const RainbowSource = ({ t, c, o, r, sv }) => {
  t = t.split('')
  const iR = r

  if (c == undefined) {
    c = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']
  }
  if (c.length < 1) {
    c = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']
  }
  if (c.length < 1) {
    c = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']
  }
  if (c == 'rainbow') {
    c = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']
  }
  if (c == false) {
    c = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']
  }
  if (c == null) {
    c = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']
  }
  if (c === 'none' || c === 'transparent') {
    c = ['transparent']
  }

  function rC() {
    const index = Math.floor(Math.random() * (c.length - 1))
    return c[index]
  }
  function oV() {
    let ov = o
    if (o == undefined) {
      return (ov = 1)
    }
    {
      return (ov = o)
    }
  }

  const RandomColored = () => {
    return (
      <div className="rainbowText-Random">
        {t.map((letter, i) => (
          <span style={{ color: rC(), opacity: oV() }} key={i}>
            {letter}
          </span>
        ))}
      </div>
    )
  }

  const RainbowColored = () => {
    if (c.length < t.length) {
      let d = c
      let cX = 0

      for (let i = 0; i < t.length - c.length; i++) {
        if (cX >= c.length) {
          cX = 0
        }
        d = [...d, c[cX]]
        cX++
      }
      c = d
    }

    return (
      <span className="rainbowLetters">
        {t.map((letter, i) => (
          <span
            style={{ color: c[i], opacity: o, WebkitTextStroke: sv }}
            key={i}
          >
            {letter}
          </span>
        ))}
      </span>
    )
  }

  const Source = () => {
    if (iR ? true : false) {
      return <RandomColored />
    }
    {
      return <RainbowColored />
    }
  }

  return <Source />
}

export default RainbowSource
