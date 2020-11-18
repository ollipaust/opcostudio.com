import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from 'store/createContext'
import Modal from 'components/modal'

const ModalContainer = ({ children }) => (
  <Consumer>
    {({ open, active, inactive }) => (
      <Modal open={open} active={active} inactive={inactive}>
        {children}
      </Modal>
    )}
  </Consumer>
)

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalContainer
