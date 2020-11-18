import React from 'react'
import MagnetMouse from 'magnet-mouse'

class Cursor extends React.Component {
  constructor(props) {
    super(props)
    this.childKey = 0
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      let mm = new MagnetMouse({
        magnet: {
          element: '.magnet',
        },
        follow: {
          element: '.follow',
        },
      })

      mm.init()
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
    ++this.childKey
  }

  render() {
    return <div className="magnet" key={this.childKey} />
  }
}

export default Cursor
