import React from 'react'
import images from 'components/gallery/item'
import { Container, Side, GalleryStyles } from './gallery.css'
import ImageGallery from 'react-image-gallery'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function renderLeftNav(onClick, disabled) {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      aria-label="Prev Slide"
      disabled={disabled}
      onClick={onClick}
      tabIndex="0"
    >
      <FaArrowLeft size={30} color="#fff" />
    </button>
  )
}

function renderRightNav(onClick, disabled) {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav"
      aria-label="Next Slide"
      disabled={disabled}
      onClick={onClick}
      tabIndex="0"
    >
      <FaArrowRight size={30} color="#fff" />
    </button>
  )
}

const Gallery = () => (
  <Container>
    <GalleryStyles />
    <ImageGallery
      items={images}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      showThumbnails={false}
      showIndex={true}
      showPlayButton={false}
      lazyLoad={true}
    ></ImageGallery>
  </Container>
)

export default Gallery
