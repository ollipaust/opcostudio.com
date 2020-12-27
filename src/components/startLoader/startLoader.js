import React, { PureComponent } from 'react'
import { LoaderContainer } from './startLoader.css'
import { LogoSvgAnimated } from 'components/logoSvg'
import { light } from 'constants/colors'

class StartLoader extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { startLoading: true }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ startLoading: false }), 1000)
  }
  render() {
    return (
      <LoaderContainer
        className={
          this.state.startLoading === true ? 'loading' : 'loading-done'
        }
      >
        <LogoSvgAnimated
          delay={true}
          speed={750}
          className={
            this.state.startLoading === true ? 'loading' : 'loading-done'
          }
          strokeWidth="10"
          strokeColor={light}
          fill="none"
        />
      </LoaderContainer>
    )
  }
}

export default StartLoader
