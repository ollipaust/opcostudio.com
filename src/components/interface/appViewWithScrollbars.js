import React from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import { MainView } from './interface.css'

const AppView = ({ children }) => {
  return (
    <MainView>
      <Scrollbar
        syncCallbacks={true}
        renderByPixels={true}
        alwaysShowTracks={true}
        damping={0.075}
      >
        {children}
      </Scrollbar>
    </MainView>
  )
}

export default AppView
