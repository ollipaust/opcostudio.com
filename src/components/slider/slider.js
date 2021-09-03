import React, { Component } from 'react'
import { Container } from './slider.css'
import { StyledButton } from 'constants/elements'
import Img from 'gatsby-image'

class Slide extends Component {
  constructor(props) {
    super(props)

    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.slide = React.createRef()
  }

  handleSlideClick() {
    this.props.handleSlideClick(this.props.slide.index)
  }

  render() {
    const {
      image,
      description,
      year,
      buttonlink,
      headline,
      index,
    } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'

    if (current === index) classNames += ' slide-current'
    else if (current - 1 === index) classNames += ' slide-previous'
    else if (current + 1 === index) classNames += ' slide-next'

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
      >
        <div className="slide-image-container">
          <figure className="slide-image">
            <Img
              className="slide-gatsby-image"
              alt={headline}
              fluid={image ? image.childImageSharp.fluid : {}}
            />
          </figure>
        </div>

        <article className="slide-content">
          <h2 className="slide-headline">{headline}</h2>
          <span className="slide-year">- {year} -</span>
          <div>
            <span>{description}</span>
          </div>
          <StyledButton to={buttonlink} className="works-button">
            {'learn more'}
          </StyledButton>
        </article>
      </li>
    )
  }
}

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = { current: 0 }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
  }

  handlePreviousClick() {
    const previous = this.state.current - 1

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    })
  }

  handleNextClick() {
    const next = this.state.current + 1

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    })
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      })
    }
  }

  render() {
    const { current } = this.state
    const { slides } = this.props
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    }

    return (
      <Container className="work-slider">
        <div className="slider">
          <ul className="slider-wrapper" style={wrapperTransform}>
            {slides.map(slide => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              )
            })}
          </ul>

          <div className="slider-controls">
            <SliderControl
              type="previous"
              title="Go to previous slide"
              handleClick={this.handlePreviousClick}
            />

            <SliderControl
              type="next"
              title="Go to next slide"
              handleClick={this.handleNextClick}
            />
          </div>
        </div>
      </Container>
    )
  }
}

export default Slider
