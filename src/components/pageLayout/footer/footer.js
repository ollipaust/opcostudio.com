import React from 'react'
import Copyright from './bottom/copyright'
import Content from './content'
import { Container } from './footer.css'
import Wave from 'react-wavify'
import { darkest } from 'constants/colors'

const Footer = () => {
  return (
    <Container>
      {/*<Wave
        fill={darkest}
        className="footerWaves"
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      /> */}
      <Content />
      <Copyright />
    </Container>
  )
}

export default Footer
