import React, { createContext, useState, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const ScreenContext = createContext()

const ScreenProvider = ({ children }) => {
  const [isClient, setClient] = useState(false)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true)
    }
  }, [])

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <ScreenContext.Provider
      value={{
        isClient,
        isMobile,
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}

export default ScreenContext
export { ScreenProvider }
