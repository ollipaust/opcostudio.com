import React from 'react'
import RainbowSource from './rainbowSource'
import './style.css'

const Rainbow = ({ t, c, cn, o, r, f, s, ts, g, cp }) => {
  function customClassName() {
    let ccn = cn

    if (cn !== undefined) {
      return (ccn = '' + cn)
    }
  }

  function gt() {
    if (g !== undefined) {
      return 'text'
    }
    {
      return null
    }
  }
  function cpv() {
    if (cp == undefined) {
      return 'lowercase'
    }
    if (cp == true) {
      return 'uppercase'
    }
    if (cp == false) {
      return 'lowercase'
    }
  }
  const styles = {
    display: 'block',
    width: '100%',
    textTransform: cpv(),
    fontSize: s,
    fontWeight: 'bolder',
    fontFamily: f,
    backgroundImage: g,
    WebkitBackgroundClip: gt(),
  }

  console.log('this is chosen font:\xa0' + f)
  console.log('this is colors value:\xa0' + c)
  console.log('this is stroke value:\xa0' + ts)
  console.log('this is gradient value:\xa0' + g)
  console.log('this is t value:\xa0' + t)
  console.log('this is typeof t value\xa0' + typeof withT)

  return (
    <span className={'rainbowText' + ' ' + customClassName()} style={styles}>
      <RainbowSource c={c} o={o} r={r} t={t} sv={ts} />
    </span>
  )
}

export default Rainbow
