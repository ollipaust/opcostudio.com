import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './createContext'
import { getWindowHeight } from 'react-div-100vh/lib/getWindowHeight'

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  state = {
    open: false,
    active: () => this.setState({ open: true }),
    inactive: () => this.setState({ open: false }),
  }

  render() {
    if (typeof window !== 'undefined') {
      {
        getWindowHeight
      }
    }

    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
