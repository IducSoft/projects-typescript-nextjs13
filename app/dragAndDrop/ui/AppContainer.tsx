import React from 'react'
import   "../../globals.css"

const AppContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='appContainer'>
      {children}
    </div>
  )
}

export default AppContainer;