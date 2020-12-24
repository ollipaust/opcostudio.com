import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './title.css'

const Title = ({ children, as = 'span', size, className }) => {
  return (
    <Text as={as} size={size} className={className}>
      <span>{children}</span>
    </Text>
  )
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'larger', 'super', 'medium', 'small']),
}

export default Title
