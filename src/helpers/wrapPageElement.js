import React from 'react'
import Interface from 'components/interface'
import PropTypes from 'prop-types'

const wrapPageElement = ({ element, props }) => {
  return <Interface {...props}>{element}</Interface>
}

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
}

export default wrapPageElement
